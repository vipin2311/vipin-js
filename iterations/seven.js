 const myNumbers = [1,2,3,4,5,6,7]

 //const newNums = myNumbers.map((num)=> {return num+100})
 
 const newNums = myNumbers
                 .map((num)=> num*20)
                 .map((num)=> num+3)
                 .filter((num)=> num>= 40)

 console.log(newNums);



 