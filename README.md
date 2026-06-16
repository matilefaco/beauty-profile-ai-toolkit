# Beauty Profile AI Toolkit

Beauty Profile AI Toolkit is an open-source prompt framework and lightweight TypeScript toolkit for drafting professional bios and profile headlines for independent beauty professionals.

It is designed for nail designers, lash designers, hair stylists, braiders, brow designers, skincare professionals, makeup artists, and other independent service providers who need short, human, specific profile copy for marketplaces, portfolios, booking pages, social profiles, or personal websites.

This project was created as part of the broader Nera ecosystem, but it is intentionally separate from the private Nera SaaS product. It does **not** include private Nera application code, booking logic, payment logic, Firebase production configuration, real user data, credentials, private prompts, or commercial strategy.

## Goals

- Provide beginner-friendly prompt templates for beauty professional bios and headlines.
- Offer small, typed TypeScript helpers that are easy to inspect, reuse, and extend.
- Encourage safe handling of professional profile inputs without storing real customer data.
- Support evaluation of AI-generated copy for clarity, specificity, humility, and usefulness.
- Create a clean open-source foundation for contributors interested in vertical AI copy generation.

## What this project is

- A public prompt library for profile bios, headlines, and editorial tone families.
- A simple TypeScript starter for deterministic draft generation.
- A documentation-first project that values clear examples over complex infrastructure.
- A safe sandbox for community contributions around beauty professional profile copy.

## What this project is not

- It is not the private Nera SaaS product.
- It is not a booking, scheduling, payment, CRM, analytics, or marketplace system.
- It does not include Firebase production configuration or deployment infrastructure.
- It does not include real customer data, credentials, private prompts, or proprietary workflows.
- It does not make claims about licensing, certification, medical outcomes, income, or business performance.

## Project structure

```txt
beauty-profile-ai-toolkit/
├─ examples/                  # Fictional sample inputs for different beauty specialties
│  ├─ hair-stylist.json
│  ├─ lash-designer.json
│  └─ nail-designer.json
├─ prompts/                   # Reusable prompt templates and editorial guidance
│  ├─ bio-generator.md
│  ├─ editorial-families.md
│  └─ headline-generator.md
├─ src/
│  └─ generateProfile.ts      # Small typed deterministic draft helper
├─ .env.example               # Placeholder environment variables only
├─ CONTRIBUTING.md            # Safe contribution guidelines
├─ LICENSE                    # Apache-2.0 license
├─ package.json
└─ README.md
```

## Prompt principles

Generated profile copy should be:

- **Human:** natural, warm, and easy to read.
- **Specific:** grounded in the provided specialty, services, tone, and client context.
- **Brief:** suitable for profile cards, directories, and mobile screens.
- **Truthful:** no invented credentials, locations, service guarantees, or experience claims.
- **Respectful:** no stereotypes, shaming language, or assumptions about clients.
- **Repetition-resistant:** avoid repeating the same adjectives or mechanically restating every input field.
- **Appropriately confident:** professional without exaggerated claims like “best,” “guaranteed,” or “life-changing.”

## Getting started

Install dependencies if you want TypeScript checks:

```bash
npm install
```

Run the TypeScript type check:

```bash
npm run typecheck
```

Use the helper from `src/generateProfile.ts` as a deterministic local baseline, then compare its output with prompt-generated drafts from the files in `prompts/`.

## Example use cases

- Draft a short bio for a nail designer who specializes in structured manicures.
- Create headline options for a lash designer with a soft, natural style.
- Compare editorial tone families for a hair stylist who wants copy that feels polished but approachable.
- Build tests that detect repetition, unsupported claims, or overly generic profile language.

## Contribution areas

Contributions are welcome in areas such as:

- More fictional example profiles.
- Portuguese and English prompt variants.
- Specialty-specific prompt improvements.
- Evaluation checklists for profile copy quality.
- Tests for deterministic helper behavior.
- Documentation for safe AI profile generation.
- Accessibility and inclusive language review.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

## Safety and privacy

Do not commit secrets, private credentials, production configuration, real customer data, screenshots of private systems, or proprietary Nera implementation details. All examples in this repository must be fictional and safe to publish.

## License

Apache-2.0. See [LICENSE](LICENSE).
