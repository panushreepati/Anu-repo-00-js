//singleton // uses alaways constructor
//object literals
//object.create // constructer method

const mySym = Symbol("key1")

const JsUser = {
     name: "Anu",
     "Full name": "Anushree Pati",
     [mySym]: "myKey1",
     age: 22,
     location: "Bhubaneswar",
     email: "panushree2024@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["monday","Tuesday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)


JsUser.email = "panushreechatgpt@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "panushreecode@gmail.com"
//console.log(JsUser)

JsUser.greeting = function(){
     console.log("Hello Js user");
 }
  

JsUser.greetingTwo = function(){
     console.log('Hello Js user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
