// #Practice Work --->


// First Learning Step --->
// const userNames = ["Haris", "Prabhjot", "Sourabh", "Jasmin", "Khushboo"];

// for (const name of userNames) {
//     if(name.includes("Sourabh")){
//         console.log("Sourabh is Available");
//         continue;
//     }
//     console.log("User Name is :-", name);
// }



// Second Learning Steps ---> For Of Loop --> Array (Map)
// let student = new Map();

// student.set("userName","Ayush Kumar");
// student.set("emailID","kumarayush8117@gmail.com");
// student.set("course","Masters In Computer Applications");
// student.set("isPass","true");

// for (const [key,values] of student) {
//     console.log(key, ":-", values);
// }



// Third Learning Steps ---> For In Loop ---> Objects
// const address = {
//     state : "Himachal Pradesh",
//     pincode : 176076,
//     phNo : 8091077739,
//     helpLineEmail : "villa3344@gmail.com",
// }

// for (const info in address) {
//     console.log(`Keys are :- ${info} & Values are :- ${address[info]}`);
// }


// #ForEach Loop Revision --------> Array
// const userName = ["Ayush", "Shivam", "Rishika", "Shiwali", "Naaz", "Neha", "Pakkavi", "Surbhi", "Gulshan", "Ravi"];

// userName.forEach((name) => {
//     console.log("Name is :-", name);
// })

// ForEach Loop Revision -----------> Object

// const studentInfo = [
//     {
//         fullName : "Ayush Kumar",
//         age : 22,
//         course : "Mca",
//         state : "Himachal Pradesh",
//     },
//     {
//         fullName : "Shivam Dube",
//         age : 20,
//         course : "BBA",
//         state : "Uttra Khand",
//     },
//     {
//         fullName : "Amit Yadav",
//         age : 27,
//         course : "Archi.t",
//         state : "Himachal Pradesh",
//     },
//     {
//         fullName : "Vinod Gulshan",
//         age : 25,
//         course : "BA.LLB",
//         state : "Andhra Pradesh",
//     },
// ]

// studentInfo.forEach((data) => {
//     console.log(`Student Names is :- ${data.fullName} or its age are ${data.age} and he study in ${data.course} in ${data.state} `);
// })



// -------------------------------------------->
// ------- #Practice Example Start Here :------>



// 🟢 Part 1 — for...of Loop


// Q1 : Print Array Elements
// Given an array of fruits, use for...of to print each fruit.
// Sol : 
// const fruits = ['Apple','Mango','Bnana','Litchi','Pineapple','Graphes'];

// for(let item of fruits){
//     console.log("Fruits Name Are :", item);
// }


// Q2 : Print Numbers
// Given [10, 20, 30, 40, 50], print every number using for...of.
// Sol : 
// let count = [10, 20, 30, 40, 50];

// for(let num of count){
//     console.log(`Numbers are : ${num}`);
// }


// Q3 : Calculate Sum
// Use for...of to calculate the sum of all numbers in an array.
// Sol : 
// let count = [10, 20, 30, 40, 50];
// let sum = 0;

// for(let num of count){
//     sum = sum + num;
// }

// console.log("Total Sum is :", sum);


// Q4 : Find Even Numbers
// Given an array of numbers, print only the even numbers.
// Sol : 
// const marks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for (const num of marks) {
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }


// Q5 : Find Odd Numbers
// Given an array of numbers, print only the odd numbers.
// Sol : 
// const marks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for (const num of marks) {
//     if(num % 2 !== 0){
//         console.log(num);
//     }
// }


// Q6 : Count Names
// Given an array of names, count how many names are present.
// Sol : 
// const names = ['Rahul','Ayush','Shivam','Shiwali','Megha','Shiwangi'];
// let count = 0;

// for (const user of names) {
//     count++
// }

// console.log("Total Length is :", count);


// Q7 : Find the Largest Number
// Use for...of to find the largest number in an array.
// Sol : 
// const marks = [45,35,76,85,34,56];
// let largestNum = marks[0];

