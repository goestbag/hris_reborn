'use strict';
/**
 * Author : Goestbag-Dedy
 */

 angular.module('hrisRebornApp')
.controller('PrestasiPrestasiCtrl', PrestasiPrestasiCtrl);

function PrestasiPrestasiCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
    //tabel induk
    /** tabel pake ng-repeat
    var vm = this;
    vm.prestasi = [];
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10).withOption('rowCallback', rowCallback);
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4)
        //DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
    $resource('json/tr_prestasi_May 2015.json').query().$promise.then(function(prestasi) {
        vm.prestasi = prestasi;
    });
*/
    //pake row click event
    var vm = this;
    vm.message = 'asdqwe';
    vm.someClickHandler = someClickHandler;
    vm.dtOptions1 = DTOptionsBuilder.fromSource('json/tr_prestasi_May 2015.json')
        .withPaginationType('full_numbers')
        .withOption('rowCallback', rowCallback);
    vm.dtColumns1 = [
        DTColumnBuilder.newColumn('nomor').withTitle('No. Reg'),
        DTColumnBuilder.newColumn('nama').withTitle('Nama'),
        DTColumnBuilder.newColumn('jabatan').withTitle('Jabatan'),
        DTColumnBuilder.newColumn('departemen').withTitle('Departemen'),
        DTColumnBuilder.newColumn('tgl_penilaian').withTitle('Tgl Penilaian'),
        DTColumnBuilder.newColumn('id_tr_prestasi_pelaksana').notVisible()
    ];

    function someClickHandler(info) {
        vm.message = info.id_tr_prestasi_pelaksana;
    }
    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', function() {
            $scope.$apply(function() {
                vm.someClickHandler(aData);
            });
        });
        return nRow;
    }

    //tabel detail
    vm.aspek_prestasi = [];
    vm.dtOptions = DTOptionsBuilder.newOptions()
                    .withOption('bFilter', false)
                    .withOption('bLengthChange', false)
                    .withOption('bInfo ', false)
                    .withLanguage({
                       "sInfoEmpty": "",
                       "sInfo": "",
                       "sInfoFiltered": "(Difilter dari _MAX_ total data)",
                       "sEmptyTable": "",
                       "sLoadingRecords": "",
                       "sProcessing": "",
                       "sSearch": "",
                       "sZeroRecords": ""
                       });
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1).notSortable(),
        //DTColumnDefBuilder.newColumnDef(1).notVisible(),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
    $resource('json/aspek_prestasi_May 2015.json').query().$promise.then(function(aspek_prestasi) {
        vm.aspek_prestasi = aspek_prestasi;
    });

    //selection list di halaman utama
    $http.get('json/bulan_prestasi.json').success(function (data) 
      {
         $scope.bulanPrestasi = data;
         $scope.selectedbulanPrestasi = $scope.bulanPrestasi[0];
    });

    //selection list di modal
    $http.get('json/tr_prestasi_May 2015.json').success(function (data) 
      {
         $scope.noReg = data;
         $scope.selectednoReg = $scope.noReg[0];
    });

    //selection list di modal
    $http.get('json/ma_aspek_penilaian.json').success(function (data) 
      {
         $scope.aspekPenilaian = data;
         $scope.selectedaspekPenilaian = $scope.aspekPenilaian[0];
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
