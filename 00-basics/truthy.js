// const userEmail = "anushree.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email")
// }

// falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

// "0"(under string),'false',"  "(under string space),[](empty array),{}(empty object),function(){},true,42n(BigInt),3.14,infinity,-infinity


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
   // console.log("Object is empty");

}


//  Nullish coalescing Operator (??): null undefined


let val1;
//  val1 = 5 ?? 10
//  val1 = null  ?? 10
// val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20


// console.log(val1);


// Ternary Operator

// condition ? true : false

const icecream = 300
icecream >= 200 ? console.log("less than 200") : console.log("more than 200");
icecream <= 200 ? console.log("less than 200") : console.log("more than 200");