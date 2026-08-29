// ++++++++++++++ Numbers In JavaScript Practice Work ++++++++++++++


// 😁👍 Easy Level ---------------------------->


// Q1. Convert a Value to Number
// Take a value from the user using prompt() and convert it into a number. Then print it to the console.
// Example: "250" → 250
// Solution : 
// const userValue = prompt('Enter any Number Here :');
// console.log(userValue);
// console.log(Number(userValue));


// Q2. Check if a Number is an Integer
// Take a number and check whether it is an integer or not.
// Example: 25 → Integer
// Example: 25.5 → Not an Integer
// Solution : 
// const userNumber = Number(prompt('Enter any number here :'));
// if(Number.isInteger(userNumber)){
//     console.log("Yes it is Integer");
// }else {
//     console.log("It is not a Integer");   
// }


// Q3. Check Positive, Negative, or Zero
// Take a number as input and check whether it is:

// Positive
// Negative
// Zero
// Solution :
// const userNumber = Number(prompt('Enter any Number Here :'));
// if(userNumber > 0){
//     console.log("Positive Integer");
// } else if (userNumber < 0){
//     console.log('Negative Integer');
// } else {
//     console.log("its Zero");   
// }


// Q4. Format Decimal Places
// Take the number 45.67892 and format it to 2 decimal places.
// Expected output: 45.68
// Solution :
// const amount = 45.67892;
// console.log(amount.toFixed(2));


// Q5. Convert Number to String
// Convert the number 12345 into a string and also print its data type.
// Solution :
// const prizeNum = Number(12345);
// console.log(prizeNum);
// console.log(prizeNum.toString());
// console.log(typeof prizeNum.toString());




// 😁👍 Medium Level ---------------------------->


// Q6. Extract an Integer from a String
// You are given the string "250px". Extract the integer number from it.
// Expected output: 250
// Solution :
// const imageSize = "250px";
// console.log(imageSize);
// const result = parseInt(imageSize);
// console.log(result);


// Q7. Extract a Decimal Number from a String
// You are given the string "45.678kg". Extract the decimal number from it.
// Expected output: 45.678
// Solution :
// const myData = "45.678kg";
// let result = parseInt(myData);
// console.log(result.toPrecision(5));


// Q8. Check for NaN
// Take an input from the user and check whether the entered value is a valid number or NaN.
// Solution :
// const userNum = Number(prompt("Enter any number here :"));
// if(Number.isNaN(userNum)){
//     console.log("This value is NaN (Not a Number)");
// } else{
//     console.log("Valid Number");
// }


// Q9. Check for a Finite Number
// Test these three values:
// 100
// Infinity
// "100"
// Determine which of these values is a finite number.
// Solution :
// let num1 = 100;
// let num2 = Infinity;
// let num3 = "100";

// console.log(Number.isFinite(num1));
// console.log(Number.isFinite(num2));
// console.log(Number.isFinite(num3));



// ------------> Functions of Numbers Done Successfully //
// const userMarks = 45.57;
// const balance = 1000000;
// console.log(userMarks.toString());
// console.log(userMarks.toFixed(2));
// console.log(userMarks.toPrecision(3));
// console.log(balance.toLocaleString("en-IN"));
// console.log(userMarks.toExponential());





// +++++++++++++++++++ #PRACTICE START HERE +++++++++++++++++++++++



// 🟢 Beginner Level --->


// Q1 -> Check whether a number is positive, negative, or zero
// Sol ->
// const userNum = Number(prompt('Enter any number Here :'));
// if(userNum > 0){
//     console.log("Positive");
// } else if (userNum < 0){
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }


// Q2 -> Check whether a number is even or odd?
// Sol ->
// const num = Number(prompt('Enter any number here :'));
// if(num % 2 === 0){
//     console.log("even",num);
// } else {
//     console.log("Odd",num);
// }


// Q3 -> Convert a string into a number?
// Sol ->
// const num = "78";
// console.log(typeof num);
// const result = Number(num);
// console.log(result, typeof result);


// Q4 -> Check whether a value is an integer.
// Sol ->
// const marks = 98.9;
// console.log(Number.isInteger(marks));




// 🟡 Intermediate Level ---------->


// Q1 -> Check whether a value is NaN
// Sol ->
// const userMarks = Number(prompt("Enter any number here :"));
// console.log(Number.isNaN(userMarks));


// Q2 -> Convert a decimal string into a floating-point number
// Sol ->
// const num = '56.7834';
// console.log(num, typeof num);
// console.log(Number.parseFloat(num), typeof Number.parseFloat(num));


// Q3 -> Convert a string into an integer?
// Sol ->
// const num = "3864";
// console.log(Number.parseInt(num));


// Q4 -> Round a decimal number to 2 decimal places
// Sol ->
// const numPercentage = 56.304245;
// console.log(numPercentage);
// console.log(numPercentage.toFixed(2));



// 🟠 Advanced Level ---------->


// Q1 -> Check whether a number is a safe integer.
// Sol ->
// const userNum = 852498735442;
// console.log(Number.isSafeInteger(userNum));


// Q2 -> Display JavaScript's maximum safe integer.
// Sol ->
// console.log(Number.MAX_SAFE_INTEGER);


