app.service("displayService",["$http",function($http){
       this.displayData=(cb)=>{
        $http(
            {
                method:"GET",
                url:"https://free.currconv.com/api/v7/currencies?apiKey=73f0437767d2dc7b17fc"
            }
        ).then(function(response){
            // console.log(response);
            // console.log(response.data);
            
            cb(response.data);
           
        },function(e){
            console.log(e);
        });
       }

       this.sendUserData=function(userObj,cb){
        // console.log(userObj);
        $http(
            {
                method:"POST",
                url:"http://localhost:3000/info",
                data:userObj
            }
        ).then(function(response){
            // console.log(response.data);
            cb(response.data);
        },function(e){
            console.log(e);
        });



    }
}])