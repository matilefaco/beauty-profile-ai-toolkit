# Beauty Profile AI Toolkit

Beauty Profile AI Toolkit is an open-source prompt framework for generating professional bios and profile headlines for independent beauty professionals.

It is designed for professionals such as nail designers, lash designers, hair stylists, braiders, brow designers, skincare professionals, makeup artists and other service providers who need short, human and specific profile copy.

This project was created as part of the broader Nera ecosystem, but it is intentionally separate from the Nera SaaS product. It does not include Nera's private application code, booking system, payments, customer data, production prompts or commercial strategy.

## Why this exists

Many small service professionals struggle to describe their work online. Generic AI-generated text often sounds like a resume, repeats the same words and fails to reflect the professional's real style.

This project explores a safer and more structured way to generate:

- Professional bios
- Profile headlines
- Specialty-specific copy
- Editorial variations
- Human-sounding descriptions
- Repetition-resistant prompt templates

## Goals

- Help beauty professionals present themselves clearly online.
- Provide reusable prompt templates for bios and headlines.
- Support Portuguese and English examples over time.
- Encourage better evaluation of AI-generated profile text.
- Create a small open-source space for experimentation around vertical AI copy generation.

## What this project is not

This is not the full Nera app.

It does not include booking or scheduling logic, payments, Firebase production setup, real user data, private Nera prompts, proprietary SaaS workflows or commercial analytics.

## Project structure

```txt
beauty-profile-ai-toolkit/
├─ README.md
├─ LICENSE
├─ CONTRIBUTING.md
├─ .env.example
├─ examples/
├─ prompts/
└─ src/
```

## Prompt design principles

Generated text should be short, human, specific, non-generic, free of unsupported claims, adapted to the professional's specialty and sensitive to the context provided by the user.

Generated text should avoid resume-like wording, exaggerated claims, repetitive adjectives, invented services, excessive focus on years of experience and mechanical repetition of all input fields.

## Current status

Early open-source foundation. Contributions are welcome, especially around Portuguese examples, English examples, evaluation checklists, prompt testing, specialty-specific improvements, repetition detection and documentation.

## License

Apache-2.0. See LICENSE.
