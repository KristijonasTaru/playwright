// include playwright module
import { Page, expect } from "@playwright/test";

//create class
// TS code

export class HomePage {
  private page: Page;
  private searchTextBox;
  private rejectGoogle;

  /**
   * @param {Page} page 
   */

  constructor(page: Page) {
    this.page = page;
    this.searchTextBox = page.locator("#APjFqb");
    this.rejectGoogle = page.getByRole("button", { name: "Reject all" });
  }

  async goto(): Promise<void> {
    await this.page.setViewportSize({width: 1366, height: 728})
    await this.page.goto("https://www.google.com/")
  }

  async rejectGoogleCookies(): Promise<void> {
    await expect(this.rejectGoogle).toBeEnabled();
    await this.rejectGoogle.click();
  }

  async searchKeywords(text: string): Promise<void> {
    await expect(this.searchTextBox).toBeEnabled();
    await this.searchTextBox.click()
    await this.searchTextBox.fill(text)
    await this.searchTextBox.press('Enter')
  }

}

// Js code
// exports.HomePage = class HomePage {
//   /**
//    *
//    * @param {import ('@playwright/test').Page} page
//    */
//   constructor(page) {
//     //inti page object
//     this.page = page;

//     //elements
//     this.searchTextBox = page.locator("#APjFqb");
//     this.reject = page.getByRole("button", { name: "Reject all" });
//   }

//   async goto() {
//     await this.page.goto("https://www.google.com/");
//   }

//   async rejectCookies() {
//     await this.reject.click();
//   }

//   async searchKeywords(text) {
//     await expect(this.searchTextBox).toBeEnabled();
//     await this.searchTextBox.click();
//     await this.searchTextBox.fill(text);
//     await this.searchTextBox.press("Enter");
//   }

