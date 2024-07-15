import { test, expect } from "@playwright/test";

test.describe("Smoke testing", () => {
  test("Test1", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();

    await page.close();
  });

  test("Test2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();

    await page.close();
  });
});

test.describe("Sanity testing", () => {
  test("Test3", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();

    await page.close();
  });
  test("Test4", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();

    await page.close();
  });
  test("Test5", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();

    await page.close();
  });
});
