// date

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 1, 8)
//let myCreatedDate = new Date(2023, 1, 8,3 ,8)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("01-03-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
}

)
