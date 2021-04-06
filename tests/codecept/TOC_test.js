Feature('Table of Content');

Scenario('Is generated', async ({ I }) => {
  I.amOnPage('/api-reference/liquid/types');

  const containerSelector = '[data-autotoc]';

  I.see("String", containerSelector);
  I.see("Number", containerSelector);
  I.see("Boolean", containerSelector);
  I.see('On this page', `${containerSelector} h4`);
});
