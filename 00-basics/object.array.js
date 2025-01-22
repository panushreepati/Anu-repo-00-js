function calculateCartprice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartprice(2))
//console.log(calculateCartprice(200,400,500,600))

const user = {
    username: "Anu",
    price: 500,
}

function handleobject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)
handleobject({
    username: "kanha",
    price: 499,
})

const myNewArray = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));