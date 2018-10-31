import { Selector, ClientFunction } from "testcafe";

import Layout from "./page-objects/Layout";
import Homepage from "./page-objects/Homepage";

const Home = new Homepage();
const Lay = new Layout();

fixture("Homepage").page(Home.URL.staging);

test("There are no liquid errors on the page", async t => {
  await t.expect(Lay.Body.withText("Liquid Error").count).eql(0);
});

test("Github contributors are not shown", async t => {
  await t.expect(Lay.Contributors.count).eql(1);
  await t.expect(Lay.Contributors.find("div").count).eql(0);
});

test.only("All boxes exist", async t => {
  await t.expect(Home.Boxes.count).eql(7);
});

test("Search Input is visible", async t => {
  await t.expect(Home.SearchInput.visible).ok();
});

test("Boxes have proper headers", async t => {
  Home.BoxesHeaders.forEach(async header => {
    await t.expect(Home.Boxes.withText(header).count).eql(1);
  });
});

test("No sidebar submenu is expanded", async t => {
  await t.expect(Lay.SidebarItemExpanded.count).eql(0);
});

test("No sidebar nav item is active", async t => {
  await t.expect(Lay.SidebarItemActive.count).eql(0);
});

test("Menu is expanding on click", async t => {
  await t.click(Lay.SidebarItem.find("a").withText("How PlatformOS Works"));
  await t.expect(Lay.SidebarItemExpanded.count).eql(1);
});
