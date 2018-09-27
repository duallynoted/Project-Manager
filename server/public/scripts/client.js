const timeTrackerApp = angular.module('TimeTrackerApp', ['ngMaterial', 'ngRoute']);

timeTrackerApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    });
}]);

timeTrackerApp.controller('HomeController', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {
    self = this;
    self.message = ('Angular sure is sharp.');
}]);