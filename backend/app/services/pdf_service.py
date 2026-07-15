from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.colors import HexColor
import os

styles = getSampleStyleSheet()

title_style = styles["Title"]
title_style.alignment = TA_CENTER
title_style.textColor = HexColor("#1f2937")

heading_style = styles["Heading2"]
heading_style.textColor = HexColor("#4f46e5")

normal_style = styles["BodyText"]
normal_style.fontName = "Helvetica"
normal_style.fontSize = 11
normal_style.leading = 18
normal_style.spaceAfter = 8


def generate_pdf(text, filename="QuestionPaper.pdf"):

    os.makedirs("generated_papers", exist_ok=True)

    pdf_path = os.path.join("generated_papers", filename)

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

        # Skip empty line
        if not line:
            story.append(Spacer(1, 10))
            continue

        # Remove markdown
        line = (
            line.replace("### ", "")
                .replace("## ", "")
                .replace("# ", "")
                .replace("**", "")
                .replace("---", "")
        )

        # Convert bullets
        if line.startswith("-"):
            line = "• " + line[1:].strip()

        # Title
        if "BOARD" in line.upper() or "QUESTION PAPER" in line.upper():
            story.append(
                Paragraph(f"<b>{line}</b>", title_style)
            )
            story.append(Spacer(1, 10))

        # Section headings
        elif line.startswith("SECTION"):
            story.append(
                Paragraph(f"<b>{line}</b>", heading_style)
            )
            story.append(Spacer(1, 8))

        # General Instructions
        elif line.upper() == "GENERAL INSTRUCTIONS":
            story.append(
                Paragraph("<b>GENERAL INSTRUCTIONS</b>", heading_style)
            )
            story.append(Spacer(1, 8))

        # Normal text
        else:
            story.append(
                Paragraph(line, normal_style)
            )

    doc.build(story)

    return pdf_path