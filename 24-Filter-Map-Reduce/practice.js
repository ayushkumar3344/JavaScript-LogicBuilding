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




































































































































































































