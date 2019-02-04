import { Selector, t } from 'testcafe';
import fs from 'fs';
import path from 'path';

export default class LayoutPO {
  constructor() {
    this.txt = {
      about: 'About platformOS',
      howItWorks: 'How platformOS Works',
      contributorGuide: 'Contributor Guide'
    };

    const mpkit = fs.readFileSync(path.join(path.resolve(process.cwd(), '.marketplace-kit')), 'utf8');
    const config = JSON.parse(mpkit);
    const stagingUrl = config.staging.url;

    // env var doesnt work yet, but when we pass it to docker, it will be ready to rock
    this.URL = {
      staging: stagingUrl || 'https://documentation-staging.staging.oregon.platform-os.com'
    };

    this.Body = Selector('body');
    this.Content = this.Body.find('section.content');
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
