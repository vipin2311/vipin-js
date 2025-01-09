//singleton
//object.create

//object literals
const mySym = Symbol("key1")

const jsUser= {
    name:"vipin",
    "full name": "vipin kumar",
   [mySym]: "mykey1",
    age:20,
    locations:"bhopal",
    email:"vipin@gmail.com",
    isLoggedIn: false,
    lastloginDays:["monday","sunday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]);

jsUser.email = "vipinKumar@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "vipinjsdi2gmai.com"
//console.log(jsUser);

jsUser.greeting =  function(){
    console.log("hello vipin");
    
}


jsUser.greetingTwo =  function(){
    console.log(`hello vipin,${this.name}`);
    
}
console.log((jsUser.greeting()));
console.log(jsUser.greetingTwo());








