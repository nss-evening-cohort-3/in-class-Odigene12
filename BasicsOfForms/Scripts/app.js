var app = angular.module("MyApp", []);

app.controller("FormController", function ($scope, $http) {
   
    $scope.user = {
        email: "",
        password: "",
        passwordconfirmation: ""
    }

    $scope.postAjax = function () {
        var myData = $("#myForm").serializeArray();

        $http({
            method: "POST",
            url: "/api/AngularApi",
            data: myData,
            datatype: JSON
        }).then(function (response) {
            console.log(response)
        })
     

        event.preventDefault();
    }

    $scope.formSubmit = function () {
        $scope.postAjax()
        event.preventDefault()
    }

    
});