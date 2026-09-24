// #Practice Examples --->


// --------------------------->
// 🟢 Level 1 — Basic Logic


// Q1 > Print Numbers
// Print all numbers from 1 to 50 using a for loop.
// Sol : 
// for(let i=0; i<=50; i++){
//     console.log('Value of i is :', i);
// }


// Q2 > Even Numbers
// Print all even numbers between 1 and 100.
// Sol : 
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log(`Even Numbers Are : ${i}`);
//     }
// }


// Q3 > Sum of Numbers
// Calculate the sum of all numbers from 1 to 100.
// Sol : 
// let sum = 0;

// for(let i=0 ; i<=100 ; i++){
//     sum = sum + i;
//     console.log("Total is", sum);
// }



// Q4 > Multiplication Table
// Take a number:
// [ let num = 7; ]
// Print its multiplication table from 1 to 10.
// Sol : 
// let num = Number(prompt('If you wants any multiply table of any number [ Type That Number Here ] '))

// for (let i = 1; i <= 10; i++) {
//     console.log(num + "*" + i + "=" + num * i);
// }



// Q5 > Count Multiples
// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
// Sol :
// let count = 0;

// for(let i=1; i<=100 ; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         count++
//         console.log("Num Values are :", i);
        
//     }
// }

// console.log("Values Are :", count);





// ---------------------------------->
// 🟡 Level 2 — Problem Solving


// Q1 > Sum of Even and Odd Numbers
// From 1 to 100, calculate separately:
// Sum of even numbers
// Sum of odd numbers
// Sol :
// let evenNumber = 0;
// let oddNumber = 0;

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//         evenNumber = evenNumber + i;       
//     } else{
//         oddNumber= oddNumber + i;
//     }
// }

// console.log("Even Numbers :", evenNumber);
// console.log("Odd Numbers :", oddNumber);



// Q2 > Find the Largest Number
// Given:
// let numbers = [12, 45, 7, 89, 23, 67, 34];
// Use a for loop to find the largest number without using Math.max().
// Sol :
// let numbers = [12, 45, 7, 89, 23, 67, 34];
// let largest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > largest){
//         largest = numbers[i];
//     }
// }

// console.log("Largest Number is :", largest);



// Q3 > Find the Smallest Number
// Given:
// let numbers = [34, 12, 56, 8, 91, 23, 5];
// Find the smallest number using a for loop.
// Sol :
// let numbers = [34, 12, 56, 8, 91, 23, 5];
// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < smallest){
//         smallest = numbers[i];
//     }
// }

// console.log("Smallest Value is :", smallest);



// Q4 > Count Positive, Negative and Zero
// let numbers = [10, -5, 0, 7, -2, 0, 15, -8];
// Count how many numbers are:
// Positive
// Negative
// Zero
// Sol :
// let numbers = [10, -5, 0, 7, -2, 0, 15, -8];

// let positiveNum = 0;
// let negativeNum = 0;
// let zeroNum = 0;

// for (let i = 0; i < numbers.length; i++) {
    
//     if(numbers[i] > 0){
//         positiveNum++;
//     } else if(numbers[i] < 0){
//         negativeNum++;
//     } else{
//         zeroNum++;
//     }
    
// }

// console.log("Positive Numbers are :", positiveNum);
// console.log("Negative Numbers are :", negativeNum);
// console.log("Zero Numbers are :", zeroNum);






// ----------------------------------------------------------------------------->
// ----------------------------------------------------------------------------->
// ----------------------------------------------------------------------------->


// FOR LOOP PRACTICE START HERE :---------------------------->


// 🟢 Level 1 — Basic Foundation


// Example 1 : Print numbers from 1 to 10.
// sol :
// for (let i = 0; i <= 10; i++) {
//     console.log("Value os i is :", i);
// }


// Example 2 : Print numbers from 10 to 1.
// sol :
// for (let i = 10; i >= 1; i--) {
//     console.log("Reverse Value of i is :", i);
// }


// Example 3 : Print all even numbers from 1 to 50
// sol :
// for (let i = 0; i <= 50; i++) {
//     if ( i % 2 === 0 ){
//         console.log(" Even Numbers Are :", i);
//     }
// }


