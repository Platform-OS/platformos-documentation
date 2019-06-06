import { Selector } from 'testcafe';

import LayoutPO from './page-objects/Layout';

const Layout = new LayoutPO();

fixture('Layout').page(process.env.MP_URL);

test('Conditional layout parts are working: questions, feedback, contributors, one-column layout', async t => {
  await t.click(Selector('a').withText(Layout.txt.contact));

  await t.expect(Layout.Sidebar.count).eql(0);
  await t.expect(Layout.Contributors.count).eql(0);
  await t.expect(Layout.Feedback.count).eql(0);
  await t.expect(Layout.Questions.count).eql(0);
});

test('Navigation is expanding both serverside and clientside', async t => {
  await t.navigateTo('/api-reference/liquid/introduction');

  await t.expect(Selector('.nav-sidebar .active a').withText('Liquid').exists).ok();
  await t.expect(Selector('.nav-sidebar .submenu .active').withText('Introduction').exists).ok();
});

test('Breadcrumbs are showing up', async t => {
  await t.navigateTo('/api-reference/liquid/introduction');

  await t.expect(Selector('.breadcrumbs a').withText('Documentation').exists).ok();
  await t.expect(Selector('.breadcrumbs a').withText('API Reference').exists).ok();
  await t.expect(Selector('.breadcrumbs a').withText('Introduction').exists).ok();
});

test('Images are working fine', async t => {
  await t.navigateTo('/tutorials/qa/testing');
  const contentImages = Layout.Content.find('img[src*="assets/image"]');

  const loadedImages = await t.wait(300).eval(() => {
    const images = Array.prototype.slice.call(document.querySelectorAll('img[src*="assets/image"]'));
    return images.map(image => image.naturalHeight).filter(height => height > 10);
  });

  await t.expect(contentImages.count).gte(2);
  await t.expect(loadedImages.length).gte(2);
});

test('Contributors are showing up', async t => {
  await t.navigateTo('/how-platformos-works');

  await t.expect(Layout.Contributors.find('a').count).gt(0);
  await t.expect(Layout.Contributors.find('img').count).gt(0);
});
