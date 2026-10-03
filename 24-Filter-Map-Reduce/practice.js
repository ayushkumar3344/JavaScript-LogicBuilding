// Problem Solving Tasks ---->

// 🟢 Beginner — 1–15

// Q1 : Given an array of numbers, use filter() to return only the even numbers.
// Sol :
// const myArray = [10, 15, 20, 25, 30, 35];

// const result = myArray.filter((num) => {
//     return num % 2 === 0;
// })

// console.log(result);


// Q2 : Use filter() to return only numbers greater than 50.
// Sol :
// const myNumbers = [56,77,22,45,86,34,95];

// const output = myNumbers.filter((num) => {
//     return num >= 50;
// })

// console.log("Output is :", output);


// Q3 : Use filter() to return only positive numbers from an array.
// Sol :
// const myNumbers = [56,77,-22,45,-86,34,-95];

// const output = myNumbers.filter((num) => {
//     return num > 0 
// })

// console.log(output);


// Q4 : Given an array of names, use filter() to return names having more than 5 characters.
// Sol :
// const names = ["Ayush", "Shva", "Goya", "Ravinder", "RaviKaran", "Shiwali"];

// const output = names.filter((user) => {
//     return user.length > 5;
// })

// console.log("Output is :", output);


// Q5 : Use filter() to return numbers between 10 and 50.
// Sol :
// const myNumbers = [5, 10, 15, 25, 50, 60, 75];

// const output = myNumbers.filter((num) => {
//     return num >= 10 && num <= 50
// })

// console.log("Output is :", output);


// Q6 : Given an array of numbers, use map() to create a new array containing their squares.
// // Sol :
// const myNumbers = [5, 10, 15, 25, 50, 60, 75];

// const newArray = myNumbers.map((num) => {
//     return num * num;
// })

// console.log("New Array is :", newArray);


// Q7 : Use map() to double every number in an array.
// // Sol :
// const myNumbers = [5, 10, 15, 25, 50, 60, 75];

// const newArray = myNumbers.map((num) => {
//     return num * 2;
// })

// console.log("New Array is :", newArray);


// Q8 : Given an array of names, use map() to convert every name to uppercase.
// // Sol :
// const names = ["rahul", "sourabh", "gagan", "ravinder", "mohit", "karan", "vinod"];

// const newArray = names.map((user) => {
//     return user.toUpperCase();
// })

// console.log("New Array is :", newArray);


// Q9 : Use map() to add 10 to every number.
// // Sol :
// const myNumbers = [5, 10, 15, 25, 50, 60, 75];

// const output = myNumbers.map((num) => {
//     return num + 10;
// })

// console.log("New Array is :", output);


// Q10 : Given an array of prices, use map() to add 18% GST to every price.
// // Sol :
// const prices = [3000,5830,2330,5848,3849,2994];
// let discount = 18;

// const finalprize = prices.map((amount) => {
//     return amount + (amount * 18 / 100);
// })

// console.log("Final Prizea are :", finalprize);


// Q11 : Use reduce() to find the sum of all numbers in an array.
// // Sol :
// const myArray = [0,1,2,3,4,5,6,7,8,9,10];

// const output = myArray.reduce((acc,curr) => {
//     return acc + curr;
// },0)

// console.log("Output is :", output);


// Q12 : Use reduce() to find the product of all numbers.
// // Sol :
// const myArray = [2,3,4,5,6,7,8,9,10];

// const output = myArray.reduce((acc,curr) => { 
//     console.log(`Value of ${acc} or current num is ${curr}`);
//     return acc * curr
// }, 2)

// console.log(output)


// Q13 : Use reduce() to find the largest number in an array.
// // Sol :
// const numbers = [23,76,93,64,84,33,56];

// const output = numbers.reduce((acc,currentVal) => {
//     if(currentVal > acc){
//         return currentVal;
//     }
//     return acc;
// })

// console.log(`Largest Number is : ${output}`);


// Q14 : Use reduce() to find the smallest number in an array.
// // Sol :
// const numbers = [23,76,93,64,84,33,56];

// const output = numbers.reduce((total,num) => {
//     if(num < total){
//         return num;
//     }
//     return total;
// })

