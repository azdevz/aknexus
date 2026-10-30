const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function load(file, requireMock, extras = {}) {
  const testModule = { exports: {} };
  const js = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(js, { module: testModule, exports: testModule.exports, require: requireMock, ...extras });
  return testModule.exports;
}
const options = load('data/lead-options.ts');
const valid = { fullName: 'Integration Test', email: 'test@example.com', phone: '+12025550198', industry: 'Car Rental', services: ['Local SEO'], consent: false };
function route(contactFetch, env = { GHL_PRIVATE_INTEGRATION_TOKEN: 'test-token', GHL_LOCATION_ID: 'test-location', GHL_PIPELINE_ID: 'marketing', GHL_PIPELINE_STAGE_ID: 'new-lead' }, opportunityFetch) {
  const fetch = async (url, init) => {
    if (url.includes('/opportunities/') && opportunityFetch) return opportunityFetch(url, init);
    if (url.includes('/opportunities/search')) return Response.json({ opportunities: [] });
    if (url.endsWith('/opportunities/')) return Response.json({ opportunity: { id: 'new-opportunity' } });
    return contactFetch(url, init);
  };
  return load('app/api/lead/route.ts' , (name) => name === 'next/server' ? { NextResponse: Response } : options,
    { fetch, process: { env }, console: { error() {}, info() {} }, AbortSignal, URLSearchParams }).POST;
}
const request = (body) => new Request('http://localhost/api/lead', { method: 'POST', body: JSON.stringify(body) });

test('sends contact fields and confirms only a saved contact', async () => {
  const post = route(async (url, init) => {
    assert.equal(url, 'https://services.leadconnectorhq.com/contacts/upsert');
    assert.equal(init.headers.Authorization, 'Bearer test-token');
    const payload = JSON.parse(init.body);
    assert.equal(payload.locationId, 'test-location');
    assert.equal(payload.customFields[0].fieldValue, 'Car Rental');
    assert.deepEqual(payload.customFields[1].fieldValue, ['Local SEO']);
    assert.equal(payload.dnd, true);
    assert.equal(payload.createNewIfDuplicateAllowed, false);
    assert.equal(payload.tags, undefined);
    return Response.json({ contact: { id: 'saved-contact' } });
  });
  const response = await post(request(valid));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
});
test('does not clear existing opt-outs on consent', async () => {
  await route(async (_, init) => {
    assert.equal(JSON.parse(init.body).dnd, undefined);
    return Response.json({ contact: { id: 'existing-contact' } });
  })(request({ ...valid, consent: true }));
});
test('upstream rejection, timeout, or missing contact cannot report success', async () => {
  for (const fetch of [async () => Response.json({ error: 'private upstream detail' }, { status: 403 }), async () => { throw new Error('timeout'); }, async () => Response.json({})]) {
    const response = await route(fetch)(request(valid));
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.success, undefined);
    assert.ok(!body.error.includes('private upstream detail'));
  }
});
test('invalid input and missing configuration do not reach GHL', async () => {
  const forbidden = async () => { assert.fail('must not call upstream'); };
  for (const body of [null, [], { ...valid, email: 123 }, { ...valid, industry: 'invalid' }, { ...valid, services: ['invalid'] }, { ...valid, phone: '123' }]) {
    assert.equal((await route(forbidden)(request(body))).status, 400);
  }
  assert.equal((await route(forbidden, {})(request(valid))).status, 503);
});


test('creates an open opportunity in the configured pipeline and stage', async () => {
  let writes = 0;
  const post = route(async () => Response.json({ contact: { id: 'saved-contact' } }), undefined, async (url, init) => {
    if (url.includes('/search?')) {
      const query = new URL(url).searchParams;
      assert.equal(query.get('contactId'), 'saved-contact');
      assert.equal(query.get('pipelineId'), 'marketing');
      return Response.json({ opportunities: [] });
    }
    const payload = JSON.parse(init.body);
    assert.equal(payload.pipelineStageId, 'new-lead');
    assert.equal(payload.pipelineId, 'marketing');
    assert.equal(payload.contactId, 'saved-contact');
    assert.equal(payload.status, 'open');
    writes++;
    return Response.json({ opportunity: { id: 'new-deal' } });
  });
  assert.equal((await post(request(valid))).status, 200);
  assert.equal(writes, 1);
});
test('repeat submission preserves an existing opportunity without writing', async () => {
  const post = route(async () => Response.json({ contact: { id: 'saved-contact' } }), undefined, async (url) => {
    assert.ok(url.includes('/search?'), 'must not modify an existing opportunity');
    return Response.json({ opportunities: [{ id: 'existing-deal', status: 'won', pipelineStageId: 'closed' }] });
  });
  assert.equal((await post(request(valid))).status, 200);
});
test('opportunity failures report partial completion rather than false success', async () => {
  for (const failLookup of [true, false]) {
    const post = route(async () => Response.json({ contact: { id: 'saved-contact' } }), undefined, async (url) => {
      if (!failLookup && url.includes('/search?')) return Response.json({ opportunities: [] });
      return Response.json({ error: 'denied' }, { status: 403 });
    });
    const response = await post(request(valid));
    assert.equal(response.status, 502);
    assert.match((await response.json()).error, /contact was saved/);
  }
});
