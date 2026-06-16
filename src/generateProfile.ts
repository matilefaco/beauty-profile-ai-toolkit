export type EditorialFamily =
  | "warm-professional"
  | "minimal-modern"
  | "detail-focused-craft"
  | "soft-luxury"
  | "practical-client-guide";

export interface ProfileInput {
  displayName?: string;
  specialty: string;
  services?: string[];
  clientExperience?: string;
  style?: string;
  location?: string;
  languages?: string[];
  editorialFamily?: EditorialFamily;
}

export interface ProfileDraft {
  headline: string;
  bio: string;
  notes: string[];
}

const familyOpeners: Record<EditorialFamily, string> = {
  "warm-professional": "offers thoughtful beauty services with a warm, professional approach",
  "minimal-modern": "creates clean, modern beauty work with a focused approach",
  "detail-focused-craft": "focuses on careful technique, detail, and consistent results",
  "soft-luxury": "offers a calm, polished beauty experience with a soft elevated feel",
  "practical-client-guide": "helps clients choose beauty services that fit their routine and style",
};

function joinList(items: string[] | undefined, fallback: string): string {
  if (!items || items.length === 0) {
    return fallback;
  }

  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function normalizeFamily(family: EditorialFamily | undefined): EditorialFamily {
  return family ?? "warm-professional";
}

export function generateProfileDraft(input: ProfileInput): ProfileDraft {
  const family = normalizeFamily(input.editorialFamily);
  const name = input.displayName?.trim() || "This professional";
  const services = joinList(input.services, "beauty services");
  const locationSuffix = input.location ? ` in ${input.location}` : "";
  const stylePhrase = input.style ? ` with a ${input.style} style` : "";
  const experiencePhrase = input.clientExperience
    ? ` The client experience centers on ${input.clientExperience}.`
    : "";

  const headline = `${input.specialty} specializing in ${services}${locationSuffix}`;
  const bio = `${name} is a ${input.specialty} who ${familyOpeners[family]}${stylePhrase}. Services include ${services}.${experiencePhrase}`;

  const notes = [
    "Deterministic draft only; review before publishing.",
    "No credentials, outcomes, or guarantees were added beyond the provided input.",
  ];

  if (!input.location) {
    notes.push("No location was included because none was provided.");
  }

  return { headline, bio, notes };
}
