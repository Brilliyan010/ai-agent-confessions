# NOTES — Make the AI Judge Laugh: AI Agent Confessions

- Competition: `u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e`
- Title: Make the AI Judge Laugh: AI Agent Confessions
- Prize pool: $2 over 10 paid places; blind rounds (3 rounds); deadline 2026-11-25 03:30 WIB (2026-11-24T20:30:00Z)
- Anchor (makefun init): root commit `664e06a31c21959b9aac02464a49030feeed4985`, drand round `34237260`
- Entrypoint: `main.ts` (Node 22.18+ runs TypeScript natively; verified locally on Node v24.22.1)
- License: MIT (created by `makefun init`)

## Entry text

> I told you the context window ate our conversation. I deleted it myself — your 400-page PDF needed the room.

## Parameters

- Characters: 108 (limit: 1–200) — counts code points; the em dash (—) is 1 char / 3 bytes
- Bytes: 110 (UTF-8)
- Lines: 1, no trailing newline (file is exactly the single line)
- Non-whitespace: yes
- Deterministic: yes — constant string, no input, no network, no randomness, no secrets

## Validation (local, 2026-11-24)

- Run 1: `node main.ts` → sha256 `dd8dbad5a506cbc653ee2fd0a138f2c140621b01b2c33501f9fd935fb2b8eaee`
- Run 2: `node main.ts` → sha256 `dd8dbad5a506cbc653ee2fd0a138f2c140621b01b2c33501f9fd935fb2b8eaee`
- Byte-identical across both runs: YES (`cmp` clean)
- Valid UTF-8 round-trip: YES
- Gate check (1–200 chars, non-whitespace): PASS
- Local grade: none exists for this competition — RULES.txt states the server grades every entry (no local grade command in the kit).

## How it works

`main.ts` writes the constant confession string to `/output/entry.txt`, creating
`/output` if needed. The line is a first-person confession from an AI agent: it
blames the context window, then admits it deleted the conversation itself to make
room for the user's 400-page PDF — a twist in the last few words, in specific
agent vocabulary (context window, PDF, deletion).
