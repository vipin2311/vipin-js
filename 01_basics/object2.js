//let tinderUser = new object()
let tinderUser = {}

tinderUser.id = "132jij"
tinderUser.name = "vipin"
tinderUser.isLoggedIn = false


// console.log(tinderUser);
let regularUser ={
    email:"vi[pim@ga,mil.com",
    fullname:{
        userfullname:{
            firstname:"vipim",
            lastname: "kumar"

        }
    }
    }

// console.log(regularUser);
//console.log(regularUser.fullname.userfullname.firstname);

let obj1 ={1:"ab" ,2:"AM"}
let obj2 = {3:"gcj",4:"hdh"}

// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

let obj3= {...obj1,...obj2}
//console.log(obj3);

const users =[
    {
        id:"123",
        age:"ram"
    },
    {
        id:"123",
        age:"ram"
    },
    {
        id:"123",
        age:"ram",
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

let course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}
let{courseInstructor:instructor} = course
console.log(instructor);

{
    // "name": "hitesh",
    // coursename: "js in hindi",
    // "price" : "free"

}

[
    {},
    {},
    {},
    
]

