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
    'datatables' 
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
      .otherwise({
        redirectTo: '/'
      });
  });
