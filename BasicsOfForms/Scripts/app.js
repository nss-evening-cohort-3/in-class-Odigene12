var app = angular.module("MyApp", []);

app.controller("FormController", function ($scope) {
   

    $scope.postAjax = function () {
        var myData = $("#myForm").serialize();
        $.post("/api/AngularApi", myData, function (data, textStatus, jqXHR) {
            $(".result").html(data)
            console.log("success")
            console.log($(".result").html(data))
        }).fail(function (error) {
            console.log(error)
        })
     

        event.preventDefault();
    }

    $scope.formSubmit = function () {
        $scope.postAjax()
        event.preventDefault()
    }

    
});