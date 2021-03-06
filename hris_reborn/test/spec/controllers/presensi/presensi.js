'use strict';

describe('Controller: PresensiPresensiCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var PresensiPresensiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PresensiPresensiCtrl = $controller('PresensiPresensiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
