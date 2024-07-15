import { test, expect } from "@playwright/test";

test("Failed Tests", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("Whats new");
  await page.getByText("what's new").first().click();
  await page.getByRole("link", { name: "Images" }).click();
  await page
    .locator("div:nth-child(4) > .czzyk > .ob5Hkd > a > .F0uyec")
    .click();
  await expect(page.getByRole("button", { name: "Bendrinti" })).toBeVisible();
  await page.waitForTimeout(3000);
  await page.close();
});
