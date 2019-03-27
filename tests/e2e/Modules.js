import { Selector } from 'testcafe';

fixture('Autosteps').page(process.env.MP_URL);

test('Are generated and linked', async t => {
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

test('Generate as many links as there are headings with steps', async t => {
  await t.navigateTo('/get-started/setting-up-site');

  const container = await Selector('[data-autosteps]');
  const stepHeadings = await Selector('h3').filter(h => /^Step \d+:/.test(h.textContent));
  const generatedLinks = await container.find('a');

  await t.expect(await stepHeadings.count).eql(await generatedLinks.count);
  await t.expect(await stepHeadings.count).eql(2);
});

fixture('Table of Contents').page(process.env.MP_URL);

test('Is generated', async t => {
  await t.navigateTo('/api-reference/liquid/objects');

  const container = await Selector('[data-autotoc]');

  await t
    .expect(await container.textContent)
    .contains('On this page')
    .expect(await container.textContent)
    .contains('forloop')
    .expect(await container.textContent)
    .contains('tablerowloop');
});

fixture('Remote docs').page(process.env.MP_URL);

test('platformOS Liquid Filters', async t => {
  await t.navigateTo('/api-reference/liquid/platformos-filters');

  await t.expect(Selector('h2').withText('uuid').exists).ok();
});

test('platformOS Liquid Tags', async t => {
  await t.navigateTo('/api-reference/liquid/platformos-tags');

  await t.expect(Selector('h2').withText('yield').exists).ok();
});

test('Partner Portal', async t => {
  await t.navigateTo('/api-reference/partner-portal/api');

  await t.expect(Selector('h2').withText('GET /api/partners/[[ID]]').exists).ok();
});

test('GraphQL', async t => {
  await t.navigateTo('/api-reference/graphql/queries');
  await t.expect(Selector('h2').withText('users').exists).ok();

  await t.navigateTo('/api-reference/graphql/mutations');
  await t.expect(Selector('h2').withText('user_update').exists).ok();

  await t.navigateTo('/api-reference/graphql/objects');
  await t.expect(Selector('h2').withText('UserProfileSchema').exists).ok();

  await t.navigateTo('/api-reference/graphql/scalars');
  await t.expect(Selector('h2').withText('String').exists).ok();

  await t.navigateTo('/api-reference/graphql/interfaces');
  await t.expect(Selector('h2').withText('RemoteModelInterface').exists).ok();

  await t.navigateTo('/api-reference/graphql/enums');
  await t.expect(Selector('h2').withText('SpamProtection').exists).ok();

  await t.navigateTo('/api-reference/graphql/inputs');
  await t.expect(Selector('h2').withText('UsersSortInput').exists).ok();
});
