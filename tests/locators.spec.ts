import { test, expect } from "@playwright/test";

test("Locators Test", async ({ page }) => {
  //role
  await page.goto("https://www.google.com/search?q=cypress+by+testers+talk");
  await page.getByRole("button", { name: "Atmesti viską" }).click();
  await page.getByRole("link", { name: "Vaizdo įrašai" }).click();
  //label
  await page.goto("https://www.google.com/");
  await page.getByLabel("Ieškoti", { exact: true }).fill("Atmesti viską");
  await page.getByLabel("Ieškoti", { exact: true }).press("Enter");

  //alt value
  await page.goto("https://github.com/BakkappaN");
  await page.getByAltText("View BakkappaN's full-sized avatar").click();

  //test id
  await page.goto("https://github.com/login/");
  await page.getByTestId("username").fill("Doggo of dogs");

  //get by text
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.getByText("Cypress by").click();

  // title
  await page.goto("https://www.youtube.com/@testerstalk");
  await page.getByTitle("JavaScript by Testers Talk").click();

  //xpath
  await page.goto("https://www.youtube.com/");
  //   await page.getByLabel('Reject the use of cookies and').click();
  await page.locator("//*[@name='search_query']").click();
  await page.locator("//*[@name='search_query']").fill("Go Johnny go go");
  await page.locator("//*[@name='search_query']").fill("Jimmy Hendrix");
  await page.locator("//*[@name='search_query']").press("Enter");

  //css
  await page.goto("https://www.youtube.com/");
  //   await page.getByLabel('Reject the use of cookies and').click();
  await page.locator("[name='search_query']").click();
  await page.locator("[name='search_query']").fill("Go Johnny go go");
  await page.locator("[name='search_query']").fill("The Kinks");
  await page.locator("[name='search_query']").press("Enter");

  await page.close();
});
