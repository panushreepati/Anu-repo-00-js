//Arrays

const myArr = [0,1,2,3,4,5,6,7]
const myHeros = ["shaktiman","spiderman"]

const myArr2 = [1,2,3,4];
//console.log(myArr[1]);

//methods

// myArr.push(8)
// myArr.pop();//its deleted the last value

//myArr.unshift(9);//parameter added
//myArr.shift(); //removed the added value in starting// no parameter


// console.log(myArr.includes(10))
// console.log(myArr.indexOf(10))
//console.log(myArr.indexOf(4))

//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);//A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
//Adds all the elements of an array into a string, separated by the specified separator string.

//console.log(typeof newArr)

// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)