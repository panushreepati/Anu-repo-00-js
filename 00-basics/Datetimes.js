let myDate = new Date()
//console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.getTimezoneOffset());
//console.log(myDate.getHours());
//console.log(myDate.getMonth());
//console.log(myDate.setHours());
//console.log(myDate.setMonth());

//let mycreatedDate = new Date(2024,0,24);
//let mycreatedDate = new Date(2024,0,24,4,6)
//let myCreatedDate = new Date("2025-01-15")
let myCreatedDate = new Date("01-15-2025")

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime());
//console.log(Date.now());
//console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

//`${newDate.geDay()} and the time`

newDate.toLocaleString('default',{
     weekday: "long"
})