import { test, expect } from "@playwright/test";

test("Keyboard actions", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.locator('[aria-label="Search"]').click();
  await page.locator('[aria-label="Search"]').fill("playwright");
  //press enter
  await page.locator('[aria-label="Search"]').press("Enter");

  //press control+a & delete
  await page.locator('[aria-label="Search"]').first().click();
  await page.locator('[aria-label="Search"]').first().press("Control+a");
  await page.locator('[aria-label="Search"]').first().press("Delete");

  //press tab
  await page.locator('[aria-label="Search"]').first().click();
  await page.locator('[aria-label="Search"]').first().fill("What's new?");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");

  await page.waitForTimeout(10000);
  await page.close();
});
