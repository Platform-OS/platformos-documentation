import { Selector } from 'testcafe';

import LayoutPO from './page-objects/Layout';
import SearchPO from './page-objects/Search';

const Layout = new LayoutPO();
const Search = new SearchPO();

fixture('Search').page(`${process.env.MP_URL}/search`);

test('There are no Liquid errors on the page', async () => {
  await Search.go(Search.existingPhrase);
  await Layout.checkLiquidErrors();
  await Search.go(Search.nonExistingPhrase);
  await Layout.checkLiquidErrors();
});

test('Proper results are returned', async t => {
  await Search.go(Search.existingPhrase);
  await t.expect(Selector('h2').withText(Search.existingPhrase).count).eql(1);
  await t.expect(Search.ResultsItems.count).eql(10);
});

test('Pagination is working', async t => {
  await t.expect(Search.PaginationItems.nth(0).hasClass('disabled')).ok();
  await t.click(Search.PaginationNext);
  await t.expect(Search.PaginationItems.nth(0).hasClass('disabled')).notOk();
  await t.expect(Search.PaginationItems.filter('.active').textContent).contains('2');
});

test('There is no pagination if there are no results', async t => {
  await Search.go(Search.nonExistingPhrase);
  await t.expect(Search.Pagination.count).eql(0);
});

test('There are no results for a random string', async t => {
  await Search.go(Search.nonExistingPhrase);
  await t.expect(Search.ResultsItems.count).eql(0);
});

test('Results page does not contain pages marked as not searchable', async t => {
  await Search.go(Search.nonSearchablePhrase);
  await t.expect(Search.ResultsItems.count).eql(0);
});
