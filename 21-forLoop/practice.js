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