// Example 4 : Print all odd numbers from 1 to 50
// sol :
// for (let i = 0; i <= 50; i++) {
//     if(i % 2 !== 0){
//         console.log("Odd Numbers Are :", i);
//     }
// }


// Example 5 : Print multiples of 5 from 1 to 100
// sol :
// for (let i = 0; i <= 100; i++) {
//     if(i % 5 === 0){
//         console.log("Multiples of 5 Are :", i);
//     }
// }


// Example 6 : Print the square of numbers from 1 to 10.
// sol :
// for (let i = 0; i <= 10 ; i++) {
//     let squareOutput = i * i;
//     console.log("Square Outputs Are :", squareOutput);
// }


// Example 7 : Print cube of numbers from 1 to 10
// sol :
// for (let i = 0; i <= 10; i++) {
//     console.log("Cube Values Are :", i * i * i);
// }


// Example 8 : Sum of numbers from 1 to 100
// sol :
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log("Sum is :", sum);


// Example 9 : Sum of even numbers from 1 to 100
// sol :
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log("Total Sum is :", sum);


// Example 10 : Sum of even numbers from 1 to 100
// sol :
// const number = Number(prompt("If you want the factorial of any number please type that number here :"))
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
// }

// console.log(`Factorial of ${number} are :`, factorial);




// 🟡 Level 2 — Logic Building


// Example 1 : Count how many even numbers exist between 1 and 100.
// sol :
// let evenNum = 0;

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//         evenNum++;
//     }
// }

// console.log("Total Count Of Even Numbers Are :", evenNum);


// Example 2 : Count how many numbers between 1 and 100 are divisible by both 3 and 5.
// sol :
// let countDivisible = 0;

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         countDivisible++;
//     }
// }

// console.log("Total Count is :", countDivisible);



// Example 3 : Print the multiplication table of any number.
// sol :
// const userNum = Number(prompt("If you want the multiple of any number typed here :"));
// for (let i = 1; i <= 10; i++) {
//     console.log(userNum + '*' + i + "=" + userNum*i);
// }


// Example 4 : Find the largest number between 10 given numbers.
// sol :
// const dataNum = [34, 56, 83, 23, 65];
// let largest = dataNum[0];

// for (let i = 0; i < dataNum.length; i++) {
//     if(dataNum[i] > largest){
//         largest = dataNum[i];
//     }
// }

// console.log("Largest Number is :", largest);


// Example 5 : Find the smallest number between 10 given numbers.
// sol :
// const dataNum = [34, 56, 83, 23, 65];
// let smallest = dataNum[0];

// for (let i = 0; i < dataNum.length; i++) {
//     if(dataNum[i] < smallest){
//         smallest = dataNum[i];
//     }
// }

// console.log("Smallest Value is :", smallest);


// Example 6 : Calculate the average of numbers stored in an array.
// sol :
// const marks = [34, 56, 83, 23, 65];
// let total = 0;

// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }

// const average = total / marks.length;
// console.log("Total Average is  :", average.toFixed(2));


// Example 7 : Count how many positive, negative and zero values are present in an array.
// sol :
// const identifyArray = [-67,30,92,-78,0,24,-19,0];
// let positiveVal = 0;
// let negativeVal = 0;
// let zeroVal = 0;

// for (let i = 0; i < identifyArray.length; i++) {
//     if(identifyArray[i] > 0){
//         positiveVal++;
//     } else if(identifyArray[i] < 0){
//         negativeVal++;
//     } else{
//         zeroVal++
//     }
// }

// console.log("Total Of Positive Values is :", positiveVal);
// console.log("Total Of Positive Values is :", negativeVal);
// console.log("Total Of Positive Values is :", zeroVal);




// ------------------------------------------------------->
// 🟠 Level 3 — Arrays ⭐ Very Important for Full Stack


// Example 1 : Print every element of an array.
// sol :
// let users = ["Ayush", "Rahul", "Aman", "Rohit"];

