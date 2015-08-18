'use strict';

describe('Controller: AbsensiAbsensiCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var AbsensiAbsensiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AbsensiAbsensiCtrl = $controller('AbsensiAbsensiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
