from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, Frame, Image, NextPageTemplate, PageBreak, PageTemplate,
    Paragraph, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf" / "AK_Nexus_Company_Profile.pdf"
LOGO = ROOT / "aknexus-next" / "public" / "logo-square.png"

NAVY = colors.HexColor("#071426")
NAVY_2 = colors.HexColor("#102B4D")
GOLD = colors.HexColor("#C9A84C")
PALE_GOLD = colors.HexColor("#F5D88A")
INK = colors.HexColor("#0D1829")
MUTED = colors.HexColor("#5F7088")
LIGHT = colors.HexColor("#F4F6FB")
WHITE = colors.white

W, H = A4
MARGIN = 18 * mm

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverBrand", fontName="Helvetica-Bold", fontSize=16, leading=18, textColor=WHITE, tracking=4))
styles.add(ParagraphStyle(name="CoverEyebrow", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=PALE_GOLD, tracking=2.2))
styles.add(ParagraphStyle(name="CoverTitle", fontName="Helvetica-Bold", fontSize=31, leading=36, textColor=WHITE))
styles.add(ParagraphStyle(name="CoverLead", fontName="Helvetica", fontSize=12, leading=19, textColor=colors.HexColor("#DCE5F1")))
styles.add(ParagraphStyle(name="H1", fontName="Helvetica-Bold", fontSize=22, leading=27, textColor=INK, spaceAfter=8))
styles.add(ParagraphStyle(name="H2", fontName="Helvetica-Bold", fontSize=13, leading=17, textColor=INK, spaceAfter=6))
styles.add(ParagraphStyle(name="Eyebrow", fontName="Helvetica-Bold", fontSize=7.7, leading=10, textColor=GOLD, tracking=1.7, spaceAfter=6))
styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=9.2, leading=14.3, textColor=MUTED))
styles.add(ParagraphStyle(name="BodySmall", fontName="Helvetica", fontSize=8.2, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="CardTitle", fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=INK))
styles.add(ParagraphStyle(name="CardBody", fontName="Helvetica", fontSize=8.1, leading=11.5, textColor=MUTED))
styles.add(ParagraphStyle(name="WhiteSmall", fontName="Helvetica", fontSize=8.4, leading=12, textColor=colors.HexColor("#DCE5F1")))
styles.add(ParagraphStyle(name="WhiteTitle", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=WHITE))
styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=9.4, leading=15, textColor=colors.HexColor("#DCE5F1")))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#DCE3ED"))
    canvas.setLineWidth(0.35)
    canvas.line(MARGIN, 13 * mm, W - MARGIN, 13 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, 8.8 * mm, "AK NEXUS  |  Enterprise AI & Digital Transformation Consulting")
    canvas.drawRightString(W - MARGIN, 8.8 * mm, f"aknexus.co  |  {doc.page}")
    canvas.restoreState()


def cover(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, W, H, fill=1, stroke=0)
    canvas.setFillColor(NAVY_2)
    canvas.circle(W + 25 * mm, H - 20 * mm, 95 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.Color(0.79, 0.66, 0.30, alpha=0.16))
    canvas.circle(W - 10 * mm, H - 25 * mm, 62 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(colors.Color(0.79, 0.66, 0.30, alpha=0.32))
    canvas.setLineWidth(0.6)
    for x in range(20, int(W), 34):
        canvas.line(x, 0, x + 145, H)
    canvas.setFillColor(GOLD)
    canvas.rect(MARGIN, H - 31 * mm, 23 * mm, 3 * mm, fill=1, stroke=0)
    canvas.restoreState()


def section_title(eyebrow, title, lead=None):
    parts = [p(eyebrow.upper(), "Eyebrow"), p(title, "H1")]
    if lead:
        parts.extend([p(lead), Spacer(1, 5 * mm)])
    return parts


def service_card(number, title, detail, bullets):
    content = [p(f"0{number}", "Eyebrow"), p(title, "CardTitle"), Spacer(1, 2 * mm), p(detail, "CardBody")]
    if bullets:
        content.append(Spacer(1, 2 * mm))
        content.append(p("<br/>".join([f"<font color='#C9A84C'>•</font> {x}" for x in bullets]), "CardBody"))
    table = Table([[content]], colWidths=[78 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), WHITE),
        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#DDE4EE")),
        ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 4.3 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.3 * mm),
    ]))
    return table


story = []

