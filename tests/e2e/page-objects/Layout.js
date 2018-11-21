import { Selector, t } from 'testcafe';

export default class LayoutPO {
  constructor() {
    this.txt = {
      about: 'About PlatformOS',
      howItWorks: 'How PlatformOS Works',
      contributorGuide: 'Contributor Guide'
    };

    // env var doesnt work yet, but when we pass it to docker, it will be ready to rock
    this.URL = {
      staging: process.env.MP_URL || 'https://documentation-staging.staging.oregon.platform-os.com'
    };
    this.Body = Selector('body');
    this.Contributors = Selector('.contributors');
    this.Sidebar = Selector('.sidebar-menu', { visibilityCheck: true });
    this.Feedback = Selector('.feedback-main');
    this.SidebarItem = this.Sidebar.find('.has-submenu');
    this.SidebarItemExpanded = this.SidebarItem.filter('.active');
    this.SidebarItemActive = this.Sidebar.find('li.active');

    this.TOSLink = Selector('a').withText('Terms & Conditions');
  }

  async checkLiquidErrors() {
    const bodyText = await this.Body.textContent;
    return t
      .expect(bodyText)
      .notContains('Liquid Error')
      .expect(bodyText)
      .notContains('RenderFormTag Error')
      .expect(bodyText)
      .notContains('QueryGraphTag Error');
  }
}
