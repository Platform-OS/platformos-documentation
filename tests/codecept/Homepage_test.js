const assert = require('assert');

Feature('Homepage');

const { I, liquidErrors } = inject();

Scenario('There are no liquid errors', ({ I }) => {
  I.amOnPage('/');
  I.checkLiquidErrors();
});

Scenario('Page is fast', async ({ I }) => {
  I.amOnPage('/');

  let data = await I.grabDataFromPerformanceTiming();

  const MAX_LOADEVENTEND = 1000;
  const actualLoadEventEnd = data.loadEventEnd;
  assert.ok(actualLoadEventEnd < MAX_LOADEVENTEND, `loadEventEnd is ${actualLoadEventEnd}. Limit: ${MAX_LOADEVENTEND}`);
});
