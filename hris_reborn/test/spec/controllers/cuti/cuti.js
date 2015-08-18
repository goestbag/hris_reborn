'use strict';

describe('Controller: CutiCutiCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var CutiCutiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CutiCutiCtrl = $controller('CutiCutiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
