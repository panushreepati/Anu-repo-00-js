const user = {
    username: "anushree",
    price: 888,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "code"
// user.welcomeMessage()

//console.log(this); // empty parathensiss output{}

// function biscuit(){
//     let username = "anushree"
//     console.log(this.username);
// }

// biscuit()

const biscuit = () => {
    let username = "anushree"
    console.log(this)
    
}

//biscuit()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2


//console.log(addTwo(4,5))

//  const addTwo = (num1, num2) => (num1 + num2)

 //const addTwo = (num1, num2) => ({username: "anushree"})

 console.log(addTwo(4,5))

