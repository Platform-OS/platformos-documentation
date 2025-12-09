Feature('Homepage');

Scenario('There are no liquid errors', ({ I }) => {
  I.amOnPage('/');
  I.checkLiquidErrors();
});

Scenario('Page is fast', async ({ I }) => {
  I.amOnPage('/');

  let data = await I.grabDataFromPerformanceTiming();

  const actualLoadEventEnd = data.loadEventEnd;

  console.log(`loadEventEnd is ${actualLoadEventEnd / 1000}s`);
});
