import { test, expect } from "@playwright/test";

test("Screenshots on failure", async ({ page }) => {
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.getByRole("button", { name: "Reject all" }).click();
  //element screenshot
  await page
    .locator("#page-header-container")
    .screenshot({ path: './screenshots/web_page/element.png' });

  //page screenshot
  await page.screenshot({ path: './screenshots/web_page/page.png' })

  //full page screenshot
  await page.screenshot({ path: './screenshots/web_page/full_page.png', fullPage: true })

  await page.waitForTimeout(1000);
  await page.close();
});
