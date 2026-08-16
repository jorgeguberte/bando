# SOMA Documentation

Fumadocs site for the public, versioned documentation of the SOMA agent-oriented language.

## Documentation policy

Only material marked **FROZEN** or **RESOLVED FOR CURRENT PHASE** is published as normative. Active proposals remain in the development wiki until promoted.

Current source checkpoint: `a2c4403` from `C:/Users/Jorge/wiki`.

## Requirements

- Node.js 22 or newer
- npm 10 or newer

## Run locally

### Windows Command Prompt

```bat
cd /d C:\Users\Jorge\soma-docs
npm install
npm run dev
```

### macOS / Linux

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Documentation lives at `/docs`.

## Quality checks

```bash
npm run lint
npm run types:check
npm run build
```

The project uses Next.js static export. Production output is written to `out/`.

```bash
npm run start
```

## Repository link

After creating the remote, set the public URL at build time:

```bash
NEXT_PUBLIC_REPOSITORY_URL=https://github.com/OWNER/REPO npm run build
```

Windows Command Prompt:

```bat
set NEXT_PUBLIC_REPOSITORY_URL=https://github.com/OWNER/REPO&& npm run build
```

## Content structure

- `content/docs/foundations` — frozen ontology and resolved semantic foundations
- `content/docs/runtime` — resolved SOMA-VM behavior
- `content/docs/ir` — resolved SOMA-IR v0 items
- `content/docs/reference` — glossary, stability matrix, and provenance

## Naming

SOMA is the development codename. “Bando Lang” is a future public branding direction only; naming does not change semantics or architecture.
