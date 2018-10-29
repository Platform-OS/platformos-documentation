import { Selector, ClientFunction } from "testcafe";

fixture(`Getting Started`)
  .page(`https://documentation.staging-oregon.near-me.com`)
  .beforeEach(async t => {
    await t.expect(await Selector("body").withText("Liquid Error").count).eql(0, "There are liquid errors on the page");
  });

test("Homepage boxes exist", async t => {
  const h4 = Selector("h4");

  await t
    .expect(Selector(".content__box").count)
    .eql(7)
    .click(h4.withText("How PlatformOS Works"))
    .expect(Selector(".content__box").count)
    .eql(5)
    .click(h4.withText("About PlatformOS"))
    .expect(Selector("h1").textContent)
    .eql("About PlatformOS");

  const goBack = ClientFunction(() => window.history.back());
  await goBack();

  await t.expect(Selector(".content__box").count).eql(5);
});
