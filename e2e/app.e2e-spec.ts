import { YieldifyTaskPage } from './app.po';

describe('yieldify-task App', function() {
  let page: YieldifyTaskPage;

  beforeEach(() => {
    page = new YieldifyTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
