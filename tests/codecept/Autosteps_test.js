const assert = require('assert');

Feature('Autosteps');

const stepsContainer = '[data-autosteps]';
const stepsLinks = 'ul.content__autosteps a';

Scenario('Are generated and linked', async ({ I }) => {
  I.amOnPage('/developer-guide/users/authenticating-user-with-jwt-token');

  let header = locate('a').inside(stepsContainer).first();

  I.seeElement('h2#steps');

  let firstStepText = await I.grabTextFrom('h3[id] span');
  let firstStepId = await I.grabAttributeFrom('h3[id]', 'id');

  let firstHeaderHref = await I.grabAttributeFrom(header, 'href');
  let firstHeaderText = await I.grabTextFrom(header);
  let firstHeaderId = firstHeaderHref.split('#').pop();

  assert.ok(firstHeaderText === firstStepText);
  assert.ok(firstHeaderId === firstStepId);
})

Scenario('Steps have correct texts', async ({ I }) => {
  I.see('Step 1: Fetch JWT token for a user', stepsLinks);
  I.see('Step 2: Create a page with a policy that checks the JWT token', stepsLinks);
  I.see('Step 3: Send signed request', stepsLinks);
});


Scenario('Generate same number of links as there are steps', async ({ I }) => {
  let stepsNumber = await I.grabNumberOfVisibleElements(stepsLinks);
  let headersNumber = await I.grabNumberOfVisibleElements('h3[id]');

  assert.ok(stepsNumber === headersNumber);
});

