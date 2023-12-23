app.controller("displayCtrl",["$scope","displayService",function($scope,displayService){
    $scope.info
    $scope.displayData=()=>{
        displayService.displayData(function(data){
            console.log(data.results);
           
            $scope.info=data.results
        })
    }


}])


app.controller("registerCtrl",["$scope","displayService",function($scope,displayService){

    $scope.name;
    $scope.email;
    $scope.pass;


    $scope.user;
    $scope.getFormData=function(){
    var userObj={};
    userObj.name=$scope.name;
    userObj.email=$scope.email;
    userObj.pass=$scope.pass; 

    // console.log(userObj);


    displayService.sendUserData(userObj,function(data){
        console.log(data);
    });
        
       

    }


}])