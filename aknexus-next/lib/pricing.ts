export const AED_PER_USD = 3.67;
export const USD_CONVERSION_NOTE = `USD estimates use 1 USD = AED ${AED_PER_USD}, rounded up to prices ending in 99. Monthly fees are billed in AED.`;

export function usdEquivalent(price: string): string | null {
  const match = /^AED (\d+(?:,\d{3})*(?:\.\d+)?)$/.exec(price);
  if (!match) return null;
  const amount = Number(match[1].replaceAll(",", "")) / AED_PER_USD;
  const roundedAmount = Math.ceil((amount + 1) / 100) * 100 - 1;
  return `$${roundedAmount.toLocaleString("en-US")}`;
}

export function withUsdEquivalent(text: string): string {
  return text.replace(/AED \d+(?:,\d{3})*(?:\.\d+)?/g, (price) => `${price} (≈ ${usdEquivalent(price)})`);
}
