var app = angular.module("MyApp", []);

app.controller("FormController", function ($scope) {

    $scope.formSubmit = function () {
        alert("CLICKED DAT BUTTON!!!")
    }

});