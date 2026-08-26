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
















































































