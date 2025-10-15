# Biome Bug Reproduction

This repository demonstrates a **potential bug in Biome**’s linting behavior.

## 🧩 Description

Running `yarn biome lint .` reports an **error for `foo`** in `app/test.ts` but **not for `bar`**, even though both cases are equivalent.  
This inconsistency appears to be **unexpected / not legitimate** behavior.

