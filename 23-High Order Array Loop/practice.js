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




















































