// for (let i = 0; i < users.length; i++) {
//     console.log("Name :", users[i]);
// };


// Example 2 : Find the largest number in an array.
// sol :
// const marks = [56,82,45,65,22,76];
// let largest = marks[0];

// for (let i = 0; i < marks.length; i++) {
//     if(marks[i] > largest){
//         largest = marks[i];
//     }
// }

// console.log("Largest Number is :", largest);


// Example 3 : Find the smallest number in an array.
// sol :
// const marks = [56,82,45,65,22,76];
// let smallest = marks[0];

// for (let i = 0; i < marks.length; i++) {
//     if(marks[i] < smallest){
//         smallest = marks[i];
//     }
// }

// console.log("Smallest Value is :", smallest);


// Example 4 : Calculate the total price of all products.
// sol :
// let prices = [499, 799, 299, 999, 599];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//     total = total + prices[i];
// }

// console.log("Total is :", total);


// Example 5 : Find the average price of products.
// sol :
// let prices = [499, 799, 299, 999, 599];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//     total = total + prices[i];
// }

// let avgPrize = total / prices.length;
// console.log("Average :", avgPrize);


// Example 6 : Count how many products cost more than ₹500.
// sol :
// let prices = [499, 799, 299, 999, 599];
// let expensiveCount = 0;

// for (let i = 0; i < prices.length; i++) {
//     if(prices[i] > 500){
//         expensiveCount++
//     }
// }

// console.log("Expensive Count is :", expensiveCount);


// Example 7 : Create a new array containing only even numbers.
// sol :
// let price = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// for (let i = 0; i < price.length; i++) {
//     if(price[i] % 2 === 0){
//         console.log("Even Numbers are :", price[i]);
//     }
// }

// let price = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// let evenNum = [];

// for (let i = 0; i < price.length; i++) {
//     if(price[i] % 2 === 0){
//         evenNum.push(price[i])
//     }
// }

// console.log(evenNum);



// Example 8 : Create a new array containing only odd numbers.
// sol :
// let price = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// for (let i = 0; i < price.length; i++) {
//     if(price[i] % 2 !== 0){
//         console.log("Even Numbers Are :", price[i]);
//     }
// }


// let price = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// let oddNum = [];

// for (let i = 0; i < price.length; i++) {
//     if(price[i] % 2 !== 0){
//         oddNum.push(price[i])
//     }
// }

// console.log(oddNum);


// Example 9 : Search for a specific user inside an array.
// sol :
// const studentNames = ["Rahul", 'Shivam', 'Gourav', 'Shiwali', 'Vinod', "Krishna", 'Megha'];

// for (let i = 0; i < studentNames.length; i++) {
//     if(studentNames[i].includes("Shiwali")){
//         console.log("Yes Shiwali is available  on this array");
//     }
// }


// const studentNames = ["Rahul", 'Shivam', 'Gourav', 'Shiwali', 'Vinod', "Krishna", 'Megha'];

// let searchUser = "Krishna";
// let found = false;

// for (let i = 0; i < studentNames.length; i++) {
//     if(studentNames[i] === searchUser){
//         found = true;
//         break;
//     }
// }

// const output = found ? 'User Found' : 'User Not Found';
// console.log("Output is :", output);


// Example 10 : Count how many times a particular value occurs in an array.
// Find how many times 10 appears.
// sol :
// let numbers = [10, 20, 10, 30, 10, 40];

// let target = 10;
// let repeatValue = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === target){
//         repeatValue++
//     }
// }

// console.log(` ${target} is repeat ${repeatValue} time.`);


// ------------------------------------------------------->
// 🔵 Level 4 — Strings 👁️


// Example 1 : Print every character of a string.
// sol :
// let userName = "Ayush";

// for (let i = 0; i < userName.length; i++) {
//     console.log("All Characters are :", userName[i]);
// }


// Example 2 : Count the number of characters in a string.
// sol :
// const fullName = "AyushKumar";
// let characterCount = 0;

// for (let i = 0; i < fullName.length; i++) {
//     characterCount++;
// }

// console.log("Total Count of character is :", characterCount);










