// for(let num of marks){
//     // if(marks[num] > largestNum){
//     //     largestNum = marks[num];
//     // }
//     if(num > largestNum){
//         largestNum = num;
//     }
// }

// console.log(`Largest Number is : ${largestNum}`);



// Q8 : Find the Smallest Number
// Use for...of to find the smallest number in an array.
// Sol : 
// const marks = [45,35,76,85,34,56];
// let smallestVal = marks[0];

// for(let num of marks){
//     if(num < smallestVal){
//         smallestVal = num;
//     }
// }

// console.log("Smallest Value is :", smallestVal);



// Q9 : Print String Characters
// Given "JavaScript", print each character separately using for...of.
// Sol : 
// const language = "JavaScript";

// for(let char of language){
//     console.log(`Char are :- ${char}`);
// }



// Q10 : Count Vowels
// Given a string, use for...of to count how many vowels it contains.
// Sol : 
// const language = "JavaScript".toLowerCase();
// let vowels = 0;

// for(let char of language){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         vowels++;
//     }
// }

// console.log(`Total No. of Vowel present in your string are : ${vowels}`);



// ------------------------------->
// --------------------------->
// 🟡 Part 2 — for...in Loop



// Q1 : Print Object Keys
// Given:
// const user = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh"
// };
// Print all keys using for...in.
// Sol : 
// const user = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh"
// };

// for(let info in user){
//     console.log("Keys of Object are :-", info);
// }


// Q2 : Print Object Values
// Use for...in to print all values from the same object.
// Sol : 
// const user = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh"
// };

// for(let info in user){
//     console.log("Values are :", user[info]);
// }


// Q3 : Print Key + Value
// Print output like:
// name: Ayush
// age: 22
// city: Chandigarh
// Sol : 
// const studentID = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh"
// };

// for(let info in studentID){
//     console.log(`${info} : ${studentID[info]}`);
// }


// Q4 : Count Object Properties
// Count how many properties an object contains using for...in.
// Sol : 
// const studentID = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh"
// };

// let countLength = 0;

// for(let info in studentID){
//     countLength++;
// }

// console.log("Total Property length of Object is : ", countLength);


// Q5 : Find a Specific Property
// Check whether an object contains a "salary" property.
// Sol : 
// const user = {
//     fullName : "Vishal Mishra",
//     jobPosition : "Software Developer",
//     location : "Hyderabaad Pune",
//     salary : 45000,
// }

// let found = false;

// for(let info in user){
//     if(info === "salary"){
//         found = true;
//     } else {
//         found = false;
//     }
// }

// console.log(found ? "Property Found" : "Property Not Found");


// Q6 : Calculate Total Marks
// Given:
// const marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 85
// };
// Calculate the total marks using for...in.
// Sol : 
// const marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 85
// };

// let totalMarks = 0;

// for(let val in marks){
//     totalMarks = totalMarks + marks[val];
// }

// console.log(`Total Marks is : ${totalMarks}`);


// Q7 : Calculate Average Marks
// Using the same object, calculate the average marks.
// Sol : 
// const marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 85
// };

// let average = 0;

// for(let val in marks){
//     average = average + marks[val] / 100;
// }

// console.log(`Average is : ${average.toFixed(2)}`);


// Q8 : Find Highest Marks
// Find which subject has the highest marks.
// Sol : 
// const marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 85
// };

// let highestMarks = marks.math;

// for(let val in marks){
//     if(marks[val] > highestMarks){
//         highestMarks = marks[val];
//     }
// }

// console.log("Highest Marks is :", highestMarks);



// Q9 : Find Lowest Marks
// Find which subject has the lowest marks.
// Sol : 
// const marks = {
//     math: 80,
//     english: 75,
//     science: 90,
//     computer: 85
// };

// let smallestMarks = marks.math;

// for(let val in marks){
//     if(marks[val] < smallestMarks){
//         smallestMarks = marks[val];
//     }
// }

// console.log("Highest Marks is :", smallestMarks);



// Q10 : Filter Object Properties
// Given:
// const user = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh",
//     salary: 30000
// };
// Print only properties whose values are numbers.
// Sol : 
// const user = {
//     name: "Ayush",
//     age: 22,
//     city: "Chandigarh",
//     salary: 30000
// };

