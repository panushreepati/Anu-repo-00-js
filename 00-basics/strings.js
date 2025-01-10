const name = "anu"
const repoCount = 60

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('anu-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStringc= gameName.slice(-2,4);
console.log(anotherStringc);

const newStringOne = "  anu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anu.com/anu%30shree"

console.log(url.replace('%30', '#'));

console.log(url.includes('anu'))

console.log(gameName.split('-'));