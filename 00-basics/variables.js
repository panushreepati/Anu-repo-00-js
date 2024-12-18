const accountId = 20032003
let accountEmail = "anu2003@gmail.com"
var accountPassword = "123123"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // not allowed

accountEmail = "anushree21@gmail.com"
accountPassword = "122322"
accountCity = "chenai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
