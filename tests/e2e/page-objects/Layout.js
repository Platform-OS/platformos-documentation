import { Selector, t } from 'testcafe';

export default class LayoutPO {
  constructor() {
    this.txt = {
      about: 'About platformOS',
      howItWorks: 'How platformOS Works',
      contact: 'Contact'
    };

    this.Body = Selector('body');
    this.Content = this.Body.find('.content__main');
    this.Contributors = Selector('.contributors');
    this.Questions = Selector('.callout__actions');
    this.Sidebar = Selector('.sidebar', { visibilityCheck: true });
    this.Feedback = Selector('.feedback-main');
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
