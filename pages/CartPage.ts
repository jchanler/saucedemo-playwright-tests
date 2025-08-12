import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async getCartItemNames(): Promise<string[]> {
    const items = await this.cartItems.locator('.inventory_item_name').allTextContents();
    return items;
  }

  async removeItem(productName: string) {
    const removeSelector = `[data-test="remove-${productName.toLowerCase().replace(/\s+/g, '-')}"]`;
    await this.page.locator(removeSelector).click();
  }
} 