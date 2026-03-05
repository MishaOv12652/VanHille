import { test, expect } from '@playwright/test';

// Use domcontentloaded to avoid waiting for external CDN resources (jQuery, Bootstrap)
const gotoOptions = { waitUntil: 'domcontentloaded' as const };

test.describe('Home page', () => {
  test('loads and shows the welcome heading', async ({ page }) => {
    await page.goto('/', gotoOptions);
    await expect(page.locator('h1')).toContainText('מתמטיקה');
  });

  test('navbar is visible', async ({ page }) => {
    await page.goto('/', gotoOptions);
    await expect(page.locator('app-navbar')).toBeVisible();
  });
});

test.describe('Auth pages', () => {
  test('login page renders a form', async ({ page }) => {
    await page.goto('/login', gotoOptions);
    await expect(page.locator('form')).toBeVisible();
  });

  test('register page renders a form', async ({ page }) => {
    await page.goto('/register', gotoOptions);
    await expect(page.locator('form')).toBeVisible();
  });
});

test.describe('Static pages', () => {
  test('literature page renders', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    await expect(page.locator('#lit')).toBeVisible();
  });

  test('cloudlinks page renders', async ({ page }) => {
    await page.goto('/cloudlinks', gotoOptions);
    await expect(page.locator('#tbls')).toBeVisible();
  });
});
