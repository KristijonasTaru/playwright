import { test } from "@playwright/test";

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const records = parse(
  fs.readFileSync(path.join(__dirname, "../test-data/qa/testdata.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  });


for (const record of records) {
  test(`Data Driven testing using CSV files ${record.TestCaseID}`, async ({
    page,
  }) => {
    await page.goto(process.env.URL!);
    await page.getByRole("button", { name: "Reject all" }).click();
    await page.getByLabel("Search", { exact: true }).click();
    await page.getByLabel("Search", { exact: true }).fill(record.Skill2);
    await page.getByLabel("Search", { exact: true }).press("Enter");
    await page.getByRole("link", { name: "Images" }).click();

    await page.waitForTimeout(3000);
    await page.close();
  });
}
