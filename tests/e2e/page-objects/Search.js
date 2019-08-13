import { Selector, t } from 'testcafe';

export default class SearchPO {
  constructor() {
    this.existingPhrase = 'Form';
    this.nonExistingPhrase = `${+new Date()} ## ${+new Date()}`;
    this.nonSearchablePhrase = 'Our usual response time is 1-2 business days.';

    this.Input = Selector('.form-search input');
    this.SubmitButton = Selector('.form-search button');
    this.ResultsList = Selector('.search-results');
    this.ResultsItems = this.ResultsList.find('li');
    this.Pagination = Selector('.pagination');
    this.PaginationItems = this.Pagination.find('li');
    this.PaginationNext = this.Pagination.find('a').withText('Next');
  }

  async go(phrase) {
    return t.typeText(this.Input, phrase, { replace: true }).pressKey('enter');
  }
}
