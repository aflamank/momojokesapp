import { MomomumjokesPage } from './app.po';

describe('momomumjokes App', () => {
  let page: MomomumjokesPage;

  beforeEach(() => {
    page = new MomomumjokesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
