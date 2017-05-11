import { MentoringPage } from './app.po';

describe('mentoring App', () => {
  let page: MentoringPage;

  beforeEach(() => {
    page = new MentoringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
