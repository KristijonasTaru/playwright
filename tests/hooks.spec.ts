import { test, expect } from "@playwright/test";

test.beforeEach("Run before each test ", async ({ page }) => {
  console.log("Running before each");
  await page.goto("https://www.youtube.com/");
});

test.beforeAll("Run before all test ", async ({ page }) => {
  console.log("Running before all");
  await page.goto("https://www.youtube.com/");
});

test.afterEach("Run after each test ", async ({ page }) => {
  console.log("Running after each");
  await page.close();
});

test.afterAll("Run after all test ", async () => {
  console.log("Running after all");
});

test("Hooks", async ({ page }) => {
  await page.getByLabel("Reject the use of cookies and").click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("cypress by testers talk");
  await expect(page.getByRole("button", { name: "Search" })).toBeEnabled();
  await page.getByRole("button", { name: "Search" }).click();
  await page
    .getByRole("link", {
      name: "Cypress by Testers Talk Testers",
    })
    .click();
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
});

test("Hook 2", async ({ page }) => {
  await page.getByLabel("Reject the use of cookies and").click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("cypress by testers talk");
  await expect(page.getByRole("button", { name: "Search" })).toBeEnabled();
  await page.getByRole("button", { name: "Search" }).click();
  await page
    .getByRole("link", {
      name: "Cypress by Testers Talk Testers",
    })
    .click();
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
});

test("Hook 3", async ({ page }) => {
  await page.getByLabel("Reject the use of cookies and").click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("cypress by testers talk");
  await expect(page.getByRole("button", { name: "Search" })).toBeEnabled();
  await page.getByRole("button", { name: "Search" }).click();
  await page
    .getByRole("link", {
      name: "Cypress by Testers Talk Testers",
    })
    .click();
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
});
