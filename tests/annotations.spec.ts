import { test, expect } from "@playwright/test";

test.only("Annotation 1", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.close();
});

test.skip("Annotation 2", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await page.close();
  });

  test("Annotation 3", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await page.close();
  });

  test("Annotation 4", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await page.close();
  });

  test("Annotation 5", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole("button", { name: "Reject all" }).click();
    await page.close();
  });