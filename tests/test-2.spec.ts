import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Atmesti viską' }).click();
  await page.getByLabel('Ieškoti', { exact: true }).click();
  await page.getByLabel('Ieškoti', { exact: true }).fill('Whats new');
  await page.getByText('what\'s new .net').click();
  await page.getByRole('link', { name: 'Vaizdai' }).click();
  await page.locator('div:nth-child(4) > .czzyk > .ob5Hkd > a > .F0uyec').click();
  await expect(page.getByRole('button', { name: 'Bendrinti' })).toBeVisible();
});