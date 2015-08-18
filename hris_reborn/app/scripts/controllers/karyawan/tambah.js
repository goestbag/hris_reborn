'use strict';

/**
 * @ngdoc function
 * @name hrisRebornApp.controller:KaryawanTambahCtrl
 * @description
 * # KaryawanTambahCtrl
 * Controller of the hrisRebornApp
 */
/*
angular.module('hrisRebornApp')
  .controller('KaryawanTambahCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

$(function() {
    var options = {};
    var wizard = $("#some-wizard").wizard(options);
});
*/

angular.module('hrisRebornApp')
.controller('KaryawanTambahCtrl', KaryawanTambahCtrl);

/* untuk bootstrap-application-wizard
function KaryawanTambahCtrl($http, $scope,$resource) {
	var options = {};
    var wizard = $("#some-wizard").wizard({
	   keyboard : false,
	   backdrop : true,
	   showCancel : false,
	   contentHeight : 550,
	   contentWidth : 700,
	   isModal : false
	});
    wizard.show();
}

$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'L',
        showTodayButton: true,
        locale: 'id'
    });
});
*/
function KaryawanTambahCtrl($http, $scope,$resource, DTOptionsBuilder, DTColumnDefBuilder) {
	var vm = this;

    //KTP
    vm.persons = $resource('json/ktp.json').query();
    vm.dtOptionsKtp = DTOptionsBuilder.newOptions()
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
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3)
    ];
    vm.person2Add = _buildPerson2Add('KTP');
    vm.addPerson = addPerson;
    vm.modifyPerson = modifyPerson;
    vm.removePerson = removePerson;

    function _buildPerson2Add(jenis, nomor, berlaku, dikeluarkan) {
        return {
            jenis: jenis,
            nomor: nomor,
            berlaku: berlaku,
            dikeluarkan: dikeluarkan
        };
    }
    function addPerson() {
        vm.persons.push(angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add();
    }
    function modifyPerson(index) {
        vm.persons.splice(index, 1, angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add();
    }
    function removePerson(index) {
        vm.persons.splice(index, 1);
    }

    //hobi-penyakit-------------------------------------------------------------------

    vm.hobi = $resource('json/hobi.json').query();
    vm.dtOptionsHobi = DTOptionsBuilder.newOptions()
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
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1)
    ];
    vm.hobi2Add = _buildHobi2Add();
    vm.addHobi = addHobi;
    vm.modifyHobi = modifyHobi;
    vm.removeHobi = removeHobi;

    function _buildHobi2Add(jenis, frekuensi) {
        return {
            jenis: jenis,
            frekuensi: frekuensi
        };
    }
    function addHobi() {
        vm.hobi.push(angular.copy(vm.hobi2Add));
        vm.hobi2Add = _buildHobi2Add();
    }
    function modifyHobi(index) {
        vm.hobi.splice(index, 1, angular.copy(vm.hobi2Add));
        vm.hobi2Add = _buildHobi2Add();
    }
    function removeHobi(index) {
        vm.hobi.splice(index, 1);
    }

    //pendidikan formal-------------------------------------------------------------------
    vm.pendidikan = [];
    
    vm.dtOptionsPendidikan = DTOptionsBuilder.newOptions()
                    .withOption('bFilter', false)
                    .withOption('bLengthChange', false)
                    .withOption('bInfo ', false)
                    .withLanguage({
                       "sInfoEmpty": "Menampilkan 0 data",
                       "sInfo": "",
                       "sInfoFiltered": "(Difilter dari _MAX_ total data)",
                       "sEmptyTable": "Menampilkan 0 data",
                       "sLoadingRecords": "",
                       "sProcessing": "",
                       "sSearch": "",
                       "sZeroRecords": ""
                       });
    /*
    vm.pendidikan = $resource('json/pendidikan.json').query();
    vm.dtOptionsPendidikan = DTOptionsBuilder.newOptions()
        .withOption('scrollY', '100%')
        .withOption('scrollX', '100%')
        .withOption('scrollCollapse', true)
        .withOption('paging', false)
        .withOption('bFilter', false)
        .withFixedColumns({
            heightMatch: 'auto'
        });;
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4)
    ];
    vm.person2Add = _buildPendidikan2Add();
    vm.addPendidikan = addPendidikan;
    vm.modifyPendidikan = modifyPendidikan;
    vm.removePendidikan = removePendidikan;

    function _buildPendidikan2Add(tingkat, nama, kota, tahun_lulus, jurusan) {
        return {
            tingkat: tingkat,
            nama: nama,
            kota: kota,
            tahun_lulus: tahun_lulus,
            jurusan: jurusan
        };
    }
    function addPendidikan() {
        vm.pendidikan.push(angular.copy(vm.pendidikan2Add));
        vm.pendidikan2Add = _buildPendidikan2Add();
    }
    function modifyPendidikan(index) {
        vm.pendidikan.splice(index, 1, angular.copy(vm.pendidikan2Add));
        vm.pendidikan2Add = _buildPendidikan2Add();
    }
    function removePendidikan(index) {
        vm.pendidikan.splice(index, 1);
    }
    */

}





