app.service("loginServices",["$http",function($http){
  
     this.getUserData=(fun)=>{
    $http({
        method:"GET",
        url:("http://localhost:3000/users")
    }).then(function(response){ 
           console.log(response.data);
           fun(response.data)
    }).then(function(error){
            console.log(error);
    })
  }

 
}

]) 