'use strict';

describe('Controller: LemburLemburCtrl', function () {

  // load the controller's module
  beforeEach(module('hrisRebornApp'));

  var LemburLemburCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LemburLemburCtrl = $controller('LemburLemburCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
