var app=angular.module("app",[])

app.controller("updateCtrl",["$scope","updateCtrlService",function($scope,updateCtrlService){
    $scope.info;

    $scope.updateData=()=>{
        let obj={
            name:$scope.uname,
            pwd:$scope.upass
        }

        $scope.info =  updateCtrlService.updateData(obj)
        console.log($scope.info);
    }
}])