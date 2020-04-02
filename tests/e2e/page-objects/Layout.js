import { Selector, t } from 'testcafe';

export default class LayoutPO {
  constructor() {
    this.Body = Selector('body');
    this.Content = this.Body.find('.content__main');
    this.CTABlock = Selector('.callout__actions');
    this.Sidebar = Selector('.sidebar', { visibilityCheck: true });
    this.Feedback = Selector('.feedback-main');
    this.LastEdit = Selector('.last-edit');
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
