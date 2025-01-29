// function biscuit () {
//     console.log( 'DB CONNECTED');
// }

// biscuit()

(function biscuit () {
    console.log( 'DB CONNECTED'); // iife used because some times probles created in global pollution /variables
})();

( function aurcode () { 
    console.log(`DB CONNECTED TWO`);
})();

(  () => { 
    console.log('DB CONNECTED');
})();

 ( (name) => { 
    console.log(`DB CONNECTED TWO ${name}`);
 })('anushree')