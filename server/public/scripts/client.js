console.log('js');

const timeTrackerApp = angular.module('TimeTrackerApp', ['ngMaterial', 'ngMessages']);

timeTrackerApp.controller('HomeController',['$http','$mdToast','$mdDialog', function($http,$mdToast,$mdDialog){
    self = this;
    self.message=('Angular sure is sharp.');
}]);