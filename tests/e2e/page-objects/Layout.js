import { Selector } from "testcafe";

export default class Layout {
  constructor() {
    this.Body = Selector("body");
    this.Contributors = Selector(".contributors");
    this.Sidebar = Selector(".sidebar-menu", { visibilityCheck: true });
    this.SidebarItem = this.Sidebar.find(".has-submenu");
    this.SidebarItemExpanded = this.Sidebar.find(".has-submenu.active");
    this.SidebarItemActive = this.Sidebar.find("li.active");
  }
}
