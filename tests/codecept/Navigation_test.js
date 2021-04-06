Feature('Navigation');

Scenario('Navigation is expanding both serverside and clientside', ({ I }) => {
  I.amOnPage('/api-reference/liquid/types');

  I.see('Liquid Markup', 'aside .active a');
});