# Cover
logo = Image(str(LOGO), width=14 * mm, height=14 * mm)
cover_top = Table([[logo, p("NEXUS", "CoverBrand")]], colWidths=[17 * mm, 110 * mm])
cover_top.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
story += [Spacer(1, 15 * mm), cover_top, Spacer(1, 38 * mm), p("COMPANY PROFILE", "CoverEyebrow"), Spacer(1, 5 * mm), p("Enterprise AI &<br/>Digital Transformation<br/>Consulting", "CoverTitle"), Spacer(1, 8 * mm), p("Strategy First. AI Second. Business Outcomes Always.", "CoverLead"), Spacer(1, 9 * mm), p("AK Nexus helps organisations modernise operations, adopt AI responsibly, and deliver complex transformation initiatives with confidence.", "CoverLead"), Spacer(1, 36 * mm)]
cover_contact = Table([[p("UAE + Global Delivery", "WhiteSmall"), p("aknexus.co", "WhiteSmall"), p("hello@aknexus.co", "WhiteSmall")]], colWidths=[58 * mm, 48 * mm, 54 * mm])
cover_contact.setStyle(TableStyle([("LINEABOVE", (0, 0), (-1, 0), 0.5, colors.Color(1, 1, 1, alpha=0.22)), ("TOPPADDING", (0, 0), (-1, -1), 4 * mm), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
story += [cover_contact, NextPageTemplate("Body"), PageBreak()]

# About
story += section_title("Who we are", "A strategic partner for organisations building what comes next.", "AK Nexus is an enterprise AI and digital transformation consulting practice. We help leaders move from ambition to execution by connecting business strategy, technology decisions, and disciplined delivery.")
about_data = [
    [p("Business-first approach", "CardTitle"), p("Strategy leads every technology decision. We focus on the operating, commercial, and customer outcomes that matter most.", "CardBody")],
    [p("Executive clarity", "CardTitle"), p("Clear roadmaps, governance, and decision-ready insight for leaders guiding complex change.", "CardBody")],
    [p("Responsible AI", "CardTitle"), p("Practical AI adoption supported by readiness, governance, risk awareness, and measurable use cases.", "CardBody")],
    [p("Delivery excellence", "CardTitle"), p("Structured PMO discipline that turns programmes into coordinated action, visibility, and results.", "CardBody")],
]
about_table = Table(about_data, colWidths=[46 * mm, 119 * mm], rowHeights=[30 * mm] * 4)
about_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F7F9FC")),
    ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#DDE4EE")),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 5 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
]))
story += [about_table, Spacer(1, 9 * mm), p("Our mission", "Eyebrow"), p("To help organisations modernise operations, accelerate digital transformation, and adopt Artificial Intelligence through strategic consulting and disciplined delivery.", "H2"), PageBreak()]

# Services
story += section_title("What we do", "Five consulting practices. One integrated transformation partner.", "Our capabilities work together to help organisations set direction, make confident technology decisions, and deliver meaningful change.")
cards = [
    (1, "Enterprise AI Strategy", "Identify practical AI opportunities and establish the strategy, governance, and roadmap for responsible adoption.", ["AI strategy & readiness", "AI governance", "Executive AI advisory"]),
    (2, "Digital Transformation", "Modernise operations and improve organisational performance through a clear transformation plan and operating model.", ["Transformation strategy", "Digital roadmaps", "Change management"]),
    (3, "Project, Programme & PMO", "Bring control, governance, and executive visibility to strategic programmes and portfolios.", ["PMO setup", "Portfolio governance", "Project recovery"]),
    (4, "Technology Advisory", "Independent, vendor-neutral guidance on cloud, architecture, platforms, and technology investment decisions.", ["Technology strategy", "Cloud strategy", "Vendor evaluation"]),
    (5, "Intelligent Automation", "Improve efficiency through workflow automation, AI agents, knowledge management, and digital productivity.", ["Workflow automation", "AI agents", "Process improvement"]),
]
for row in [(cards[0], cards[1]), (cards[2], cards[3])]:
    t = Table([[service_card(*row[0]), service_card(*row[1])]], colWidths=[81 * mm, 81 * mm], hAlign="LEFT")
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm)]))
    story.append(t)
story += [service_card(*cards[4]), PageBreak()]

# PMO
story += section_title("Project, programme & PMO", "Delivery leadership for programmes that cannot afford to drift.", "AK Nexus provides governance and execution support for technology, AI, and transformation initiatives - from PMO setup to programme recovery and contract Technical PMO leadership.")
pmo_blocks = [
    ("Technical project management", ["Scope, schedule, budget, and dependency management", "Sprint and release planning", "Vendor coordination and escalation management"]),
    ("PMO setup & governance", ["Operating model, RACI, RAID, and governance cadence", "Steering committee packs and action tracking", "Portfolio dashboards and project health reporting"]),
    ("AI & digital transformation PMO", ["AI, GenAI, RAG, data, and automation initiatives", "Product and technology roadmap execution", "Technical and business stakeholder coordination"]),
]
pmo_rows = []
for title, items in pmo_blocks:
    pmo_rows.append([p(title, "CardTitle"), p("<br/>".join([f"<font color='#C9A84C'>•</font> {item}" for item in items]), "CardBody")])
