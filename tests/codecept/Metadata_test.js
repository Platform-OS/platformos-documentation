Feature('Metadata');

Scenario('feedback, last edit', ({ I }) => {
  I.amOnPage('/');

  I.click('Roadmap')

  I.seeElement('$lastEdit');
  I.seeElement('$feedback');

  I.click('Release Notes');

  I.dontSeeElement('$lastEdit');
  I.dontSeeElement('$feedback');
});
