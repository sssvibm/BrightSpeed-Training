let arr=[]
app.service("updateCtrlService",function(){
     this.updateData=(obj)=>{
        arr.push(obj)
        return arr
     }
})