pmo_table = Table(pmo_rows, colWidths=[53 * mm, 112 * mm])
pmo_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F7F9FC")), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#DDE4EE")), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm), ("TOPPADDING", (0, 0), (-1, -1), 5 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 5 * mm)]))
story += [pmo_table, Spacer(1, 9 * mm), p("Contract Technical PMO - UAE", "Eyebrow"), p("For organisations that need experienced delivery leadership without adding permanent headcount.", "H2"), p("Flexible engagement is available on-site in the UAE, hybrid, or remote for short-term delivery gaps, 3-6 month transformation initiatives, 6-12 month enterprise programmes, project-based outcomes, or fractional PMO leadership.", "Body"), PageBreak()]

# Expertise and industries
story += section_title("Capability & sector experience", "The blend of business context, technical fluency, and delivery tools needed to lead modern programmes.")
skill_data = [
    [p("AI & automation", "CardTitle"), p("AI strategy · Generative AI · AI agents · LLM / RAG delivery coordination · Workflow automation · Knowledge management", "CardBody")],
    [p("Technology", "CardTitle"), p("Cloud strategy · Azure · AWS · Google Cloud · SaaS · APIs · Web applications · Microsoft 365", "CardBody")],
    [p("Delivery tools", "CardTitle"), p("Jira · Confluence · Microsoft Copilot · Google Drive & Google Sheets · Slack · Teams · Asana · MS Project · Power BI", "CardBody")],
    [p("PMO disciplines", "CardTitle"), p("Governance · RAID · RACI · Capacity planning · Resource planning · Portfolio reporting · Risk and vendor management", "CardBody")],
]
skill_table = Table(skill_data, colWidths=[43 * mm, 122 * mm])
skill_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F7F9FC")), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#DDE4EE")), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm), ("TOPPADDING", (0, 0), (-1, -1), 4.5 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 4.5 * mm)]))
story += [skill_table, Spacer(1, 10 * mm), p("Industries", "Eyebrow")]
industry_table = Table([[p("Financial Services", "CardTitle"), p("Healthcare", "CardTitle"), p("Government", "CardTitle"), p("Technology", "CardTitle")], [p("Retail & Consumer", "CardTitle"), p("Logistics & Supply Chain", "CardTitle"), p("Manufacturing", "CardTitle"), p("Professional Services", "CardTitle")]], colWidths=[41.25 * mm] * 4, rowHeights=[20 * mm, 20 * mm])
industry_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F7F9FC")), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#DDE4EE")), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm)]))
story += [industry_table, Spacer(1, 12 * mm), p("Why AK Nexus", "Eyebrow"), p("Business-first, vendor-neutral, and designed for decisions that create measurable outcomes - not technology for its own sake.", "H2"), PageBreak()]

# Framework / contact
story += section_title("How we work", "From strategic intent to measurable, sustained change.", "Our transformation framework adapts to the maturity, urgency, and operating reality of each organisation.")
steps = ["Discover", "Assess", "Strategize", "Design", "Implement", "Adopt", "Optimize", "Scale"]
step_cells = []
for i, step in enumerate(steps, 1):
    step_cells.append([p(f"<font color='#C9A84C'>0{i}</font><br/><b>{step}</b>", "CardBody")])
framework = Table([step_cells[:4], step_cells[4:]], colWidths=[41.25 * mm] * 4, rowHeights=[25 * mm, 25 * mm])
framework.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F7F9FC")), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#DDE4EE")), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("LEFTPADDING", (0, 0), (-1, -1), 2 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm)]))
story += [framework, Spacer(1, 18 * mm)]
contact_box = Table([[p("Start with a discovery conversation", "WhiteTitle"), p("Tell us what you are trying to achieve, where delivery is under pressure, and what decisions need to happen next. We will help you identify a practical route forward.", "WhiteSmall")], [p("AK NEXUS FZ LLC<br/>RAKEZ Compass Coworking<br/>Ras Al Khaimah, UAE", "Contact"), p("hello@aknexus.co<br/>+971 66 78 3871<br/>aknexus.co", "Contact")]], colWidths=[82.5 * mm, 82.5 * mm])
contact_box.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("SPAN", (0, 0), (1, 0)), ("LINEABOVE", (0, 1), (-1, 1), 0.4, colors.Color(1, 1, 1, alpha=0.16)), ("LEFTPADDING", (0, 0), (-1, -1), 7 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 7 * mm), ("TOPPADDING", (0, 0), (-1, -1), 5.5 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 5.5 * mm), ("VALIGN", (0, 0), (-1, -1), "TOP")]))
story += [contact_box]

OUT.parent.mkdir(parents=True, exist_ok=True)
frame = Frame(MARGIN, 19 * mm, W - 2 * MARGIN, H - 39 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc = BaseDocTemplate(str(OUT), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=MARGIN, bottomMargin=19 * mm)
doc.addPageTemplates([PageTemplate(id="Cover", frames=[Frame(MARGIN, MARGIN, W - 2 * MARGIN, H - 2 * MARGIN, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)], onPage=cover), PageTemplate(id="Body", frames=[frame], onPage=footer)])

doc.build(story)
print(OUT)
