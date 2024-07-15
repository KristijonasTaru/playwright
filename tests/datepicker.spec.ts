import { test, expect } from "@playwright/test";

test("Date picker", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");
  const frame = page.frameLocator(".demo-frame");
  //   frame.locator(".hasDatepicker").fill("12/12/2012");

  // // todays date
  frame.locator(".hasDatepicker").click();
  // frame.locator(".ui-datepicker-today").click();

  // custom date value
  const defaultDate = frame.locator(".ui-datepicker-today > a");
  const currentDateValue = await defaultDate.getAttribute("data-date");
  let custom = currentDateValue ? +currentDateValue - 3 : 0;

  const element = "[data-date=" + "'" + custom.toString() + "']";
  await frame.locator(element).click();

  await page.waitForTimeout(2000);
  await page.close();
});
