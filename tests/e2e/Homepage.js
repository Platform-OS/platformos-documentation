import 'testcafe';

import { getPerformanceMetrics } from '@platform-os/testcafe-helpers';

import LayoutPO from './page-objects/Layout';

const Layout = new LayoutPO();

fixture('Homepage').page(process.env.MPKIT_URL);

test('There are no liquid errors on the page', async () => {
  await Layout.checkLiquidErrors();
});

test('Page is not too slow', async t => {
  const perf = await getPerformanceMetrics({ t });
  const computed = perf.computed;

  await t.expect(computed.ttfb).lt(1000);
  await t.expect(computed.domReady).lt(2000);
});
