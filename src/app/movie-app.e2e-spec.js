describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("At The Movies");
  });

  it('should have a main title', function () {
    expect(element(by.css('.greeting')).getText()).toEqual('Hello!');
  });
  
});