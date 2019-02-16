import { Selector } from 'testcafe';

import LayoutPO from './page-objects/Layout';

const Layout = new LayoutPO();

fixture('Modules').page(`${Layout.URL.staging}`);

test('Autosteps are generated and have link', async t => {
  await t.navigateTo('/get-started/setting-up-site');

  const container = await Selector('[data-autosteps]');
  const firstStep = await Selector('h3[id]').nth(0);
  const firstStepId = await firstStep.getAttribute('id');
  const firstLink = await container.find('a').nth(0);
  const firstLinkHref = await firstLink.getAttribute('href');
  const firstLinkId = firstLinkHref.split('#').pop();

  await t.expect(container.exists).ok();
  await t.expect(await firstLink.textContent).eql(await firstStep.textContent);
  await t.expect(firstLinkId).eql(firstStepId);
});

test('Autosteps generate as many links as there are headings with steps', async t => {
  await t.navigateTo('/get-started/setting-up-site');

  const container = await Selector('[data-autosteps]');
  const stepHeadings = await Selector('h3').filter(h => /^Step \d+:/.test(h.textContent));
  const generatedLinks = await container.find('a');

  await t.expect(await stepHeadings.count).eql(await generatedLinks.count);
  await t.expect(await stepHeadings.count).eql(2);
});
