import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').fill('noootReal');
  await page.getByLabel('Password').fill('ffffffffffffffff');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByText('Incorrect username or')).toBeVisible();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await page.close()
});