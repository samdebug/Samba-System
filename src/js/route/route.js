(function(angular) {
    'use strict';
    angular.module('FileManagerApp', [
            'ngRoute'
        ])
        .config(['$routeProvider',function ($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'FileManagerCtrl',
                    templateUrl: 'main.html'
                })
                .when('/login', {
                    controller: 'FileManagerCtrl',
                    templateUrl: 'login.html'
                })
                .when('/404', {
                    controller: 'FileManagerCtrl',
                    templateUrl: '404.html'
                })
                .otherwise({
                    redirectTo: '/404'
                });
        }]);
})(angular);
