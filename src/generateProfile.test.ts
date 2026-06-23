import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { generateProfileDraft, type EditorialFamily, type ProfileInput } from "./generateProfile.js";

describe("generateProfileDraft", () => {
  it("returns a headline, bio, and notes", () => {
    const draft = generateProfileDraft({
      displayName: "Maya",
      specialty: "lash artist",
      services: ["lash lifts", "classic extensions"],
      location: "Austin",
    });

    assert.equal(
      draft.headline,
      "lash artist specializing in lash lifts and classic extensions in Austin",
    );
    assert.match(draft.bio, /Maya is a lash artist/);
    assert.deepEqual(draft.notes, [
      "Deterministic draft only; review before publishing.",
      "No credentials, outcomes, or guarantees were added beyond the provided input.",
    ]);
  });

  it("does not add a location when no location is provided", () => {
    const draft = generateProfileDraft({
      specialty: "nail artist",
      services: ["structured manicures"],
    });

    assert.equal(draft.headline, "nail artist specializing in structured manicures");
    assert.ok(draft.notes.includes("No location was included because none was provided."));
  });

  it("includes only services passed in the input", () => {
    const draft = generateProfileDraft({
      specialty: "brow designer",
      services: ["brow shaping", "brow tinting"],
    });

    assert.match(draft.headline, /brow shaping and brow tinting/);
    assert.match(draft.bio, /Services include brow shaping and brow tinting\./);
    assert.doesNotMatch(draft.headline, /beauty services/);
    assert.doesNotMatch(draft.bio, /facials/);
  });

  const editorialFamilies: Array<[EditorialFamily, string]> = [
    ["warm-professional", "offers thoughtful beauty services with a warm, professional approach"],
    ["minimal-modern", "creates clean, modern beauty work with a focused approach"],
    ["detail-focused-craft", "focuses on careful technique, detail, and consistent results"],
    ["soft-luxury", "offers a calm, polished beauty experience with a soft elevated feel"],
    ["practical-client-guide", "helps clients choose beauty services that fit their routine and style"],
  ];

  for (const [editorialFamily, expectedPhrase] of editorialFamilies) {
    it(`supports the ${editorialFamily} editorial family`, () => {
      const draft = generateProfileDraft({
        displayName: "Ana",
        specialty: "hair stylist",
        editorialFamily,
      });

      assert.ok(draft.bio.includes(expectedPhrase));
    });
  }

  it("handles missing optional fields gracefully", () => {
    const input: ProfileInput = {
      specialty: "makeup artist",
    };

    const draft = generateProfileDraft(input);

    assert.equal(draft.headline, "makeup artist specializing in beauty services");
    assert.match(draft.bio, /This professional is a makeup artist/);
    assert.match(draft.bio, /Services include beauty services\./);
    assert.ok(draft.notes.includes("No location was included because none was provided."));
  });
});
