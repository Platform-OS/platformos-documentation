Feature('Breadcrumbs');

Scenario('Are showing up', ({ I }) => {
  I.amOnPage('/api-reference/liquid/introduction');

  I.see('Documentation', '.breadcrumbs');
  I.see('API Reference', '.breadcrumbs');
  I.see('Introduction', '.breadcrumbs');
});
