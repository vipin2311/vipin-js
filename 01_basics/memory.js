// stack (primitive)  , heap ( non-primitive)

let MyName = "vipin"

let myAnotherName = MyName
myAnotherName = "vipinkumar"

console.log(myAnotherName);
console.log(MyName);

let user1 = {
    email : "vipin@.com"
}

let user2 = user1
user2.email= "rahul@.com"

console.log(user1.email);
console.log(user2.email);
