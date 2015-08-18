'use strict';
/**
 * Author : Goestbag-Dedy
 */

 angular.module('hrisRebornApp')
.controller('PrestasiPrestasiCtrl', PrestasiPrestasiCtrl);

function PrestasiPrestasiCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.prestasi = [];
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4),
        DTColumnDefBuilder.newColumnDef(5)
        //DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
    $resource('json/tr_prestasi2.json').query().$promise.then(function(prestasi) {
        vm.prestasi = prestasi;
    });

    $http.get('json/bulan_prestasi.json').success(function (data) 
      {
         $scope.testAccounts = data;
         $scope.selectedTestAccount = $scope.testAccounts[0];
    });
}

/** angular-datatables tanpa option
function PrestasiPrestasiCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('json/tr_prestasi.json')
        .withOption('stateSave', true)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('periode').withTitle('Periode'),
        DTColumnBuilder.newColumn('nomor').withTitle('No Reg'),
        DTColumnBuilder.newColumn('nama').withTitle('Nama'),
        DTColumnBuilder.newColumn('jabatan').withTitle('Jabatan'),
        DTColumnBuilder.newColumn('departemen').withTitle('Departemen'),
        DTColumnBuilder.newColumn('tgl_penilaian').withTitle('Tanggal Penilaian'),
    ];
}
*/
 /** Asli generate dari yeoman
angular.module('hrisRebornApp')
  .controller('PrestasiPrestasiCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
