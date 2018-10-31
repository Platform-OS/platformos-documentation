import { Selector, ClientFunction } from "testcafe";

import LayoutPO from "./page-objects/Layout";
import SearchPO from "./page-objects/Search";

const Layout = new LayoutPO();
const Search = new SearchPO();

fixture("Search").page(Layout.URL.staging);

test("Results contain phrase when exists", async t => {
  await Search.go(Search.existingPhrase);
  await t.expect(Selector("h2").withText(Search.existingPhrase).count).eql(1);
});

test("There are no liquid errors on the page", async t => {
  await Search.go(Search.existingPhrase);
  await t.expect(Layout.Body.withText("Liquid Error").count).eql(0);
  await Search.go(Search.nonExistingPhrase);
  await t.expect(Layout.Body.withText("Liquid Error").count).eql(0);
});

test("Pagination is working", async t => {
  await Search.go(Search.existingPhrase);

  await t.expect(Search.PaginationItems.nth(0).hasClass("disabled")).ok();
  await t.click(Search.PaginationNext);
  await t.expect(Search.PaginationItems.nth(0).hasClass("disabled")).notOk();
  await t.expect(Search.Pagination.find(".active").find("span").textContent).contains("2");
});

test("There is no pagination if there is no results", async t => {
  await Search.go(Search.nonExistingPhrase);
  await t.expect(Search.Pagination.count).eql(0);
});

test("Search icon is submitting the form", async t => {
  await t.click(Search.SubmitButton);
  const pathname = await t.eval(() => window.location.pathname);
  await t.expect(pathname === "/search").ok();
});

test("Results are empty for random string", async t => {
  await Search.go(Search.nonExistingPhrase);
  await t.expect(Search.ResultsItems.count).eql(0);
});

test("Results does contain pages that have searchable: false", async t => {
  await Search.go(Search.nonSearchablePhrase);
  await t.expect(Search.ResultsItems.count).eql(0);
});
