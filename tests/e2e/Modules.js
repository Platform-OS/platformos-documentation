import { Selector } from 'testcafe';

fixture('Autosteps').page(`${process.env.MP_URL}/get-started/setting-up-site`);

test('Are generated and linked', async t => {
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
  const container = await Selector('[data-autosteps]');
  const stepHeadings = await Selector('h3').filter(h => /^Step \d+:/.test(h.textContent));
  const generatedLinks = await container.find('a');

  await t.expect(await stepHeadings.count).eql(await generatedLinks.count);
  await t.expect(await stepHeadings.count).eql(2);
});

fixture('Table of Contents').page(`${process.env.MP_URL}/api-reference/liquid/types`);

test('Is generated', async t => {
  const container = await Selector('[data-autotoc]');

  await t.expect(await container.textContent).contains('On this page');
  await t.expect(await container.textContent).contains('String');
  await t.expect(await container.textContent).contains('Array');
});

fixture('Syntax highlighting').page(`${process.env.MP_URL}/get-started/quickstart-guide`);

test('Is working', async t => {
  await t.expect(Selector('span.token').exists).ok();
  await t.expect(Selector('span.operator').exists).ok();
});

// I have no idea why it doesnt work. Doesnt detect target but does other atrs.
// fixture.skip('External links').page(process.env.MP_URL);

// test('Have target and rel attributes', async t => {
//   const blogLink = await Selector('a').withText('Blog');

//   console.log(await blogLink.getAttribute('href'));
//   console.log(await blogLink.getAttribute('target'));

//   await t.expect(await blogLink.withAttribute('target', '_blank').exists).ok();
//   await t.expect(await blogLink.withAttribute('rel', 'external').exists).ok();
//   await t.expect(await blogLink.withAttribute('rel', 'noopener').exists).ok();
// });

fixture('Deep links').page(`${process.env.MP_URL}/get-started/quickstart-guide`);

test('Deep linking to headers is working', async t => {
  await t.wait(100);// sometimes testcafe starts a test before js is initialized? investigate

  const deepLinks = Selector('.content__main').find('.anchorjs-element');

  await t.expect(deepLinks.exists).ok();
});

test('Deep linking is working with utf8 characters in the heading id/href', async t => {
  const heading = await Selector('#step-2-define-contact-form-–-form-object');

  await t.navigateTo(
    '/tutorials/customizations/building-contact-form-with-customization#step-2-define-contact-form-–-form-object'
  );

  await t.expect(await heading.exists).ok();
  await t.expect(await heading.visible).ok();
});
