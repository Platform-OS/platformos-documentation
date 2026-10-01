Feature('Metadata');

Scenario('feedback, last edit', ({ I }) => {
  I.amOnPage('/');

  I.click('Roadmap');
  I.waitInUrl('/roadmap');

  I.seeElement('$lastEdit');
  I.seeElement('$feedback');

  I.click('Release Notes');
  I.waitInUrl('/release-notes');

  I.dontSeeElement('$lastEdit');
  I.dontSeeElement('$feedback');
});
