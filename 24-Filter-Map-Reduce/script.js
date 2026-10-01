// Learnig Concepts -->


// #Methods --->


// ---------------------------------->
// ------------------------------>
// ------------------------->
// 1> Filter Method


// --->
// const myNum = [0,1,2,3,4,5,6,7,8,9,10];

// const result = myNum.filter((num) => {
//     return num > 5;
    
// })

// console.log("Results are :" , result);



// ---->

// const books = [
//   {
//     id: 1,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     genre: "Fiction",
//     price: 299,
//     rating: 4.6,
//     pages: 208,
//     publishedYear: 1988,
//     available: true
//   },
//   {
//     id: 2,
//     title: "Atomic Habits",
//     author: "James Clear",
//     genre: "Self-Help",
//     price: 499,
//     rating: 4.8,
//     pages: 320,
//     publishedYear: 2018,
//     available: true
//   },
//   {
//     id: 3,
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     genre: "Finance",
//     price: 399,
//     rating: 4.5,
//     pages: 336,
//     publishedYear: 1997,
//     available: false
//   },
//   {
//     id: 4,
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     genre: "Finance",
//     price: 450,
//     rating: 4.7,
//     pages: 256,
//     publishedYear: 2020,
//     available: true
//   },
//   {
//     id: 5,
//     title: "Ikigai",
//     author: "Hector Garcia",
//     genre: "Self-Help",
//     price: 350,
//     rating: 4.4,
//     pages: 208,
//     publishedYear: 2016,
//     available: true
//   },
//   {
//     id: 6,
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//     price: 599,
//     rating: 4.9,
//     pages: 352,
//     publishedYear: 1997,
//     available: false
//   },
//   {
//     id: 7,
//     title: "Think and Grow Rich",
//     author: "Napoleon Hill",
//     genre: "Self-Help",
//     price: 299,
//     rating: 4.6,
//     pages: 238,
//     publishedYear: 1937,
//     available: true
//   },
//   {
//     id: 8,
//     title: "1984",
//     author: "George Orwell",
//     genre: "Dystopian",
//     price: 250,
//     rating: 4.7,
//     pages: 328,
//     publishedYear: 1949,
//     available: true
//   },
//   {
//     id: 9,
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     price: 450,
//     rating: 4.8,
//     pages: 310,
//     publishedYear: 1937,
//     available: true
//   },
//   {
//     id: 10,
//     title: "Deep Work",
//     author: "Cal Newport",
//     genre: "Productivity",
//     price: 399,
//     rating: 4.5,
//     pages: 304,
//     publishedYear: 2016,
//     available: false
//   }
// ];


// ---->
// const userBooks = books.filter((bk) => {
//     return bk.genre === "Finance";
// })

// console.log(userBooks);

// ----->
// const userBook = books.filter((bk) => {
//   return bk.publishedYear >= 2000
// })

// console.log(userBook);




// ---------------------------------->
// ------------------------------>
// ------------------------->
// 2> Map Method

// const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newOutput = myNumbers.map((num) => {
//   return num + 10;
// })

// Chaining
// const newNums = myNumbers
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num) => num >= 40)

// console.log(newNums);




// ---------------------------------->
// ------------------------------>
// ------------------------->
// 3> Reduce Method

// -->
// const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc,currVal) => {
//   console.log(`Acc value : ${acc} and currVal is : ${currVal}`);
//   return acc + currVal;
// }, 0)

// console.log(myTotal);


// -->
// const shoppingCart = [
//     {
//         id: 1,
//         name: "Nike Air Max",
//         category: "Shoes",
//         price: 4999,
//         quantity: 1
//     },
//     {
//         id: 2,
//         name: "Levi's T-Shirt",
//         category: "Clothing",
//         price: 1499,
//         quantity: 2
//     },
//     {
//         id: 3,
//         name: "Samsung Galaxy Buds",
//         category: "Electronics",
//         price: 7999,
//         quantity: 1
//     },
//     {
//         id: 4,
//         name: "Wildcraft Backpack",
//         category: "Bags",
//         price: 2299,
//         quantity: 1
//     },
//     {
//         id: 5,
//         name: "Casio Watch",
//         category: "Accessories",
//         price: 3499,
//         quantity: 1
//     }
// ];


// const totalBill = shoppingCart.reduce((acc,item) => {
//   return acc + item.price
// }, 0)

// console.log("Total Bill is :", totalBill);












































































