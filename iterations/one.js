//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==7){
       // console.log("7 is the best number");
        
    }
  //  console.log(element);
    
}

for (let i = 0; i <= 11; i++) {
    //console.log(`outer loop: ${i}`);
   for (let j = 0; j < 11; j++) {
    //console.log(`inner loop ${j} and outer loop ${i}`);
    //console.log(i+ '*'+ j+ '=' + i*j);
   }
}

let myArray = ["vipin","ankit", "ram"];
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break and continue
// for (let index = 0; index <= 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i ${index}`); 
    
// }

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i ${index}`); 
    
}

