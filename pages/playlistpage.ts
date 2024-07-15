// include playwright module

// include playwright module
import { Page, expect } from "@playwright/test";

//create class
// TS code

export class PlaylistPage {
  private page: Page;
  private videoPlayList;
  private rejectYoutube;

  /**
   * @param {Page} page 
   */

  constructor(page: Page) {
    this.page = page;
    this.videoPlayList = page.locator(
      "#container> #thumbnail"
    );
    this.rejectYoutube = page.getByRole("button", { name: "Reject all" });
  }


  async rejectCookiesYoutube(): Promise<void> {
    await expect(this.rejectYoutube).toBeEnabled();
    await this.rejectYoutube.click();
  }

  async clickOnPlaylist(): Promise<void> {
    await expect(this.videoPlayList.first()).toBeEnabled();
    await this.videoPlayList.first().click();
  }

}



// // include playwright module
// const { expect } = require("@playwright/test");

// //create class
// exports.PlaylistPage = class PlaylistPage {
//   /**
//    *
//    * @param {import ('@playwright/test').Page} page
//    */
//   constructor(page) {
//     //inti page object
//     this.page = page;

//     //elements
//     this.videoPlayList = page.locator(
//       "#container> #thumbnail"
//     );
//     this.rejectYoutube = page.getByRole("button", { name: "Reject all" });
//   }

//   async rejectCookiesYoutube() {
//     await this.rejectYoutube.click();
//   }

//   async clickOnPlaylist() {
//     await expect(this.videoPlayList.first()).toBeEnabled();
//     await this.videoPlayList.first().click();
//   }
// };
