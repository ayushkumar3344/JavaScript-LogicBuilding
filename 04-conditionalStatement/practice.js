// Practice Work Space --->


// Question 1 :-> Write a conditional statement to check if a number is positive or negative.
// Solution :->

// let num = prompt("Enter a Number Here :");

// if(num > 0 ){
//     console.log('Positive Number');
// } else if (num < 0){
//     console.log('Negative Value');
// } else {
//     console.log("Zero");
// }



// Question 2 :-> Check whether a number is even or odd.
// Solution :->

// let num = Number(prompt('Enter Number here : '))

// if(num % 2 == 0){
//     console.log("Even Number");
// } else if(num * 2 != 0){
//     console.log("Odd Number");
// }



// Question 3 :-> Determine if a person is eligible to vote (age ≥ 18).
// Solution :->

// let age = Number(prompt('Enter your Age'));

// if(age >= 18){
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }



// Question 4 :->Check if a student has passed (marks ≥ 40).
// Solution :->

// const marks = Number(prompt('Enter your marks here :'));

// if(marks >= 40){
//     console.log('Congraluation , You are passed');
// } else {
//     console.log('Sorry your result is Fail');
// }



// Question 5 :-> Find the greater of two numbers using an if-else statement.
// Solution :->

// let a = Number(prompt('Enter the value of A'));
// let b = Number(prompt('Enter the value of B'));

// if( a > b ){
//     console.log(a, "Is grater than B");
// } else {
//     console.log(b, "is greater than A");    
// }



// Question 6 :-> Determine if a number is divisible by 5.
// Solution :->

// let num = Number(prompt('Enter any Number here :'));
// if(num % 5 === 0){
//     console.log("Yes : this number is divided by 5");
// } else {
//     console.log("sorry : this number is not divided by 5");
// }



// Question 7 :-> Determine if a number is divisible by 5.
// Solution :->

// let data = String(prompt('Enter one character digit here :'));

// if(data === 'a' || data === 'e' || data === 'i' || data === 'o' || data === 'u' ){
//     console.log('Yes, This character is vowel');
// } else {
//     console.log('It is not a vowel Character');
// }



// Question 8 :-> Find the largest of three numbers.
// Solution :->

// let a = Number(prompt('Enter 1st Number'));
// let b = Number(prompt('Enter 2st Number'));
// let c = Number(prompt('Enter 3st Number'));

// if(a >= b || a >= c){
//     console.log(a,'is Greater Number');
// } else if (b >= a || b >= c){
//     console.log(b,'is a Greater Number'); 
// } else {
//     console.log(c,'is a grater number');
// }



// Question 9 :-> Check if a number is a multiple of both 3 and 7.
// Solution :->

// let response = Number(prompt('Enter Your Number here : '));

// if(response % 3 === 0 || response % 7 === 0){
//     console.log('Yes : your number is devided by both 3 and 7');
// } else {
//     console.log('Sorry your number is not matching with our digits.');
// }



// Question 10 :-> Determine the Grade of a student based on marks:
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: Below 60
// Solution :->

// let marks = Number(prompt('Enter Yours Marks Here :'));

// if(marks >= 90  && marks <= 100 ){
//     console.log(marks,'Congraluation 1st Division');
// } else if(marks >= 80 && marks < 90){
//     console.log(marks,'2nd Division');
// } else if(marks >= 70 && marks < 80){
//     console.log(marks,'3rd Division');
// } else if(marks >= 60 && marks < 70){
//     console.log(marks,'4th Division');
// } else {
//     console.log(marks, 'Sorry you are fail - Better luck next time');
// } 
 


// Question 11 :-> Check whether a given temperature is above or below freezing (0°C).
// Solution :->

// let temperature = Number(prompt('Enter the temperature calcious here : '));

// if(temperature > 0){
//     console.log('temperature is above');
// } else if(temperature < 0){
//     console.log('temperature is below');
// } else {
//     console.log('temperature is Zero');
// }



// Question 12 :-> Determine if a person gets a discount based on age (e.g., age ≥ 60).
// Solution :->

// let age = Number(prompt('Enter your current age here :'));

// if(age >= 70  && age <= 80){
//     console.log(age,'you are my senior citizer So, you get a 80% discount on our products');
// } else if(age >= 50 && age < 70){
//     console.log(age,'according to you age you get a 50% percent discount on our products');
// } else if(age > 18 && age < 50){
//     console.log(age,'Welcome you are mine adult young customer then you will get a 30% discount on our side.');
// } else{
//     console.log('Sorry i have no discount creteria basis on your age',age);
// }



// Question 13 :-> Check if a password entered matches a predefined password.
// Solution :->

// let userPassword = prompt('Enter your 9 Digit password here :');
// const pass = 'ayush@123'

// if(userPassword == pass){
//    console.log("Congraluation : Your password is correct");
// } else if (userPassword.length > 9){
//     console.log('Sorry: your Password length is too long please Try Again'); 
// } else if (userPassword == ''){
//     console.log('Empty Password');
// } else {
//     console.log('Wrong Passsword');
// }



// Question 14 :-> Calculate electricity bill category.
// Low: <100 units
// Medium: 100–300 units
// High: >300 units
// Solution :->

// let bill = Number(prompt('Enter your bill Units Number here :'));

// if(bill < 100){
//     console.log(bill,'Low Your bill below than 100 Units');
// } else if(bill >= 100 && bill <= 300){
//     console.log(bill,'Medium around 100-300 units');
// } else {
//     console.log(bill,'High your bill is too Big more than 300 Units.');
// }



// Question 15 :-> Check whether a day number (1–7) represents a weekday or weekend.
// Solution :->

// let weekNum = Number(prompt('Enter your week num is here :'));

// if(weekNum == 1){
//     console.log('sunday');
// } else if (weekNum == 2){
//     console.log('Monday');
// } else if (weekNum == 3){
//     console.log('tuesday');
// } else if (weekNum == 4){
//     console.log('wednesday');
// } else if (weekNum == 5){
//     console.log('thursday');
// } else if (weekNum == 6){
//     console.log('friday');
// } else if (weekNum == 7){
//     console.log('saturday');
// } else {
//     console.log('not match with registered week numbers');
// }



// Question 16 :-> Determine if a person is eligible for a driving license (age ≥ 18 and passed test).
// Solution :->

// let age = Number(prompt('Enter your Age here :'));
// let testPassed = String(prompt('Passed in Test ? (Yes/No)'));

// if(age >= 18 && testPassed === "yes"){
//     console.log('You are Eligible for Driving');
// } else {
//     console.log('Sorry : Not Eligible for Driving');
// }



