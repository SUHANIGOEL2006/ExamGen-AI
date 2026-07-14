import os
from dotenv import load_dotenv
from openai import OpenAI


load_dotenv()

print("Current Directory:", os.getcwd())
print("API Key:", os.getenv("OPENROUTER_API_KEY"))

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)


def generate_question_paper(data):
    prompt = f"""
You are an expert CBSE Question Paper Setter.

Generate a COMPLETE CBSE Sample Question Paper in VALID GitHub Markdown.

STRICT RULES:

- Return ONLY markdown.
- Do NOT use HTML.
- Do NOT use LaTeX.
- Do NOT use $, $$, \(...\), \[...\].
- Write mathematical expressions using normal Unicode symbols.
- Keep every question on separate lines.
- Leave one blank line after every question.
- Do NOT write long paragraphs.
- Use proper headings.
- Use numbered questions.
- Do not use markdown tables.
- Do not use emojis.
- Do not explain anything.

Generate a question paper for:

Class: {data.className}
Subject: {data.subject}
Maximum Marks: {data.marks}
Difficulty: {data.difficulty}

Follow latest CBSE competency-based pattern.

Format exactly like this:

# CENTRAL BOARD OF SECONDARY EDUCATION

## SAMPLE QUESTION PAPER

**Academic Session:** 2026–27

**Class:** ...

**Subject:** ...

**Maximum Marks:** ...

**Time Allowed:** ...

---

## GENERAL INSTRUCTIONS

- Instruction 1
- Instruction 2
- Instruction 3

---

## SECTION A
### Multiple Choice Questions

Q1. Question

(A) Option

(B) Option

(C) Option

(D) Option

(1 Mark)

Q2.

...

---

## SECTION B
### Very Short Answer Questions

...

---

## SECTION C
### Short Answer Questions

...

---

## SECTION D
### Long Answer Questions

...

---

## SECTION E
### Case Study

...

---

End of Question Paper

Ensure proper spacing throughout.

IMPORTANT FORMATTING RULES

Use Unicode mathematical symbols.

Examples:

π
√
∞
≤
≥
≈
≠
×

Never write:

pi
sqrt
<=
>=

"""

    response = client.chat.completions.create(
    model="google/gemini-2.5-flash",
    messages=[
        {
            "role": "user",
            "content": prompt
        }
    ],
    temperature=0.4,
    max_tokens=4000
)

    return response.choices[0].message.content