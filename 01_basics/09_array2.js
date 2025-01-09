const marvel_heros = ["thor","ironamn", "captain"]
const  Dc_heros = ["batman","superman","flash"]

//marvel_heros.push(Dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3]);

// const allHeros = marvel_heros.concat(Dc_heros)
// console.log(allHeros);

const all_new_heros= [...marvel_heros, ...Dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]

let real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vipin"))

console.log(Array.from("vipin"))
console.log(Array.from({name:"vipin"}))

let score1 =122
let score2 =200
var score3 = 300

console.log(Array.of(score1,score2,score3));

