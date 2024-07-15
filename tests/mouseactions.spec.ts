import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  // await page.goto("https://www.google.com/search?q=testers+talk");
  // await page.getByRole("button", { name: "Atmesti viską" }).click();
  //click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().click();

  //double click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().dblclick();

  //mouse right click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'right'})

  //mouse middle click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'middle'})

  //mouse left click
  //   await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'left'})

  //mouse hover
  await page.goto('https://practice.expandtesting.com/hovers');
  await page.locator("[alt='User Avatar']").last().hover();
  await expect(page.getByRole('heading', { name: 'name: user3' })).toBeVisible();

  await page.waitForTimeout(2000);

  await page.close();
});
