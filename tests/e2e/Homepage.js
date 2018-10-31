import { Selector, ClientFunction } from "testcafe";

import LayoutPO from "./page-objects/Layout";
import HomepagePO from "./page-objects/Homepage";

const Home = new HomepagePO();
const Layout = new LayoutPO();

fixture("Homepage").page(Layout.URL.staging);

test("There are no liquid errors on the page", async t => {
  await t.expect(Layout.Body.withText("Liquid Error").count).eql(0);
});

test("Github contributors are not shown", async t => {
  await t.expect(Layout.Contributors.count).eql(1);
  await t.expect(Layout.Contributors.find("div").count).eql(0);
});

test("All boxes exist", async t => {
  await t.expect(Home.Boxes.count).eql(7);
});

test("Boxes have proper headers", async t => {
  Home.BoxesHeaders.forEach(async header => {
    await t.expect(Home.Boxes.withText(header).count).eql(1);
  });
});

test("No sidebar submenu is expanded", async t => {
  await t.expect(Layout.SidebarItemExpanded.count).eql(0);
});

test("No sidebar nav item is active", async t => {
  await t.expect(Layout.SidebarItemActive.count).eql(0);
});

test("Menu is expanding on click", async t => {
  await t.click(Layout.SidebarItem.find("a").withText("How PlatformOS Works"));
  await t.expect(Layout.SidebarItemExpanded.count).eql(1);
});
