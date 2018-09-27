const timeTrackerApp = angular.module('TimeTrackerApp', ['ngMaterial', 'ngRoute']);

timeTrackerApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    }).when('/entries', {
        templateUrl: 'views/entries.html',
        controller: 'EntriesController as vm'
    }).when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController as vm'
    }).when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsController as vm'
    }).otherwise({
        template:`<h1>404--NOT FOUND</h1>`
    });
}]);

timeTrackerApp.controller('HomeController', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {
    self = this;
    self.message = ('Angular sure is sharp.');
}]);
timeTrackerApp.controller('EntriesController', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {
    self = this;
    self.message = ('This is the entry page.');
}]);
timeTrackerApp.controller('ProjectsController', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {
    self = this;
    self.message = ('This is the project page.');
}]);
timeTrackerApp.controller('ReportsController', ['$http', '$mdToast', '$mdDialog', function ($http, $mdToast, $mdDialog) {
    self = this;
    self.message = ('This is the report page.');
}]);