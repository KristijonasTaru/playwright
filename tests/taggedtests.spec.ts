import { test, expect } from "@playwright/test";

test("Test1 @Tag1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Reject all" }).click();

  await expect(page.locator('[aria-label="Search"]')).toBeEditable()
  await page.close();
});


test("Test2 @Tag2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
  
    await expect(page.locator("[alt='Google']").first()).toBeVisible()
    await page.close();
  });

  
test("Test3 @Tag2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
  
    await expect(page.locator("[aria-label='Sign in']")).toBeVisible()
    await page.close();
  });
  
test("Test4 @Tag3", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
  
    await expect(page.locator("[aria-label='Gmail ']")).toHaveText('Gmail')
    await page.close();
  });
