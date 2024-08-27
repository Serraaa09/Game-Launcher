const { test, request, expect } = require("@playwright/test");

export default {
  launchGame: async ({
    page,
    baseUrl,
    loadingElement,
    canvasFrame,
    laodingFrame,
  }) => {
    //launch game
    await page.goto(baseUrl);
    const canvas = canvasFrame.locator("canvas:visible").first();

    try {
      await canvas.waitFor({ state: "visible", timeout: 30000 });
      //wait for loading elements

      let duration = 0;
      while (true) {
        if (duration == 5000) {
          break;
        }
        if (await laodingFrame.locator(loadingElement).isVisible()) {
          await laodingFrame
            .locator(loadingElement)
            .waitFor({ state: "hidden", timeout: 20000 });
          duration -= duration;
        } else {
          await page.waitForTimeout(500);
          duration += 500;
        }
      }
    } catch (error) {}
    //for betgames TV optional
    if(await canvasFrame.locator('.MediaControlsButton_button__ePnnA').isVisible()){
      await canvasFrame.locator('.MediaControlsButton_button__ePnnA').click()
    }
    //log Game state
    if (await canvas.isVisible()) {
      console.log("Game state: Playable");
    } else {
      console.log("Game state: Not Playable");
    }
    await expect(await canvas).toBeVisible({
      timeout: 5000,
    });
  },
};