// Q3 -> Display JavaScript's maximum possible numeric value
// Sol ->
// console.log(Number.MAX_VALUE);


// Q4 -> Create a simple marks calculator
// Sol ->
// let math = 75;
// let english = 67;
// let sanskrit = 39;

// const total = math + english + sanskrit;
// console.log(total,"Total Number");

// const percentage = total / 3;
// console.log(percentage.toFixed(2), "Percentage");



// Q5 -> Create a shopping bill calculator
// Question:
// A product costs ₹499.99 and GST is 18%. Calculate the final price.
// Sol ->
// let productCost = 499.99;
// let gst = 18

// let gstAmount = productCost * gst / 100;
// let total = productCost + gstAmount;

// console.log(gstAmount.toFixed(2), "Its out gst amount");
// console.log(total.toFixed(2), "Total of all product prize");




// -------> #Projects Based Question Answers <-------

// Q1 -> Number Validator
// Create a program that checks whether the entered value is:
// A number
// An integer
// A safe integer
// NaN
// Sol ->
// const userNum = Number(prompt("Enter any number here :"));
// console.log(userNum, typeof userNum === "number");
// console.log(userNum, Number.isInteger(userNum));
// console.log(userNum, Number.isSafeInteger(userNum));
// console.log(userNum, Number.isNaN(userNum));



// Q2 -> Student Result Calculator
// Create a program that takes marks of 5 subjects and calculates:
// Total
// Percentage
// Average
// Pass/Fail
// Sol ->
// let english = 47;
// let math = 87;
// let science = 63;
// let sanskrit = 59;
// let hindi = 94;

// const total = english + math + science + sanskrit + hindi;
// const percentage = (total / 500) * 100;
// const Average = total / 5;

// console.log("Total :",total);
// console.log("Percentage :",percentage.toFixed(2) + "%");
// console.log("Average :",Average.toFixed(2));

// if(percentage > 50){
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }



// Q3 -> ATM Withdrawal Validator
// Create a program that checks:
// Amount must be a number
// Amount must be an integer
// Amount must be greater than 0
// Amount must not exceed balance
// Sol ->
// let balance = 10000;
// let withDraw = Number(prompt("Enter withdrawel amount here :"));

// if(Number.isNaN(withDraw)){
//     console.log("Invalid Amount");
// } else if(!Number.isInteger(withDraw)){
//     console.log("Amount Must be an integer");
// } else if(withDraw <= 0){
//     console.log("Enter a Valid Amount");
// } else if(withDraw > balance){
//     console.log("Insufficient Balance");
// } else{
//     balance = balance - withDraw;
//     console.log("WithDraw Sussessfuly");
//     console.log("Current Balance is :",balance);   
// }



// Q4 -> Currency Converter
// Create a program that converts USD into INR.
// Sol ->
// let usd = 100;
// let exchangeRate = 87;

// let inr = usd * exchangeRate;

// console.log("USD :", usd);
// console.log("INR :", inr.toFixed(2));



// Q5 -> Number Guessing Game
// Create a program that converts USD into INR.
// Sol ->
// const correctNumber = 66;
// let userGuess = Number(prompt('Hello : Buddy Guess any Number between (1 - 100)'));

// if(userGuess === correctNumber){
//     console.log(`Yes ${userGuess} is a correct Number`);
// } else if(userGuess < correctNumber){
//     console.log("Too Low");
// } else{
//     console.log("Too High");
// }






// +++++++++++++++ #MATH PRACTICE QUESTIONS & SOLUTIONS +++++++++++++++++


// 🧮 JavaScript Math — 20 Practice Tasks


// 🟢 Beginner Level


// Q1. Find the Square Root
// Create a program that takes a number and finds its square root using a Math function.
// Solutions :
// const userNum = Number(prompt('Enter Any number here :'));
// const result = Math.floor(Math.sqrt(userNum));
// console.log(result);


// Q2. Find the Power
// Take two numbers, base and exponent, and calculate the result of base^exponent.
// Solutions :
// const userNum = Number(prompt("Enter any number :"));
// const power = Number(prompt("How many time you want to multiply your number :"));
// const result = Math.floor(Math.pow(userNum,power));
// console.log(result);


// Q3. Find the Larger Number
// Given two numbers, find the larger number using a Math function.
// Solutions :
// let num1 = 34;
// let num2 = 42;
// let num3 = 85;
// let num4 = 64;

// const result = Math.max(num1,num2,num3,num4);
// console.log(result);


// Q4. Find the Smallest Number
// Given three numbers, find the smallest number using a Math function.
// Solutions :
// let num1 = 34;
// let num2 = 42;
// let num3 = 85;
// let num4 = 64;

// const response = Math.min(num1,num2,num3,num4);
// console.log(response);


// Q5. Generate a Random Number
// Generate a random number between 1 and 100.
// Solutions :
// let randomNumber = Math.floor(Math.random() * 100) + 1
// console.log(randomNumber);


// Q6. Round a Number
// Given a decimal number such as 12.67, round it to the nearest integer.
// Solutions :
// const num = 12.67;
// let result = Math.round(12.67);
// console.log(result);


// 7. Always Round Down
// Given a decimal number such as 15.89, always round it down to the nearest integer.
// Solutions :
// const userNum = 15.89;
// console.log(Math.floor(userNum));



































































