import { test, expect } from "@playwright/test";

test("Dropdown list handler", async ({ page }) => {
  await page.goto("https://www.facebook.com");
  await page.getByRole('button', { name: 'Decline optional cookies' }).click()
  await page.getByText("Create new account").click();
  const monthDropdown = page.locator("#month");
  const dayDropdown = page.locator("#day");
  const yearDropdown = page.locator("#year");

  monthDropdown.selectOption("Aug");
  dayDropdown.selectOption("23");
  yearDropdown.selectOption("1988");

  await expect(monthDropdown).toHaveValue('8')  

  await page.waitForTimeout(2000);

  await page.close();
});
