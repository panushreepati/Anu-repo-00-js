const marvel_heros = ["Ironman","spiderman","superman"]
const dc_heros = ["superman","Flash","kanha"]

~marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//const all_mew_heros = [...marvel_heros,...dc_heros] //spread methods

//console.log(all_mew_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);




// console.log(Array.isArray("Anu"))
// console.log(Array.from("Anu"))
// console.log(Array.from({name:"anu"}))  // its directly doesn't convert values denotes properly all values


let score1 = 200
let score2 = 300 
let score3 = 400

console.log(Array.of(score1,score2,score3))