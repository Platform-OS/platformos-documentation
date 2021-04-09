Feature('Syntax highlighting');

Scenario('CSS classes are added', async ({ I }) => {
  I.amOnPage('/developer-guide/users/authenticating-user-with-jwt-token');

  I.seeElement('span.token');
  I.seeElement('span.operator');
});
