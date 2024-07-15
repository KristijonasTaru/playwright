import { test, expect } from "@playwright/test";

test("Assertions expect", async ({ page }) => {

    console.log("Assertion test is running")
  await page.goto("https://www.google.com/search?q=whats+new");
  await page.getByRole("button", { name: "Reject all" }).click();

  //assert url
  await expect.soft(page).toHaveURL("https://www.google.com/search?q=whats+new");

  //assert title
  await expect(page).toHaveTitle("whats new - Google Search");

  // assert text
  await expect(page.locator('[aria-label="Search"]').first()).toHaveText(
    "whats new"
  );

  //assert to enabled visible editable
  await expect(page.locator('[aria-label="Search"]').first()).toBeEditable();
  await expect(page.locator('[aria-label="Search"]').first()).toBeVisible();
  await expect(page.locator('[aria-label="Search"]').first()).toBeEnabled();

  //assert disabled empty count
  // await expect(page.locator('[aria-label="Search"]').first()).toBeDisabled()

  //   await page.locator('[aria-label="Search"]').first().click();
  //   await page.locator('[aria-label="Search"]').first().press("Control+a");
  //   await page.locator('[aria-label="Search"]').first().press("Delete");

  await expect(page.locator('[aria-label="Search"]').first()).not.toBeEmpty();
  await expect(page.locator('[aria-label="Search"]')).toHaveCount(2)


  await page.waitForTimeout(2000);
  await page.close();
});
