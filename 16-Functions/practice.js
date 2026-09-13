// #Practice Work --->



// 🟢 Basic Function Tasks  ---> 


// Q1 : Greeting Function
// Create a function that takes a person's name as a parameter and prints:
// Hello, Ayush!
// Sol : 
// function person(name){
//     console.log(`Hello, ${name}`);
// }

// person(prompt('Enter Your Name'));


// Q2 : Add Two Numbers
// Create a function that accepts two numbers and returns their sum.
// Sol : 
// function sum(num1, num2){
//     return num1 + num2;
// }

// const output = sum(34, 67);
// console.log("Total is :", output);


// Q3 : Subtract Two Numbers
// Create a function that accepts two numbers and returns their difference.
// Sol :
// function sum(num1, num2){
//     return num1 - num2;
// }

// const output = sum(56, 76);
// console.log("Output is :", output);


// Q4 : Find Square
// Create a function that accepts a number and returns its square.
// Sol :
// function sum(getNum){
//     return getNum * 2
// }

// const output = sum(5);
// console.log("Output is :", output);


// Q5 : Check Even or Odd
// Create a function that accepts a number and returns whether it is even or odd.
// Sol :
// function count(num){
//     if(num % 2 === 0){
//         console.log(`Yes ${num} is Even Number`);
//     } else {
//         console.log(`${num} is Odd Number`);
//     }
// }

// console.log(count(2222));


// Q6 : Find Largest Number
// Create a function that accepts two numbers and returns the larger number.
// Sol :
// function sum(num1, num2){
//     if(num1 > num2){
//         console.log(`${num1} is Greater Number`);
//     } else{
//         console.log(`${num2} is Greater Number`);
//     }
// }

// const output = sum(498, 295);
// console.log("Output is :", output);


// Q7 : Calculate Age
// Create a function that accepts a birth year and calculates the person's current age.
// Sol :
// function ageFinder(birthYear){
//     const currentyear = new Date().getFullYear();
//     return currentyear - birthYear
// }

// const output = ageFinder(prompt('Enter Your Birth Year Here :'))
// console.log("Current Age is : ", output);





// #PRACTICE QUESTIONS >>>> 


// Q1> Greeting Function
// Create a function greetUser() that prints "Hello, JavaScript!".
// Solution : 
// function greetUser(){
//     console.log("Hello, JavaScript!!");
// }
// greetUser();


// Q2> Personalized Greeting
// Create a function that accepts a user's name and prints "Hello, Ayush!".
// Solution : 
// function user(name){
//     console.log("Hello", name);
// }
// user('Ayush')


// Q3> Add Two Numbers
// Create a function addNumbers(a, b) that returns the sum of two numbers.
// Solution :
// function addNumbers(a,b){
//     return a + b;
// }

// const output = addNumbers(34, 56);
// console.log("Output is :", output);


// Q4> Subtract Two Numbers
// Create a function subtract(a, b) that returns the difference between two numbers.
// Solution :
// function subtract(a, b){
//     return a - b;
// }

// const output = subtract(4690, 3945);
// console.log("Output is :", output);


// Q5> Square of a Number
// Create a function square(num) that returns the square of a number.
// Solution :
// function square(num){
//     return num * num;
// }

// const output = square(2);
// console.log("Output is :", output);


// Q6> Check Even or Odd
// Create a function checkEvenOdd(num) that returns "Even" if the number is even and "Odd" otherwise.
// Solution :
// function checkEvenOdd(num){
//     if(num % 2 === 0){
//         console.log(`${num} is even number`);
//     } else {
//         console.log(`${num} is odd number`);
//     }
// }
// checkEvenOdd(prompt('Enter Any Number Here :'))


// Q7> Find the Larger Number
// Create a function findMax(a, b) that returns the larger of the two numbers.
// Solution :
// function findMax(a, b, c, d ,e){
//     return Math.max(a,b,c,d,e)
// }
// const output = findMax(484, 284, 694, 938, 485);
// console.log("Output is :",output);


// Q8> Calculate Area of Rectangle
// Create a function rectangleArea(length, width) that returns the area of a rectangle.
// Solution :
// function rectangleArea(length, width){
//     return length * width;
// }
// const output = rectangleArea(455, 635);
// console.log("Output is :", output);


// Q9> Check Voting Eligibility
// Create a function checkVotingAge(age) that returns "Eligible" if age is 18 or above, otherwise "Not Eligible".
// Solution :
// function checkVotingAge(age){
//     if(age < 18){
//         console.log("Not Eligible for Voting");
//     } else {
//         console.log("You are Eligible");
//     }
// }

// checkVotingAge(72);




// 🟡 Intermediate Level ---> 


// Q1> Find the Largest of Three Numbers
// Create a function largestOfThree(a, b, c) that returns the largest number.
// Solution :
// function largestOfThree(a, b, c){
//     return Math.max(a,b,c)
// }
// const output = largestOfThree(34, 53, 29);
// console.log("Largest Number is :", output);


// Q2> Count Characters
// Create a function countCharacters(str) that returns the number of characters in a string.
// Solution :
// function countCharacters(str){
//     return str.length
// }
// const output = countCharacters("Ayush Kumar");
// console.log("Total Character are : ", output);


// Q3> Reverse a String
// Create a function reverseString(str) that returns the reversed string.
// Solution :
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// const output = reverseString("Ayush")
// console.log("Reverse string is :", output);


// Q4> Count Vowels
// Create a function countVowels(str) that returns the total number of vowels (a, e, i, o, u) in a string.
// Solution :
// function countVowels(str) {
//     let count = 0;

//     for (let char of str.toLowerCase()) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Education"));































































































































