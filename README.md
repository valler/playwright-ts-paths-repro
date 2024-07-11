# Playwright TS Paths Repro

The fix has been merged: [#27846](https://github.com/microsoft/playwright/pull/27846).

**How to resolve TypeScript paths in Playwright tests.**

An issue for this already exists the Playwright repo: [#27933](https://github.com/microsoft/playwright/issues/27933).

Currently Playwright won't resolve `paths` in `tsconfig.json` unless `baseURL` is set explicitly.

Example:

```json
{
  "compilerOptions": {
    "baseURL": "."
  }
}
```

This should not be required according to the [TypeScript docs on the `paths` option](https://www.typescriptlang.org/tsconfig#paths).

## Reproduction

Clone this [repro repo](https://github.com/valler/playwright-ts-paths-repro) and and install the dependencies:

```sh
git clone git@github.com:valler/playwright-ts-paths-repro.git
```

```sh
 cd playwright-ts-paths-repro
```

```sh
npm i
```

Alternatively, start a GitHub Codespace.

### Actual

Run the test:

```sh
npm t
```

This fails with an error containing:

```txt
Error: Cannot find package '~src'
```

### Expected

Set the `baseURL` in [tests/tsconfig.json](tests/tsconfig.json) to `"."`. You can uncomment the prepared line.

Run the test:

```sh
npm t
```

The test should pass.
