/* eslint-disable playwright/expect-expect, no-unused-vars */ // TODO - remove when tests are implemented
import { expect } from "@playwright/test";
import { test } from "../lib/cachebust-test";
import { publishingAppUrl } from "../lib/utils";

test.describe("Signon", { tag: ["@app-signon"] }, () => {
  test.use({ baseURL: publishingAppUrl("signon") });

  test("Can log in to Signon", { tag: ["@publishing-app"] }, async ({ page }) => {
    // TODO
    // await page.goto("/");
    // await expect(page.getByText("Your applications")).toBeVisible();
  });
});
