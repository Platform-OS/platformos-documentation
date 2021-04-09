const assert = require('assert');

Feature('Homepage');

const { I, liquidErrors } = inject();

Scenario('There are no liquid errors', ({ I }) => {
  I.amOnPage('/');
  I.checkLiquidErrors();
});

Scenario('Page is not slow', async ({ I }) => {
  I.amOnPage('/');

  let data = await I.grabDataFromPerformanceTiming();

  console.log('data.responseEnd:', data.responseEnd);
  console.log('data.loadEventEnd:', data.loadEventEnd);
  assert.ok(data.responseEnd < 600);
  assert.ok(data.loadEventEnd < 800);
});
