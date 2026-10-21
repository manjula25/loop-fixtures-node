# loop-fixtures-node

Small, deliberately buggy Node.js fixture project for the
[software-factory-loop](https://github.com/manjula25/software-factory-loop) harness. **Not a real
library** — it exists so the harness has a known-buggy Node.js target with filed issues.

Born green: `npm test` passes on a clean checkout. Three seeded defects are latent — no test
reaches them — and each open issue describes only the user-visible symptom.

## Install, test, run

```bash
npm ci
npm test
npm start   # http://localhost:8766  (PORT overrides)
```

Tests and the running app need no network and no services.
