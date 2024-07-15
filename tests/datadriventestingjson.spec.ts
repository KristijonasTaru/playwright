import { test } from "@playwright/test";
import { Module1TestData } from "../test-data/qa/google.json";


for (const [key, value] of Object.entries(Module1TestData)) {
    test(`Data Driven testing using JSON files ${key} of ${value}`, async ({ page }) => {
        await page.goto(process.env.URL!);
        await page.getByRole("button", { name: "Reject all" }).click();
        await page.getByLabel("Search", { exact: true }).click();
        await page.getByLabel("Search", { exact: true }).fill(value);
        await page.getByLabel("Search", { exact: true }).press("Enter");
        await page.getByRole("link", { name: "Images" }).click();
      
        await page.waitForTimeout(3000);
        await page.close();
      });    
    
}