// console.log("Smallest Value is :", output);


// Q15 : Use reduce() to count how many numbers are even.
// // Sol :
// const myArray = [23,76,93,64,84,33,56];

// const output = myArray.reduce((acc,curr) => {
//     if(curr % 2 === 0){
//         return acc + 1;
//     }
//     return acc;
// }, 0)

// console.log(output);





// 🟡 Intermediate — 16–30


// Q16 : Given [10, 15, 20, 25, 30, 35], use filter() to get numbers divisible by 5.
// // Sol :
// const myNum = [10, 15, 20, 25, 30, 35];

// const output = myNum.filter((num) => {
//     return num % 5 === 0;
// })

// console.log("Numbers are that devide by 5 are :", output);


// Q17 : Given an array of names, filter names that start with "A".
// // Sol :
// const names = ["Rahul", "Abhiiyush" , "Ayush", "Gourav", "Aryan", "Shiwali"];

// const output = names.filter((user) => {
//     return user.startsWith('A');
// })

// console.log("All Names Start With A are :", output);


// Q18 : Given an array of strings, filter strings that contain the letter "a".
// // Sol :
// const names = ["Rahul", "Jyoti" , "Khushi", "Gourav", "Aryan", "Shiwali"];

// const output = names.filter((user) => {
//     return user.includes('a');
// })

// console.log("The array of Names that Includes a Are :", output);


// Q19 : Given an array of numbers, filter numbers that are odd and greater than 20.
// // Sol :
// const myNumbers = [23,76,93,64,84,33,56];

// const output = myNumbers.filter((num) => {
//     return num % 2 !== 0 && num > 20;
// })

// console.log("Ouput Array Values is :", output);


// Q20 : Given an array of ages, filter people who are 18 or older.
// // Sol :
// const ages = [45,23,11,69,6,66,17,63];

// const output = ages.filter((age) => {
//     return age >= 18 ;
// })

// console.log("Ouput is :", output);


// Q21 : Given an array of numbers, use map() to convert every number into its cube
// // Sol :
// const numbers = [45,24,83,58,38,54,84,97];

// const output = numbers.map((num) => {
//     return num * num * num;
// })

// console.log("New Arrayy is :", output);


// Q22 : Given an array of names, use map() to create "Hello, Name" for each name.
// // Sol :
// const names = ['Rahul', 'Sourabh', 'Goutam', 'Jaggu', 'Vinod', 'Sahil', 'Krishna'];

// const output = names.map((user) => {
//     return console.log("Hello,", user);
    
// })

// console.log(output);


// Q23 : Given an array of prices, use map() to apply a 20% discount.
// // Sol :
// const prices = [499,300,550,246,600,785];

// const output = prices.map((amount) => {
//     return amount - (amount * 20 / 100);
// })

// console.log("New array with Add 20% Discount Coupon :", output);


// Q24 : Given an array of numbers, use map() to convert each number into an object 
// like { number: 5, square: 25 }.
// // Sol :
// const numbers = [45,83,69,93,54,33,70];

// const output = numbers.map((num,index) => ({
//     number : num,
//     square : num * num,
// }))

// console.log(output);


// Q26 : Given an array of numbers, use reduce() to calculate their average.
// // Sol :
// const numbers = [44,87,35,93,64,63,59];

// const total = numbers.reduce((acc, curr) => {
//     return acc + curr;
// })

// let average = total / numbers.length;
// console.log("Average is :", average.toFixed(2));



// ---------> This Example Is Performed by My Own Login <--------
// const myNumbers = [56,73,93,44,20,54];

// let result = myNumbers.reduce(findMax);

// console.log("Result is :", result);

// function findMax(accumulator ,element){
//     return Math.max(accumulator ,element)
// }



// --------------------------------------------------->

// 🔵 Arrays of Objects — 31–40

// Use This Data For All Questions ---------------------------------->
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];



// Q1 : Use filter() to get users whose age is 18 or above.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// const response = users.filter( (data) => {
//     return data.age >= 18;
// })

// console.log("New Data Array is :", response);


// Q2 : Use filter() to get users who live in Chandigarh.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// const response = users.filter( (data) => {
//     return data.city === "Chandigarh";
// })

