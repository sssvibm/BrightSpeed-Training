app.controller("loginCtrl",["$scope","loginServices","$location",function($scope,loginServices,$location){
    $scope.userData;
    $scope.logFlag
    $scope.email;

   ( ()=>{
      let count=0;
      let locFlag=true;
      for(i in localStorage){
        if(i=="length"){
          locFlag=false
        }
        if(count==1){
         locFlag=false
        }
        if(locFlag){
          count++;
        }
      }

      console.log(count);

      if(count==1){
         $scope.disableFlag="all"
         alert("Only One User Can Be Logged At Once")
      }
      else{
         $scope.disableFlag=""
      }
   }
   )();


    $scope.login=()=>{
       loginServices.getUserData(function(data){
         $scope.userData=data
         console.log($scope.userData);
         
         $scope.userData.forEach(ele => {
            console.log(ele);
            if($scope.uname==ele.name && $scope.upass==ele.pwd){
               localStorage.setItem("id",ele.id)
               localStorage.setItem("favArr",ele.fav)
               $scope.email=ele.mail
               $scope.logFlag=true
            }
         });

         if($scope.logFlag){
            localStorage.setItem($scope.uname, $scope.upass)
            $location.path(`/dashboard/${$scope.email}`)
            $scope.uname=""
            $scope.upass=""
         }
         else{
            let locFlag=true
            for(i in localStorage){
               if(i=="length")
               locFlag=false
               if(locFlag)
               console.log(localStorage[i]);
            }
            $scope.uname=""
            $scope.upass=""
            alert("Invalid Credintials")
         }
       })
    }
}])
//jhgcc