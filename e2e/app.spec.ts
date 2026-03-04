import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and shows the welcome heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('מתמטיקה');
  });

  test('navbar is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('app-navbar')).toBeVisible();
  });
});

test.describe('Auth pages', () => {
  test('login page renders a form', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('form')).toBeVisible();
  });

  test('register page renders a form', async ({ page }) => {
    await page.goto('/register');
    await expect(page.locator('form')).toBeVisible();
  });
});

test.describe('Static pages', () => {
  test('edulit page renders', async ({ page }) => {
    await page.goto('/edulit');
    await expect(page.locator('.jumbotron')).toBeVisible();
  });

  test('reslit page renders', async ({ page }) => {
    await page.goto('/reslit');
    await expect(page.locator('.jumbotron')).toBeVisible();
  });
});
