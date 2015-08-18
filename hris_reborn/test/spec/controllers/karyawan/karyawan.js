'use strict';

describe('Controller: KaryawanKaryawanCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var KaryawanKaryawanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KaryawanKaryawanCtrl = $controller('KaryawanKaryawanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
