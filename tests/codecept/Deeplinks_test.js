Feature('Deep links');

Scenario('Deep linking to headers is working', async ({ I }) => {
  I.amOnPage('/get-started');

  I.seeElement('.content__main .permalink');
});
