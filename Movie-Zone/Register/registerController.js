app.controller('registerCtrl',["$scope","registerServices","$location",function($scope,registerServices,$location){
    $scope.register=()=>{
        if($scope.upass=="" || $scope.uconfPass=="" || $scope.uname=="" || $scope.umail=="" || $scope.upass==undefined || $scope.uconfPass==undefined || $scope.uname==undefined || $scope.umail==undefined){
            alert("All the fields are mandatory")
        }
        else{
            if($scope.upass!=$scope.uconfPass){
                alert("The password doesnt match")
            }
            else{
                registerServices.getUserData(function(data){
                    let bool;
                     data.forEach(element => {
                        if(element.name==$scope.uname){
                            bool=true
                        }
                     });

                     if(bool){
                        alert("UserName Already Exists")
                     }
                     else{
                        let obj={
                            name:$scope.uname,
                            pwd:$scope.upass,
                            mail:$scope.umail,
                            fav:[]
                        }
                        registerServices.postUserData(obj)
                        alert("Registered Successfully")
                        $location.path('/')

                     }
                })
            }
        }
    }
}])