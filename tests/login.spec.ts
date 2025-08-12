import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { TestUsers } from './data/testData';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);
    
    await expect(productsPage.pageTitle).toHaveText('Products');
    await expect(productsPage.cartIcon).toBeVisible();
  });

  test('should show error message for locked out user', async () => {
    await loginPage.login(TestUsers.LOCKED_OUT_USER.username, TestUsers.LOCKED_OUT_USER.password);
    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

  test('should show error message for invalid credentials', async () => {
    await loginPage.login('invalid_user', 'invalid_password');
    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match');
  });
}); 