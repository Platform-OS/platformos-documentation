const assert = require('assert');

Feature('Autosteps');

Scenario('Are generated and linked', async ({ I }) => {
  I.amOnPage('/developer-guide/users/authenticating-user-with-jwt-token');

  let mainSelector = '[data-autosteps]';
  let header = locate('a').inside(mainSelector).first();

  I.seeElement(mainSelector);

  let firstStepText = await I.grabTextFrom('h3[id] span');
  let firstStepId = await I.grabAttributeFrom('h3[id]', 'id');

  let firstHeaderHref = await I.grabAttributeFrom(header, 'href');
  let firstHeaderText = await I.grabTextFrom(header);
  let firstHeaderId = firstHeaderHref.split('#').pop();

  assert.ok(firstHeaderText === firstStepText);
  assert.ok(firstHeaderId === firstStepId);
})

Scenario('Steps have correct texts', async ({ I }) => {
  let mainSelector = '[data-autosteps]';

  I.see('Step 1: Fetch JWT token for a user', mainSelector);
  I.see('Step 2: Create a page with a policy that checks the JWT token', mainSelector);
  I.see('Step 3: Send signed request', mainSelector);
});


Scenario('Generate same number of links as there are steps', async ({ I }) => {
  I.amOnPage('/developer-guide/users/authenticating-user-with-jwt-token');

  let stepsNumber = await I.grabNumberOfVisibleElements('[data-autosteps] a');
  let headersNumber = await I.grabNumberOfVisibleElements('h3[id]');

  assert.ok(stepsNumber === headersNumber);
});

