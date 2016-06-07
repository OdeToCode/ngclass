describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <atm-app>', function () {
    var home = element(by.css('atm-app'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Hello!");
  });

});