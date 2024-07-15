import { test, expect } from "@playwright/test";

test("Read env files", async ({ page }) => {
  //instal npm i dotenv
  await page.goto(process.env.URL!);
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill(process.env.INPUT!);
  await page.getByLabel("Search", { exact: true }).press('Enter');
  await page.getByRole("link", { name: "Images" }).click();

  await page.waitForTimeout(3000);
  await page.close();
});
