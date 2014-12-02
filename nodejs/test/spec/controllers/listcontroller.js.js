'use strict';

describe('Controller: ListcontrollerJsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngclassApp'));

  var ListcontrollerJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListcontrollerJsCtrl = $controller('ListcontrollerJsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
