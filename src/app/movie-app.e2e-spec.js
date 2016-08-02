describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("");
  });

  it('should have a main title', function () {
    expect(element(by.css('main .title')).getText()).toEqual('');
  });
  
});