'use strict';

describe('Controller: PrestasiPrestasiCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var PrestasiPrestasiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrestasiPrestasiCtrl = $controller('PrestasiPrestasiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
