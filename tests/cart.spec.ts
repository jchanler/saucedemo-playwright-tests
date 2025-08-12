import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { TestUsers, Products } from './data/testData';

test.describe('Shopping Cart Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    
    await loginPage.goto();
    await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);
  });

  test('should add item to cart successfully', async () => {
    await productsPage.addToCart(Products.SAUCE_LABS_BACKPACK);
    
    const cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(1);
    
    await productsPage.goToCart();
    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toContain('Sauce Labs Backpack');
  });

  test('should add multiple items to cart', async () => {
    await productsPage.addToCart(Products.SAUCE_LABS_BACKPACK);
    await productsPage.addToCart(Products.SAUCE_LABS_BIKE_LIGHT);
    
    const cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(2);
    
    await productsPage.goToCart();
    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toHaveLength(2);
    expect(cartItems).toContain('Sauce Labs Backpack');
    expect(cartItems).toContain('Sauce Labs Bike Light');
  });

  test('should remove item from cart', async () => {
    await productsPage.addToCart(Products.SAUCE_LABS_BACKPACK);
    await productsPage.goToCart();
    
    let cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toHaveLength(1);
    
    await cartPage.removeItem(Products.SAUCE_LABS_BACKPACK);
    
    cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toHaveLength(0);
  });
}); 