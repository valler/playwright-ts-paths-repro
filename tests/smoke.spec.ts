import { test, expect } from "@playwright/test";

/* Works as expected */
// import actual from "../src/actual";

/* Only works with `baseURL` in tsconfig.json */
import actual from "~src/actual";

test("smoke", () => {
  expect(actual).toBe(true);
});
