const assert = require('assert');

Feature('Homepage');

Scenario('There are no liquid errors', ({ I, checkLiquidErrors }) => {
  I.amOnPage('/');
  I.checkLiquidErrors();
});

Scenario('Page is fast', async ({ I }) => {
  I.amOnPage('/');

  let data = await I.grabDataFromPerformanceTiming();

  const MAX_LOADEVENTEND = 1000;
  const actualLoadEventEnd = data.loadEventEnd;

  await tryTo(() => {
    assert.ok(actualLoadEventEnd < MAX_LOADEVENTEND, `loadEventEnd is ${actualLoadEventEnd}. Limit: ${MAX_LOADEVENTEND}`);
  });
});
