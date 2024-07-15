// include playwright module
import { Page, expect } from "@playwright/test";

//create class
// TS code

export class ResultPage {
  private page: Page;
  private playlistLink;

  /**
   * @param {Page} page 
   */

  constructor(page: Page) {
    this.page = page;
    this.playlistLink = page.locator(
      "//h3[normalize-space()='Playwright by Testers Talk']"
    );
  }


  async clickOnPlaylist(): Promise<void> {
    await expect(this.playlistLink).toBeEnabled();
    await this.playlistLink.click();
  }

}

// const { expect } = require("@playwright/test");

// //create class
// exports.ResultPage = class ResultPage {
//   /**
//    *
//    * @param {import ('@playwright/test').Page} page
//    */
//   constructor(page) {
//     //inti page object
//     this.page = page;

//     //elements
//     this.playlistLink = page.locator(
//       "//h3[normalize-space()='Playwright by Testers Talk']"
//     );
//   }

//   async clickOnPlaylist() {
//     await expect(this.playlistLink).toBeEnabled();
//     await this.playlistLink.click();
//   }

