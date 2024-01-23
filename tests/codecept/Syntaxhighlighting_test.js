Feature('Syntax highlighting');

Scenario('CSS classes are added', async ({ I }) => {
  I.amOnPage('/use-cases/authenticating-user-with-jwt');

  I.seeElement('span.token');
  I.seeElement('span.operator');
});
