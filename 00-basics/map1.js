const MyNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = MyNums.map( (num) => num + 10) // when open scope {},return is required

const newNums = MyNums
              .map((num) => num * 10)
              .map( (num) => num + 1)
              .filter( (num) => num >= 60)

console.log(newNums);