import 'testcafe';

import LayoutPO from './page-objects/Layout';
import HomepagePO from './page-objects/Homepage';

const Home = new HomepagePO();
const Layout = new LayoutPO();

fixture('Homepage').page(process.env.MP_URL);

test('There are no liquid errors on the page', async () => {
  await Layout.checkLiquidErrors();
});

test('Github contributors are not shown', async t => {
  await t.expect(Layout.Contributors.count).eql(0);
});

test('All 7 boxes are present', async t => {
  await t.expect(Home.Boxes.count).eql(7);
});

test('Boxes have proper headers', async t => {
  Home.BoxesHeaders.forEach(async header => {
    await t.expect(Home.Boxes.withText(header).count).eql(1);
  });
});
