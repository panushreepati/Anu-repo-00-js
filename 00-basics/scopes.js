let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ",a);
}


console.log(a);