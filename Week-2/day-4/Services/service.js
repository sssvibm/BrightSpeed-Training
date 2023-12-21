app.service("appService",["$http",function($http){
    let fruits=["apple","mango","pomogrenate"]

    this.getData=()=>{
        console.log(fruits);
        return fruits
    }

    this.sendData=(f)=>{
        fruits.push(f)
    }
}])