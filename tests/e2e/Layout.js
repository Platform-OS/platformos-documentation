import { Selector } from 'testcafe';

import LayoutPO from './page-objects/Layout';

const Layout = new LayoutPO();

fixture('Layout').page(`${Layout.URL.staging}`);

test('Sidebar menu is collapsed on page load', async t => {
  await t.expect(Layout.SidebarItemExpanded.count).eql(0);
});

test('No sidebar item is active on page load', async t => {
  await t.expect(Layout.SidebarItemActive.count).eql(0);
});

test('no_feedback and no_sidebar flags are working', async t => {
  await t.click(Selector('a').withText(Layout.txt.contributorGuide));

  await t.expect(Layout.Sidebar.count).eql(0);
  await t.expect(Layout.Feedback.count).eql(0);
});

test('Contributors list is working', async t => {
  await t.click(Selector('a').withText(Layout.txt.contributorGuide));

  await t.expect(Layout.Contributors.find('p').count).gt(1);
});

test('Expanding menu works', async t => {
  await t
    .click(Layout.SidebarItem.withText(Layout.txt.howItWorks))
    .click(Layout.SidebarItemExpanded.find('a').withText(Layout.txt.about));

  const headerText = await Selector('h1')().textContent;

  await t.expect(headerText).eql(Layout.txt.about);
});

test('External links have target and rel attributes', async t => {
  await t.click(Selector('h4').withText(Layout.txt.howItWorks));

  await t.expect(Layout.TOSLink.withAttribute('target', '_blank').exists).ok();
  await t.expect(Layout.TOSLink.withAttribute('rel', 'external noopener').exists).ok();
});

test.skip('Back button is working as expected with turbolinks', async t => {
  console.log('TODO: Implement');
});

/*
  TODO: Create page that will include all the usual stuff and test everything on one
        url instead of jumping around
*/

test('Syntax highlighting is working', async t => {
  await t.navigateTo('/get-started/quickstart-guide');

  await t.expect(Selector('span.token').exists).ok();
  await t.expect(Selector('span.operator').exists).ok();
});

test('Images are working fine', async t => {
  await t.navigateTo('/tutorials/qa/testing');
  const contentImages = Layout.Content.find('img');

  await t.expect(contentImages.count).gte(2);
});

/*
  TODO: Add clicking on a h2, going to the url, checking topOffset to see
        if the page has been scrolled (its done using js, not by native hash support)
  */
test('Deep linking to h2 headers is working', async t => {
  await t.navigateTo('/get-started/quickstart-guide');
  const deepLinks = Layout.Content.find('h2 a.anchorjs-link');

  await t.expect(deepLinks.count).eql(7);
});

// test.skip("Contributors are showing up", async t => {
  /*
    Because there is a limit on github api requests (pretty low, 100) and it runs on every page reload
   lets not test this, because it will cause tests to be flaky.

   TODO: Implement after our DB caching mechanism has been implemented.
  */
// });
