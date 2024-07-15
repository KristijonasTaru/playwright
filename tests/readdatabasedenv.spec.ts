import { test } from "@playwright/test";
import { qaTestData } from "../test-data/stage/goodle.json";
import { devTestData } from "../test-data/stage/goodle.json";

type goodleData = {
    skill1: string;
    skill2: string;
    skill3: string;
}

test.describe('Module1 test', () => {
    let testData: null | goodleData = null;
    test.beforeAll('Running before tests', () => {
        if (process.env.ENV == 'qa') {
            testData = qaTestData;
        } else {
            testData = devTestData;
        }
    })
    test(`Read data from ENV file`, async ({ page }) => {
        if (!testData) {
            throw new Error('Test data is not set');
          }
        await page.goto(process.env.URL!);
        await page.getByRole("button", { name: "Reject all" }).click();
        await page.getByLabel("Search", { exact: true }).click();

        const searchQuery = `${testData.skill1}`;

        await page.getByLabel("Search", { exact: true }).fill(searchQuery);
        await page.getByLabel("Search", { exact: true }).press("Enter");
        await page.getByRole("link", { name: "Images" }).click();

        await page.waitForTimeout(3000);
        await page.close();
    });
})




