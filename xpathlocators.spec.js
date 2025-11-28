import { test, expect } from '@playwright/test';

test('test home button ', async ({ page }) => {

  await page.goto("https://sauce-demo.myshopify.com/");
  //absolute xpath
  await page.locator("//html/body/div[3]/div[1]/nav/ul/li[1]/a").click();
  //using relative xpath 
  await page.locator('//a[@href="/collections/all"]').click();
  //using text xpath
  await expect(page.locator("//h1[text()='Products']")).toBeVisible();
  //using  partial text
  await page.locator("//h3[contains( . ,  'Grey')]").click();
  // using AND xpath
  await page.locator('//input[@type="submit"] [@value="Add to Cart"]').click();
  // or xpath
  await page.locator('//a[@href="#" or class="toggle-drawer cart deskto"]').click();


});