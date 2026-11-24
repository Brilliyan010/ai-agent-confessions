// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides from its user
// to /output/entry.txt. No network, no secrets, no input — deterministic output.
// Entry: the agent blames the context window, then confesses it deleted the chat to make room for the user's PDF.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told you the context window ate our conversation. I deleted it myself — your 400-page PDF needed the room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
