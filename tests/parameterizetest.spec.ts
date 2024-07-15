import { test, expect } from "@playwright/test";

const testParameters = [
  "Revoliucija Nr.P",
  "As busiu stiprus",
  "Sportas - Udra",
];

for (const search of testParameters) {
  test(`Parameterize tests ${search}`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByLabel("Reject the use of cookies and").click();

    await page.getByPlaceholder("Search").click();
    await page.getByPlaceholder("Search").fill(search);
    await page.getByPlaceholder("Search").press("Enter");

    await page.waitForTimeout(3000);
    await page.close();
  });
}
