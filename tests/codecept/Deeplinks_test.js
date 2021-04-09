Feature('Deep links');

Scenario('Deep linking to headers is working', async ({ I }) => {
  I.amOnPage('/get-started/quickstart-guide');

  I.seeElement('.content__main .anchorjs-element');
});

Scenario('Deep linking is working with utf8 characters in the heading id/href', async ({ I }) => {
  I.amOnPage(
    '/developer-guide/records/building-contact-form-with-records#step-2-define-contact-form-–-form-object'
  );

  I.seeElement('#step-2-define-contact-form-–-form-object');
});
