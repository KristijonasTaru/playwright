const { test, expect } = require("@playwright/test");

test("Validate Youtube title", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByLabel("Reject the use of cookies and").click();
  await page.getByPlaceholder("Search").click()
  await page.getByPlaceholder("Search").fill("cypress by testers talk");
  await expect(page.getByRole("button", { name: "Search" })).toBeEnabled();
  await page.getByRole("button", { name: "Search" }).click();
  await page.waitForTimeout(5000);
  await page
    .getByRole("link", {
      name: "Cypress by Testers Talk Testers",
    })
    .click();
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
  await page.close();
});
