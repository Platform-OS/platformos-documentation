import { Selector } from "testcafe";

export default class HomepagePO {
  constructor() {
    this.Boxes = Selector(".content__box", { visibilityCheck: true });
    this.BoxesHeaders = [
      "How PlatformOS Works",
      "Get Started",
      "How-To Guides",
      "APIs & Form Configurations",
      "Reference",
      "Use Cases",
      "Need Help?"
    ];
  }
}