// for(let data in user){
//     if(typeof user[data] === "number"){
//         console.log(data + ":" + user[data]);
//     }
// }







// ------------------------> 
// --------------------->
// 🔵 21–30: forEach()



// Q1 : Print Every Element
// Given an array of names, print every name using forEach().
// Sol :
// const names = ["Shivam","Jyoti","Goutam","Rahul","Aman","Gourav","Sakshi"];

// names.forEach((data) => {
//     console.log(data);
// })


// Q2 : Print Numbers with Index
// Given:
// [10, 20, 30, 40, 50]
// Sol :
// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach((num,index) => {
//     console.log(`Number is ${num} and the Index of that number is ${index}`);
// })


// Q3 : Calculate Sum
// Use forEach() to calculate the sum of an array.
// Sol :
// const numbers = [10, 20, 30, 40, 50];
// let totalSum = 0;
// numbers.forEach((num) => {
//     totalSum = totalSum + num;
// })

// console.log("Total Sun is :", totalSum);


// Q4 : Print Even Numbers
// Use forEach() to print only even numbers.
// Sol :
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// numbers.forEach((num) => {
//     if(num % 2 === 0){
//         console.log("Even Numbers Are :", num);
//     }
// })


// Q5 : Print Numbers Greater Than 50
// Given an array of numbers, print numbers greater than 50.
// Sol :
// const recordData = [73,24,46,94,88,74,32,93];

// recordData.forEach((num) => {
//     if(num > 50){
//         console.log("Greater Than 50 :", num);
//     }
// })


// Q6 : Convert Prices with Discount
// Given:
// const prices = [100, 200, 300, 400];
// Use forEach() to calculate a 10% discounted price for each item.
// Sol :
// const prices = [100, 200, 300, 400];
// prices.forEach((item) => {
//     discount = item * 10 / 100;
//     finalPrize = item - discount;


//     console.log("Original Prize :", item);
//     console.log("Total Discount is :", discount);
//     console.log("Final Prize is :", finalPrize);
//     console.log("--------------------------------");
// })


// Q7 : Create a New Array
// Given:
// const numbers = [1, 2, 3, 4, 5];
// Use forEach() to create:
// Sol :
// const numbers = [1, 2, 3, 4, 5];
// let newArr = [];

// numbers.forEach((num) => {
//     newArr.push(num * 2)
// })

// console.log("New Array is ;", newArr);


// Q8 : Find the Longest Name
// Given:
// const names = ["Rahul", "Ayush", "Alexander", "John"];
// Use forEach() to find the longest name.
// Sol :
// const names = ["Rahul", "Ayush", "Alexander", "John"];
// let longestName = names[0].length;

// names.forEach((user) => {
//     if(user.length > longestName){
//         longestName = user;
//     }
// })

// console.log("Longest Name is :", longestName);


// Q9 : Product Cart Total ⭐
// Given:
// const cart = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2000 }
// ];
// Use forEach() to calculate the total cart price.
// Sol :
// const cart = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2000 }
// ];

// let totalPrize = 0;

// cart.forEach((data) => {
//     totalPrize = totalPrize + data.price;
// })

// console.log("Total Prize is :", totalPrize);


// Q10 : Student Result System 🔥
// Given:
// const students = [
//     { name: "Ayush", marks: 85 },
//     { name: "Rahul", marks: 42 },
//     { name: "Priya", marks: 76 },
//     { name: "Aman", marks: 33 }
// ];
// Use forEach() to print:
// Sol :
// const students = [
//     { name: "Ayush", marks: 85 },
//     { name: "Rahul", marks: 42 },
//     { name: "Priya", marks: 76 },
//     { name: "Aman", marks: 33 }
// ];

// students.forEach((data) => {
//     if(data.marks > 40){
//         console.log(`Name : ${data.name} and Marks ${data.marks} is Passed`);
//     } else {
//         console.log(`Name : ${data.name} and Marks ${data.marks} is Fail`); 
//     }
// })






















































































































































