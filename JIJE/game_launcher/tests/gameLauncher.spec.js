const { test, request, expect } = require("@playwright/test");
import games from "./launchTheGame";

const operatorUrl = "https://betflare01.com/";
let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto(operatorUrl + "en", { waitUntil: "commit" });
  await page
    .locator("header .login-button:visible")
    .locator('text="Log In"')
    .click();
  await expect(page.locator("form.form-login")).toBeVisible({ timeout: 20000 });
  await page
    .locator('form.form-login input[data-vv-as="Username"]')
    .fill("betflaretest1");
  await page
    .locator('form.form-login input[data-vv-as="Password"]')
    .fill("1234");
  await page.locator("form.form-login .btn-login").click();
  await expect(page.locator("header .notification:visible")).toBeVisible({
    timeout: 10000,
  });
});
test.describe("Launch Games", () => {
  test("launchPragmatic", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: "#pplogo",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/5-lions-gold-pptc0008-by-pragmaticplay",
    });
  });
  test("launchEvo", async () => {
    //access iframes
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    const framePage2 = framePage.frameLocator("iframe:visible");
    const framePage3 = framePage2.frameLocator("iframe:visible");
    const framePage4 = framePage3.frameLocator("iframe:visible");
    const framePage5 = framePage4.frameLocator("iframe:visible");
    await games.launchGame({
      page: page,

      canvasFrame: framePage5,
      loadingElement: ".star2--7a218",
      laodingFrame: framePage3,
      baseUrl: operatorUrl + "gamestage/dj-psycho-nlct0073-by-no-limit-city",
    });
  });
  test("launchSSWS", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: ".game.loading",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/big-bounty-bill-kala0010-by-kalamba",
    });
  });
  test("launchSpade", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: ".intro",
      laodingFrame: framePage,
      baseUrl:
        operatorUrl + "gamestage/adventure-iceland-spdgadil-by-spadegaming",
    });
  });
  test("launchJili", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: "#LogoPage",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/dinosaur-tycoon-jili0116-by-jili",
    });
  });
  test("launchGalaxys", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: "canvas",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/cash-show-glxscash-by-galaxsys",
    });
  });
  test("launchFlowgaming", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: "canvas",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/golden-legend-pngoglol-by-play-n-go",
    });
  });
  test("launchWorldEntertainment-Live", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,

      canvasFrame: framePage,
      loadingElement: ".loading",
      laodingFrame: framePage,
      baseUrl:
        operatorUrl +
        "gamestage/classic-baccarat-6-went0206-by-world-entertainment",
    });
  });
  test("launchPragmaticPlay-Live", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,
      canvasFrame: framePage,
      loadingElement: "#pp_logo",
      laodingFrame: framePage,
      baseUrl:
        operatorUrl + "gamestage/auto-roulette-pptc0028-by-pragmaticplay",
    });
  });
  test("launchEvo-Live", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    const framePage2 = framePage.frameLocator("#iframe:visible");
    const framePage3 = framePage2.frameLocator("iframe:visible");
    await games.launchGame({
      page: page,

      canvasFrame: framePage3,
      loadingElement: "#loader-popup",
      laodingFrame: framePage3,
      baseUrl:
        operatorUrl + "gamestage/american-roulette-evlnamrl-by-evolution",
    });
  });
  test("launchBetGamesTV-Live", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    const framePage2 = framePage.frameLocator("#betgames_iframe");
    const framePage3 = framePage2.frameLocator(".casino-video-iframe");

    await games.launchGame({
      page: page,

      canvasFrame: framePage2,
      loadingElement: "#player",
      laodingFrame: framePage3,
      baseUrl: operatorUrl + "gamestage/6+-poker-bgtv6ppk-by-betgamestv",
    });
  });
  test("launchMicrogaming", async () => {
    //access iframes
    const framePage = page.frameLocator("#gameplay_frame");
    await games.launchGame({
      page: page,
      canvasFrame: framePage,
      loadingElement: "canvas",
      laodingFrame: framePage,
      baseUrl: operatorUrl + "gamestage/sonic-links-micr0133-by-microgaming",
    });
  });
});
