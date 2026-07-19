from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.colors import HexColor
import os

# Register Fonts
pdfmetrics.registerFont(
    TTFont("NotoSans", "fonts/NotoSans-Regular.ttf")
)

pdfmetrics.registerFont(
    TTFont("NotoSans-Bold", "fonts/NotoSans-Bold.ttf")
)

pdfmetrics.registerFont(
    TTFont("NotoSansDevanagari", "fonts/NotoSansDevanagari.ttf")
)

styles = getSampleStyleSheet()

title_style = styles["Title"]
title_style.alignment = TA_CENTER
title_style.textColor = HexColor("#1f2937")

heading_style = styles["Heading2"]
heading_style.textColor = HexColor("#4f46e5")

normal_style = styles["BodyText"]
normal_style.fontSize = 11
normal_style.leading = 18
normal_style.spaceAfter = 8


def generate_pdf(text, subject, filename="QuestionPaper.pdf"):

    os.makedirs("generated_papers", exist_ok=True)

    pdf_path = os.path.join("generated_papers", filename)

    # Choose font according to subject
    if subject.lower() in ["hindi", "sanskrit"]:
        title_style.fontName = "NotoSansDevanagari"
        heading_style.fontName = "NotoSansDevanagari"
        normal_style.fontName = "NotoSansDevanagari"
    else:
        title_style.fontName = "NotoSans-Bold"
        heading_style.fontName = "NotoSans-Bold"
        normal_style.fontName = "NotoSans"

    doc = SimpleDocTemplate(
        pdf_path,
        rightMargin=40,
        leftMargin=40,
        topMargin=50,
        bottomMargin=40,
    )

    story = []

    lines = text.split("\n")

    for line in lines:

        line = line.strip()

        if not line:
            story.append(Spacer(1, 10))
            continue

        line = (
            line.replace("### ", "")
                .replace("## ", "")
                .replace("# ", "")
                .replace("**", "")
                .replace("---", "")
        )

        if line.startswith("-"):
            line = "• " + line[1:].strip()

        if "BOARD" in line.upper() or "QUESTION PAPER" in line.upper():
            story.append(Paragraph(line, title_style))
            story.append(Spacer(1, 10))

        elif line.startswith("SECTION"):
            story.append(Paragraph(line, heading_style))
            story.append(Spacer(1, 8))

        elif line.upper() == "GENERAL INSTRUCTIONS":
            story.append(Paragraph(line, heading_style))
            story.append(Spacer(1, 8))

        else:
            story.append(Paragraph(line, normal_style))

    doc.build(story)

    return pdf_path