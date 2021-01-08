import { Selector, t } from 'testcafe';

export default class LayoutPO {
  constructor() {
    this.Content = Selector('.content__main');
    this.Feedback = Selector('.feedback-main');
    this.LastEdit = Selector('.last-edit');
  }

  async checkLiquidErrors() {
    const body = Selector('body');
    const bodyText = await body.textContent;
    return t
      .expect(bodyText)
      .notContains('Liquid Error')
      .expect(bodyText)
      .notContains('RenderFormTag Error')
      .expect(bodyText)
      .notContains('QueryGraphTag Error');
  }
}
