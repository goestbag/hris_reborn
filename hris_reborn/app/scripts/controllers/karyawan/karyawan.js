'use strict';

/**
 * @ngdoc function
 * @name hrisRebornApp.controller:KaryawanKaryawanCtrl
 * @description
 * # KaryawanKaryawanCtrl
 * Controller of the hrisRebornApp
 */

/* 
angular.module('hrisRebornApp')
  .controller('KaryawanKaryawanCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
angular.module('hrisRebornApp')
.controller('KaryawanKaryawanCtrl', KaryawanKaryawanCtrl);

function KaryawanKaryawanCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.karyawan = [];
    
    vm.dtOptions = DTOptionsBuilder.newOptions()
       	.withLanguage({
    		"sInfoEmpty":      "Menampilkan 0 data",
    		"sInfo":           "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
    		"sInfoFiltered":   "(Difilter dari _MAX_ total data)",
    		//sEmptyTable":     "<img src='images/Loading.gif'>",
    		"sEmptyTable":     "Mohon Tunggu...",
            "sLoadingRecords": "Loading...",
            "sProcessing":     "Processing...",
            "sSearch":         "Cari:",
            "sZeroRecords":    "Data tidak ditemukan"
    		})
       	.withDisplayLength(10)
        .withPaginationType('full_numbers')
        .withOption('responsive', true);
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4).withClass('none'),
        DTColumnDefBuilder.newColumnDef(5),
        DTColumnDefBuilder.newColumnDef(6),
        DTColumnDefBuilder.newColumnDef(7).withClass('none')
        //DTColumnDefBuilder.newColumnDef(1).notVisible(),
        //DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
    $resource('json/data_kary.json').query().$promise.then(function(karyawan) {
        vm.karyawan = karyawan;
        //select v.nomor, v.nama, v.jabatan, v.departemen, v.divisi, v.lokasi, v.status_karyawan, v.tgl_masuk from temp_v_karyawan v
    });
}


/*
function KaryawanKaryawanCtrl(DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withDisplayLength(2)
        .withDOM('pitrfl');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1).notVisible(),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
}
*/
// angular.module('hrisRebornApp', ['datatables']);