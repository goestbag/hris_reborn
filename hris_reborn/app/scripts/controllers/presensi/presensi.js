'use strict';
/**
 * Author : Goestbag-Dedy
 */
angular.module('hrisRebornApp')
  .controller('PresensiPresensiCtrl',PresensiPresensiCtrl);

function PresensiPresensiCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
	var vm = this;
    vm.message = 'asdqwe';
    vm.someClickHandler = someClickHandler;
    vm.dtOptions1 = DTOptionsBuilder.fromSource('json/presensi juli 2015.json')
        .withPaginationType('full_numbers')
        .withOption('order', [1, 'desc'])
        .withOption('rowCallback', rowCallback);
    vm.dtColumns1 = [
        DTColumnBuilder.newColumn('tgl_presensi').withTitle('Tanggal Presensi'),
        DTColumnBuilder.newColumn('jam').withTitle('Jam'),
        DTColumnBuilder.newColumn('nomor').withTitle('No. Reg'),
        DTColumnBuilder.newColumn('nama').withTitle('Nama'),
        DTColumnBuilder.newColumn('jabatan').withTitle('Jabatan'),
        DTColumnBuilder.newColumn('departemen').withTitle('Departemen'),
        DTColumnBuilder.newColumn('lokasi').withTitle('Lokasi'),
        DTColumnBuilder.newColumn('id_tr_presensi').notVisible()
    ];

    function someClickHandler(info) {
        vm.message = info.id_tr_presensi;
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

    //selection list di halaman utama
    $http.get('json/bulan_presensi.json').success(function (data) 
      {
         $scope.bulanPresensi = data;
         $scope.selectedbulanPresensi = $scope.bulanPresensi[0];
    });
}
