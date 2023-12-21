var app=angular.module("app",[])
app.controller("appCtrl",["$scope","appService",function($scope,appService){
    $scope.fruits;

    $scope.getData=()=>{
        $scope.fruits=appService.getData()
    }

    $scope.sendData=(f)=>{
        appService.sendData(f)
    }
}])