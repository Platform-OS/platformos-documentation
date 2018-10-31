import { Selector } from "testcafe";

export default class Homepage {
  constructor() {
    this.URL = {
      staging: "https://documentation.staging-oregon.near-me.com"
    };
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

    this.SearchInput = Selector(".search__field");
  }
}
