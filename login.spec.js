import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('amulya j m');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('amulyajm12@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('pavagada');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('pavagada');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:amulya j m')).toBeVisible();
  await expect(page.getByText('Email:amulyajm12@gmail')).toBeVisible();
  await expect(page.getByText('Current Address :pavagada')).toBeVisible();
  await expect(page.getByText('Permananet Address :pavagada')).toBeVisible();
});