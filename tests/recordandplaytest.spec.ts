import { test, expect } from '@playwright/test';

test('Record and Play test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByLabel('Reject the use of cookies and').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('api testing by test');
  await page.getByPlaceholder('Search').press('ArrowDown');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByPlaceholder('Search').fill('api testing by test');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'API Testing Full Course SDET' }).click();
  await expect(page.locator('#above-the-fold')).toContainText('Session1: Introduction to API Testing');
  await expect(page.getByRole('link', { name: 'API Testing Full Course' })).toBeVisible();
  await page.waitForTimeout(3000)
  await expect(page.locator('#secondary-inner')).toContainText('API Testing Full Course');
  await page.close();
});