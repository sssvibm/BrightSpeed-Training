app.controller("dashboardCtrl", ["$scope", "dashboardServices", "$routeParams", "$location", function ($scope, dashboardServices, $routeParams, $location) {
  (() => {
    $scope.id=localStorage.getItem("id")
    console.log($routeParams.name);
    $scope.mail = $routeParams.name
    let locFlag = true;
    let count = 0;
    for (i in localStorage) {
      if (i == "length") {
        locFlag = false
      }
      if (locFlag) {
        count++;
      }
    }



    $scope.auth_flag = false
    if (count) {
      $scope.auth_flag = true
    }
    else {
      $scope.auth_flag = false
    }
  }
  )();


  $scope.favMovies=[]




  $scope.genres
  $scope.languages
  $scope.movieDescription = [];
  $scope.movieIds = [];

  $scope.getGenres = () => {
    dashboardServices.getGenres(function (data) {
      $scope.genres = data
    })
  }
  $scope.getGenres()


  $scope.getLanguages_and_movieDescription = () => {
    dashboardServices.getLanguages(function (data) {
      $scope.languages = data
      $scope.languages.forEach((e) => {
        dashboardServices.getMovieId(e.iso_639_1, function (data) {
          let string = "";
          data.genre_ids.forEach((e) => {
            string += e + ""
          })


          if(localStorage.getItem("favArr").split(',').includes(`${data.id}`)){
            data.favColor="rgb(255, 0, 128)"
            data.genre_string = string
            $scope.favMovies.push(data)
          }
          else{
            data.favFlag="white"
          }


          data.genre_string = string
          $scope.movieDescription.push(data)
        })

      })

      console.log($scope.movieDescription);
      console.log($scope.favMovies);

    })

  }
  $scope.getLanguages_and_movieDescription()

  $scope.sortFlag = false
  $scope.sortClass = 'fa-solid fa-up-long'
 
 
  $scope.sortChange = () => {
    if ($scope.sortFlag) {
      $scope.sortFlag = false
      $scope.sortClass = 'fa-solid fa-up-long'
    }
    else {
      $scope.sortFlag = true
      $scope.sortClass = 'fa-solid fa-down-long'
    }
  }



  $scope.logout = () => {
    localStorage.clear()
    $location.path('/')
  }


  $scope.postFavMovie = (userId, movieId) => {
    dashboardServices.getSingleRecord(userId, function (data) {
      let favArr = data[0].fav
      
      if(favArr.includes(movieId)){
        favArr.splice(favArr.indexOf(movieId),1)
      }
      else{
        favArr.push(movieId)
      }

      localStorage.setItem("favArr",favArr)
      


      let obj = {
        id: 1,
        name: "Vishnu",
        pwd: "1234",
        mail: "v@gmail.com",
        fav: favArr
      }
      

      dashboardServices.postFavMovie(userId,obj)

    })
  }

  $scope.favFlag=true
  $scope.toggleFavMovies=()=>{
    if($scope.favFlag){
      $scope.favFlag=false
    }
    else{
      $scope.favFlag=true
    }
  }












}]) 