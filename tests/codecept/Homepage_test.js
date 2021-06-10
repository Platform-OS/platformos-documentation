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

  const maxResponseEnd = 800;
  const maxRoadEventEnd = 1000;

  const actualResponseEnd = data.responseEnd;
  const actualRoadEventEnd = data.loadEventEnd;

  assert.ok(actualResponseEnd < maxResponseEnd, `responseEnd is ${actualResponseEnd}. Limit: ${maxResponseEnd}`);
  assert.ok(actualRoadEventEnd < maxRoadEventEnd, `loadEventEnd is ${actualRoadEventEnd}. Limit: ${maxRoadEventEnd}`);
});
