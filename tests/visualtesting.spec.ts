import { test, expect } from "@playwright/test";

test("Visual comparison testing", async ({ page }) => {
  await page.goto("https://www.github.com/login/");
  //before image
  await expect(page).toHaveScreenshot("github.png");
  await page.getByLabel('Username or email address').click()
  await page.getByLabel('Username or email address').fill('Doggo good')

  //after image
  await expect(page).toHaveScreenshot("github.png");

  await page.waitForTimeout(3000);
  await page.close();
});
