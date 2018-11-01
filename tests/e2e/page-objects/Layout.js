import { Selector, t } from "testcafe";

export default class LayoutPO {
  constructor() {
    this.AboutPOSPhrase = "About PlatformOS";
    this.HowPOSWorksPhrase = "How PlatformOS Works";

    // env var doesnt work yet, but when we pass it to docker, it will be ready to rock
    this.URL = {
      staging: process.env.MP_URL || "https://documentation.staging-oregon.near-me.com"
    };
    this.Body = Selector("body");
    this.Contributors = Selector(".contributors");
    this.Sidebar = Selector(".sidebar-menu", { visibilityCheck: true });
    this.SidebarItem = this.Sidebar.find(".has-submenu");
    this.SidebarItemExpanded = this.SidebarItem.filter(".active");
    this.SidebarItemActive = this.Sidebar.find("li.active");

    this.TOSLink = Selector("a").withText("Terms & Conditions");
  }

  async checkLiquidErrors() {
    return t.expect(await this.Body.textContent).notContains("Liquid Error");
  }
}
