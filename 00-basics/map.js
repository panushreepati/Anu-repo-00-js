//  const coding = ["js","ruby","java","python","cpp"]


//   const value = coding.forEach( (item) => {
//      console.log(item);
//    return item;
//  })

// console.log(value);

  const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter( (num) => num > 4 )
//  console.log(newNums);


//  const newNums = myNums.filter( (num) => { 
//     num > 4
//  } )

//  console.log(newNums);


//  const newNums = myNums.filter( (num) => { 
//  return num > 4
//  } )

//  console.log(newNums);

//  const  newNums = [] 

//  myNums.forEach( (num) => { 
//     if (num > 4) {
//        newNums.push(num)
//     }
//  })


//  console.log(newNums);


const books = [
   {title: 'Book One',genre: 'non fiction',publish:1999 , edition: 2025},
   {title: 'Book Two',genre: 'Geography',publish: 2009, edition: 2024},
   {title: 'Book Three',genre: 'Geography',publish: 2005, edition: 2023},
   {title: 'Book Four',genre: 'Geography',publish: 1991,edition: 2022},
   {title: 'Book Five',genre: 'non fiction',publish: 1980,edition: 2021},
   {title: 'Book Six',genre: 'non fiction',publish: 1985,edition: 2020},
   {title: 'Book Seven',genre: 'non fiction',publish: 1941,edition: 2019},
   {title: 'Book Eight',genre: 'Fiction',publish: 1995,edition: 2018},
   {title: 'Book Nine',genre: 'Fiction',publish: 1971,edition: 2017},
   {title: 'Book Ten',genre: 'Fiction',publish: 1951,edition: 2016},
   {title: 'Book Eleven',genre: 'Biology',publish: 1956,edition: 2015},
   {title: 'Book Twelve',genre: 'Biology',publish: 1992,edition: 2014},
   {title: 'Book Thirteen',genre: 'Biology',publish: 1981,edition: 2013},
   {title: 'Book Fourteen',genre: 'Biology',publish: 1989,edition: 2012},
   {title: 'Book Fifteen',genre: 'Fiction',publish: 1988,edition: 2011},
   {title: 'Book Sixteen',genre: 'History',publish: 1982,edition: 2010},
   {title: 'Book Seventeen',genre: 'History',publish: 1983,edition: 2009},
   {title: 'Book Eighteen',genre: 'non fiction',publish: 1986,edition: 2008},
];

  // let userBooks = books.filter(  (bk) => bk.genre === 'Biology')

//    userBooks = books.filter(  (bk) => {return bk.publish <=2000})
//  console.log(userBooks);
//  let userBooks = books.filter(  (bk) => bk.genre === 'Biology')



 userBooks = books.filter(  (bk) => {
   return bk.publish >=1900 && bk.genre === "History"
 })
  console.log(userBooks);

