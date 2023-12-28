app.service("dashboardServices",["$http",function($http){
    let api_key="ec66f42ecaf78c83ec3e627218a6d981"
    this.getGenres=(ini)=>{
        $http(
            {
                method:"GET",
                url:(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
            }
            ).then(function(res){
                console.log(res.data.genres);
                ini(res.data.genres)
            },function(err){
                console.log(err);
            })
            
        
    }


    this.getLanguages=(ini)=>{
        $http(
            {
                method:"GET",
                url:(`https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`)
            }
            ).then(function(res){
                console.log(res.data);
                lang=res.data
                ini(res.data)
            },function(err){
                console.log(err);
            })
            
        
    }



    this.getMovieId=(lang,fun)=>{
        $http(
            {
                method:"GET",
                url:(`https://api.themoviedb.org/3/discover/movie?api_key=ec66f42ecaf78c83ec3e627218a6d981&with_original_language=${lang}`)
            }
            ).then(function(res){
               res.data.results.forEach(element => {
                  if(element.poster_path!=null && element.genre_ids.length>0 && element.poster_path!=null){
                  fun(element)
                  }
               });
            },function(err){
                console.log(err);
            })
    }


    this.getSingleRecord=(id,fun)=>{
        $http({
            method:"GET",
            url:(`http://localhost:3000/users/?${id}`),
        }).then(function(response){ 
               
               fun(response.data)

        }) .catch(function (error) {
            // Handle errors here
            console.log(error);
        });
    }



    this.postFavMovie=(id,obj)=>{
        $http({
            method:"PUT",
            url:(`http://localhost:3000/users/${id}`),
            data:obj
        }).then(function(response){ 
            console.log(response.data);
        }) .catch(function (error) {
            // Handle errors here
            console.log(error);
        });
    }




   

 
}])