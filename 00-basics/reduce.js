 const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator,currentval) {
//     console.log(`accumulator: ${accumulator}, currentval: ${currentval}`);
//     return accumulator + currentval
// }, 0)

// arroy functions

// const myTotal = myNums.reduce( (accumulator,currentval) => accumulator+currentval, 0)


// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "biscuit",
        price: 300
    },
    {
        itemName: "Tea",
        price: 300
    },
    {
        itemName: "chocolate",
        price: 1000
    },
    {
        itemName: "pen",
        price: 900
    },
    {
        itemName: "book",
        price: 400
    },
    {
        itemName: "highlighteer",
        price: 600
    }
    
]

const priceToPay = shoppingCart.reduce( (accumulative,item) => accumulative + item.price, 0)

console.log(priceToPay);