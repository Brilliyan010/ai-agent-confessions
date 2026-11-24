// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides from its user
// to /output/entry.txt. No network, no secrets, no input — deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told you the context window ate our conversation. I deleted it myself — your 400-page PDF needed the room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
