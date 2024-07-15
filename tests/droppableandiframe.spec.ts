import { test, expect, FrameLocator } from "@playwright/test";

test("Droppable and iframe", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  //iframe
  const frame = page.frameLocator(".demo-frame");

  //src and dest
  const elementDrag = frame.locator("[id='draggable']");
  const elementDrop = frame.locator("[id='droppable']");

  // drag and drop

  await elementDrag.dragTo(elementDrop);
  await expect(elementDrop).toHaveText("Dropped!");

  await page.waitForTimeout(2000);

  await page.close();
});
