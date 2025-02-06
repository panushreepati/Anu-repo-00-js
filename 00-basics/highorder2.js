const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    Swift: 'Swift by apple',
}  

// for (const key in myObject) {
//     console.log(myObject[key]);
// }


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
 
// for in loops
const programming = ["js","py","cpp","java","rb"]

for (const key in programming) {
    // console.log(programming[key]);
}
        



// for of loops
const map = new Map 
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('Gr',"Germany")
 
for (const key in map){
// console.log(map);

}
 

// for each loops

const coding = ["js","ruby","cpp","java","python"]

coding.forEach( function (item)  {
    // console.log(item);
} )


// arrow function

coding.forEach((item) => {
    // console.log(item);
} )

function printMe(item){
    console.log(item);
} 

// coding.forEach(printMe);

coding.forEach( (item, index,arr)=> { 
    // console.log(item,index,arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    
    },
    {
        languageName: "java",
        languageFileName: "java"
    
    },
    {
        languageName: "python",
        languageFileName: "py"
    
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    
    },
    
]

myCoding.forEach( (item) => {

    console.log(item.languageFileName);
} )

