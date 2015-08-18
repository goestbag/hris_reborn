'use strict';

/**
 * @ngdoc overview
 * @name hrisRebornApp
 * @description
 * # hrisRebornApp
 *
 * Main module of the application.
 */
angular
  .module('hrisRebornApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables',
    'mgo-angular-wizard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/absensi/absensi', {
        templateUrl: 'views/absensi/absensi.html',
        controller: 'AbsensiAbsensiCtrl'
      })
      .when('/lembur/lembur', {
        templateUrl: 'views/lembur/lembur.html',
        controller: 'LemburLemburCtrl'
      })
      .when('/cuti/cuti', {
        templateUrl: 'views/cuti/cuti.html',
        controller: 'CutiCutiCtrl'
      })
      .when('/prestasi/prestasi', {
        templateUrl: 'views/prestasi/prestasi.html',
        controller: 'PrestasiPrestasiCtrl'
      })
      .when('/karyawan/karyawan', {
        templateUrl: 'views/karyawan/karyawan.html',
        controller: 'KaryawanKaryawanCtrl'
      })
      .when('/presensi/presensi', {
        templateUrl: 'views/presensi/presensi.html',
        controller: 'PresensiPresensiCtrl'
      })
      .when('/karyawan/tambah', {
        templateUrl: 'views/karyawan/tambah.html',
        controller: 'KaryawanTambahCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
