const coding = ["js","ruby","java","python"]

coding.forEach(function(value){
   // console.log(value);  
})

coding.forEach((key)=>{
  //  console.log(key);
    
})

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })

const myCoding=[
    {
        lgName:"javascript",
        lgFileName: "js"
    },

    {
        lgName:"java",
        lgFileName:"java"
    },

    {
    lgName:"python",
    lgFileName:"py"
    }
]

myCoding.forEach((key)=>{
    console.log(key.lgName);
    
})