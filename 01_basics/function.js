function sayMyName(){
    // console.log("v");
    // console.log("i");
    // console.log("p");
    // console.log("i");
    // console.log("n");
    
}
sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);  

// }
function addTwoNumber(num1,num2){
    //  let result= num1 + num2
    //  return result
    return num1+num2
    
     }
let result= addTwoNumber(3,1)
//console.log("result:" ,result);


function loginUserMessage(username=sam){
    if(!username){
       // console.log("please enter a username");
        return
        
    }
    
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage("vipin"));

function calculateCartPrice(val1,val2,...num1){
    return num1

}
//console.log(calculateCartPrice(200,300,100));

const user ={
    username: "hitesh",
    price:100

}
function handObject(anyObject) {
    console.log(`username is ${anyObject.username}
         and price is ${anyObject.price}`);
}
//  handObject(user)
 handObject({
    username: "sam",
    price:399
 })

 let newArray = [200,300,400,500]

 function returnSecondValues(getArray){
    return getArray[1]
 }
 console.log(returnSecondValues(newArray));
 
