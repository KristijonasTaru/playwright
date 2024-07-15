import { test } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { ResultPage } from "../pages/resultpage";
import { PlaylistPage } from "../pages/playlistpage";


test("Page Object Model in playwright", async ({ page }) => {
  // go to url
  const homePage = new HomePage(page);
  const resultPage = new ResultPage(page);
  const playlistsPage = new PlaylistPage(page);

  await homePage.goto();
  await homePage.rejectGoogleCookies();
  // search with keywords
  await homePage.searchKeywords("playwright by testers talk");

  // click on playlist
  await resultPage.clickOnPlaylist();

  // click on video
  await playlistsPage.rejectCookiesYoutube();
  await page.waitForTimeout(5000);

  await playlistsPage.clickOnPlaylist();
  await page.waitForTimeout(2000);
  await page.close();
});
