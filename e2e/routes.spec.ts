import { test, expect } from '@playwright/test';

// Use domcontentloaded to avoid waiting for external CDN resources (jQuery, Bootstrap)
const gotoOptions = { waitUntil: 'domcontentloaded' as const };

test.describe('Register page', () => {
  test('loads and shows registration form', async ({ page }) => {
    await page.goto('/register', gotoOptions);
    await expect(page.locator('form')).toBeVisible({ timeout: 10000 });
  });

  test('shows role selector with student/educator/admin options', async ({ page }) => {
    await page.goto('/register', gotoOptions);
    const roleSelect = page.locator('select[name="role"]');
    await expect(roleSelect).toBeVisible({ timeout: 10000 });
    await expect(roleSelect.locator('option[value="student"]')).toHaveCount(1);
    await expect(roleSelect.locator('option[value="educator"]')).toHaveCount(1);
    await expect(roleSelect.locator('option[value="admin"]')).toHaveCount(1);
  });

  test('shows email, username and password inputs', async ({ page }) => {
    await page.goto('/register', gotoOptions);
    await expect(page.locator('input[name="email"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('input[name="password"]')).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Login page', () => {
  test('loads and shows login form', async ({ page }) => {
    await page.goto('/login', gotoOptions);
    await expect(page.locator('form')).toBeVisible({ timeout: 10000 });
  });

  test('shows username and password inputs', async ({ page }) => {
    await page.goto('/login', gotoOptions);
    await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('input[name="password"]')).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Literature page', () => {
  test('loads and shows the literature section', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    await expect(page.locator('#lit')).toBeVisible({ timeout: 10000 });
  });

  test('shows all three filter buttons', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    const filterGroup = page.locator('#lit .btn-group');
    await expect(filterGroup).toBeVisible({ timeout: 10000 });
    const buttons = filterGroup.locator('button');
    await expect(buttons).toHaveCount(3);
  });

  test('filter button "all" is active by default', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    const filterGroup = page.locator('#lit .btn-group');
    await expect(filterGroup).toBeVisible({ timeout: 10000 });
    const allBtn = filterGroup.locator('button').first();
    await expect(allBtn).toHaveClass(/btn-primary/);
  });

  test('clicking research filter makes it active', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    const filterGroup = page.locator('#lit .btn-group');
    await expect(filterGroup).toBeVisible({ timeout: 10000 });
    const researchBtn = filterGroup.locator('button').nth(1);
    await researchBtn.click();
    await expect(researchBtn).toHaveClass(/btn-primary/);
  });

  test('clicking educational filter makes it active', async ({ page }) => {
    await page.goto('/literature', gotoOptions);
    const filterGroup = page.locator('#lit .btn-group');
    await expect(filterGroup).toBeVisible({ timeout: 10000 });
    const educationalBtn = filterGroup.locator('button').nth(2);
    await educationalBtn.click();
    await expect(educationalBtn).toHaveClass(/btn-primary/);
  });
});

test.describe('Join page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/join', gotoOptions);
    await expect(page).toHaveURL(/\/join/);
  });

  test('shows page content', async ({ page }) => {
    await page.goto('/join', gotoOptions);
    await expect(page.locator('body')).toBeVisible();
  });
});

test.describe('Protected routes - dashboard', () => {
  test('redirects to login when not authenticated', async ({ page }) => {
    // Navigate first so we can access localStorage, then clear it
    await page.goto('/', gotoOptions);
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());

    await page.goto('/dashboard', gotoOptions);
    await expect(page).toHaveURL(/\/login/, { timeout: 10000 });
  });
});

test.describe('Protected routes - groups', () => {
  test('redirects to login when not authenticated', async ({ page }) => {
    // Navigate first so we can access localStorage, then clear it
    await page.goto('/', gotoOptions);
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());

    await page.goto('/groups', gotoOptions);
    await expect(page).toHaveURL(/\/login/, { timeout: 10000 });
  });
});

test.describe('Cloud links page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/cloudlinks', gotoOptions);
    await expect(page).toHaveURL(/\/cloudlinks/);
  });

  test('shows cloud links section', async ({ page }) => {
    await page.goto('/cloudlinks', gotoOptions);
    await expect(page.locator('#tbls')).toBeVisible({ timeout: 10000 });
  });
});
