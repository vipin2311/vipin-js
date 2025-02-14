 const myNums = [1,2,3]

//  const mytotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+ currval
//  },0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)

 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        price:299,
    },
    {
        itemName: "js course",
        price:299,
    },
    {
        itemName: "java course",
        price:2999,
    },
    {
        itemName: "py course",
        price:29999,
    },
 ]

 const totalPrice = shoppingCart.reduce((acc,item)=>acc+
 item.price,0)
 console.log(totalPrice);
 
 