// console.log("There People record they live in chandigarh Right Now :", response);


// Q3 : Use filter() to get users whose salary is greater than ₹30,000.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// const result = users.filter((data) => {
//     return data.salary > 30000;
// })

// console.log("Record Find :", result);


// Q4 : Use map() to create an array containing only the names.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];


// const response = users.map((data) => {
//     return data.name
// })

// console.log("New Array is :", response);


// Q5 : Use map() to create an array containing only the salaries.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// const response = users.map((data) => {
//     return data.salary;
// });

// console.log("Salaries are :", response);


// Q6 : Use map() to create objects containing only name and city.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// const response = users.map((user) => {
//     return {
//         name : user.name,
//         city : user.city,
//     }
// })

// console.log(response);


// --------------> Chain Logic Implementation <-------------------

// Q1 : Use filter() + map() to get the names of users aged 18 or above.
// // Sol :
// const users = [
//     { name: "Ayush", age: 22, city: "Chandigarh", salary: 30000 },
//     { name: "Rahul", age: 17, city: "Delhi", salary: 20000 },
//     { name: "Priya", age: 25, city: "Mumbai", salary: 45000 },
//     { name: "Neha", age: 19, city: "Chandigarh", salary: 35000 },
//     { name: "Aman", age: 16, city: "Delhi", salary: 15000 }
// ];

// let total = 0;

// const result = users
// .filter((user) => {
//     return user.age >= 18;
// })
// .map((user) => {
//     return user.name
// })

// console.log("Total Salary is :", result);



// --------------------------------> Final Tasks 
// 🔴 Challenging — 41–50

// This Is the array format syntax of these all Problem Solving Questions --->
// -------------------------------------------------------------------------->
// const products = [
//     { name: "Laptop", price: 60000, category: "Electronics", stock: 5 },
//     { name: "Phone", price: 30000, category: "Electronics", stock: 10 },
//     { name: "Shirt", price: 1500, category: "Clothing", stock: 20 },
//     { name: "Shoes", price: 3000, category: "Clothing", stock: 0 },
//     { name: "Watch", price: 5000, category: "Accessories", stock: 8 }
// ];



// Q1 : Use filter() to get products that are in stock.
// // Sol :
// const products = [
//     { name: "Laptop", price: 60000, category: "Electronics", stock: 5 },
//     { name: "Phone", price: 30000, category: "Electronics", stock: 10 },
//     { name: "Shirt", price: 1500, category: "Clothing", stock: 20 },
//     { name: "Shoes", price: 3000, category: "Clothing", stock: 0 },
//     { name: "Watch", price: 5000, category: "Accessories", stock: 8 }
// ];


// const result = products.filter((item) => {
//     return item.stock > 0;
// })

// console.log("These Stocks Are :", result);


// Q2 : Use filter() to get products costing more than ₹5,000.
// // Sol :
// const products = [
//     { name: "Laptop", price: 60000, category: "Electronics", stock: 5 },
//     { name: "Phone", price: 30000, category: "Electronics", stock: 10 },
//     { name: "Shirt", price: 1500, category: "Clothing", stock: 20 },
//     { name: "Shoes", price: 3000, category: "Clothing", stock: 0 },
//     { name: "Watch", price: 5000, category: "Accessories", stock: 8 }
// ];

// const result = products.filter((item) => {
//     return item.price > 5000;
// })

// console.log("Items That Cost More Than 5000 Are :", result);


// Q3 : Use filter() + map() to get the names of all Electronics products.
// // Sol :
// const products = [
//     { name: "Laptop", price: 60000, category: "Electronics", stock: 5 },
//     { name: "Phone", price: 30000, category: "Electronics", stock: 10 },
//     { name: "Shirt", price: 1500, category: "Clothing", stock: 20 },
//     { name: "Shoes", price: 3000, category: "Clothing", stock: 0 },
//     { name: "Watch", price: 5000, category: "Accessories", stock: 8 }
// ];

// const result = products
// .filter((item) => {
//     return item.category === 'Electronics';
// })
// .map((item) => {
//     return item.name;
// })

// console.log(result);







































































































































