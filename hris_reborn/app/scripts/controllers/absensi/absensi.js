'use strict';
/**
 * Author : Goestbag-Dedy
 */
angular.module('hrisRebornApp')
  .controller('AbsensiAbsensiCtrl', AbsensiAbsensiCtrl);

function AbsensiAbsensiCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
	var vm = this;
    vm.message = 'asdqwe';
    vm.someClickHandler = someClickHandler;
    vm.dtOptions1 = DTOptionsBuilder.fromSource('json/absensi.json')
        .withPaginationType('full_numbers')
        .withOption('order', [0, 'desc'])
        .withOption('rowCallback', rowCallback);
    vm.dtColumns1 = [
        DTColumnBuilder.newColumn('entry_date_time').withTitle('Tanggal Entry'),
        DTColumnBuilder.newColumn('jenis_modul').withTitle('Jenis Absen'),
        DTColumnBuilder.newColumn('nomor').withTitle('No. Reg'),
        DTColumnBuilder.newColumn('nama').withTitle('Nama'),
        DTColumnBuilder.newColumn('jabatan').withTitle('Jabatan'),
        DTColumnBuilder.newColumn('unit').withTitle('Departemen'),
        DTColumnBuilder.newColumn('no').notVisible()
    ];

    function someClickHandler(info) {
        vm.message = info.no;
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

    //tabel detail
    vm.detail_absensi = [];
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
        DTColumnDefBuilder.newColumnDef(1).notSortable()
        //DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
    $resource('json/detail_absensi.json').query().$promise.then(function(detail_absensi) {
        vm.detail_absensi = detail_absensi;
    });
}
