import { SevenMentor1Page } from './app.po';

describe('seven-mentor1 App', function() {
  let page: SevenMentor1Page;

  beforeEach(() => {
    page = new SevenMentor1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
