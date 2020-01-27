import { Selector } from 'testcafe';

fixture('Autosteps').page(`${process.env.MP_URL}/get-started/setting-up-site`);

test('Are generated and linked', async t => {
  const container = await Selector('[data-autosteps]');
  const firstStep = await Selector('h3[id]').nth(0);
  const firstStepId = await firstStep.getAttribute('id');
  const firstStepText = await Selector('h3[id]').nth(0).find('span');

  const firstLink = await container.find('a').nth(0);
  const firstLinkHref = await firstLink.getAttribute('href');
  const firstLinkId = firstLinkHref.split('#').pop();

  await t.expect(container.exists).ok();
  await t.expect(firstLink.textContent).eql(await firstStepText.textContent);
  await t.expect(firstLinkId).eql(firstStepId);
});

test('Generate as many links as there are headings with steps', async t => {
  const container = await Selector('[data-autosteps]');
  const stepHeadings = await Selector('h3').filter(h => /^Step \d+:/.test(h.textContent));
  const generatedLinks = await container.find('a');

  await t.expect(await stepHeadings.count).eql(await generatedLinks.count);
  await t.expect(await stepHeadings.count).eql(2);
});


test('Generated steps have correct text', async t => {
  const container = await Selector('[data-autosteps]');

  const firstEl = await container.find('a').nth(0);
  const secondEl = await container.find('a').nth(1);

  await t.expect(firstEl.textContent).eql('Step 1: Create a new Instance');
  await t.expect(secondEl.textContent).eql('Step 2: Get confirmation email');
});


fixture('Table of Contents').page(`${process.env.MP_URL}/api-reference/liquid/types`);

test('Is generated', async t => {
  const container = await Selector('[data-autotoc]');
  const header = await container.find('h4');
  const firstEl = await container.find('ul li').nth(0).find('a');
  const secondEl = await container.find('ul li').nth(1).find('a');

  await t.expect(header.textContent).eql('On this page');
  await t.expect(firstEl.textContent).eql('String');
  await t.expect(secondEl.textContent).eql('Number');
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
    '/tutorials/models/building-contact-form-with-model#step-2-define-contact-form-–-form-object'
  );

  await t.expect(await heading.exists).ok();
  await t.expect(await heading.visible).ok();
});
