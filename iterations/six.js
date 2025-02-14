// const coding = ["js","ruby","java","python"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num) => num>4)
// const newNums = myNums.filter((num)=> {
//     return num>4
// })

// const newNums = []

// myNums.forEach((num) =>{
//     if (num>4){
//         newNums.push(num)
//     }

// })
// console.log(newNums);

const books =[
    { title: 'Book one', genre: 'Fiction', publish: 1981,
     edition: 2005},
    { title: 'Book two', genre: 'non Fiction', publish: 1982,
     edition: 2006},
     { title: 'Book three', genre: 'history', publish: 1983,
        edition: 2007},
     { title: 'Book four', genre: 'biology', publish: 1984,
    edition: 2008},
     { title: 'Book five', genre: 'story', publish: 1985,
     edition: 2009},
     { title: 'Book six', genre: 'math', publish: 1986,
      edition: 2001},
     ];
    // const userBooks = books.filter((bk) => bk.genre==='history')
 //console.log(userBooks);

 const userBooks = books.filter((bk) => bk.edition>= 2001 && bk.genre=== "history")
 console.log(userBooks);
 
      
    

