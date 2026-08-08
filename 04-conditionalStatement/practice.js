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







//  Ternary Operator Practice work -------------------------->



// Question 1 :-> Check if a number is positive or negative using the ternary operator.
// Solution :->

// let response = Number(prompt('Enter any Number'));

// const stored = response >= 0 ? 'Positive' : 'Negative'
// console.log(stored);



// Question 2 :-> Check if a number is even or odd.
// Solution :->

// let number = Number(prompt('Enter Number Here :'));

// const response = number % 2 === 0 ? "Even" : 'Odd'
// console.log(response);



// Question 3 :-> Check whether a person is eligible to vote (18+).
// Solution :->

// let age = Number(prompt('Enter your Age Here :'));

// const response = age >= 18 ? 'Eligible for Voting' : 'Not Eligible for Voting'
// console.log(response);
 


// Question 4 :-> Find the greater of two numbers.
// Solution :->

// let num1 = Number(prompt('Enter Number 1'));
// let num2 = Number(prompt('Enter Number 2'));

// const response = num1 > num2 ? `${num1} is greater` : `${num2} is greater`
// console.log(response);



// Question 5 :-> Check if a number is divisible by 5.
// Solution :->

// let number = Number(prompt('Enter your Number here :'));

// const response = number % 5 === 0 ? `Yes, ${number} is devide by 5` : `No , ${number} is not devide by 5`
// console.log(response);



// Question 6 :-> Check whether a student has passed or failed (40 marks).
// Solution :->

// let marks = Number(prompt('Enter your Marks here :'));

// const response = marks >= 40 ? 'Pass' : 'Fail'
// console.log(response);



// Question 7 :-> Check if a character is a vowel or consonant.
// Solution :->

// let vowel = String(prompt('Enter any One character here :'));

// const response = vowel === 'a'  || vowel === 'e'  || vowel === 'i'  || vowel === 'o'  || vowel === 'u'  ? 'Vowel' : 'Consonant'
// console.log(response);



// Question 8 :-> Check whether a number lies between 10 and 50.
// Solution :->

// let number = Number(prompt('Enter your Number here :'));

// const response = number >= 10 && number <= 50 ? `yes ${number} is inside the number between 10 - 50` : `No ${number} is outsided`
// console.log(response);



// Question 9 :-> Check whether a temperature is Hot (>35°C) or Normal.
// Solution :->

// let temperature = Number(prompt('Enter your current calcious here :'));

// const response = temperature > 35 ? 'Above' : 'Below'
// console.log(response);



// -------------------------------------------------------------------------------------->
// -------------------------------------------------------------------------------------->

// --------------------------------------------->
// Switch Case Condition inside the javascript
// --------------------------------------------->



// Question 1 :-> Day of the Week
// Take a number (1–7) and print the corresponding day.
// Example:
// 1 → Monday
// 7 → Sunday

// Solution :->
// let day = Number(prompt('Enter Your Day No here :'));

// switch(day){

//     case 1 : console.log('Sunday');
//     break;
//     case 2 : console.log('Monday');
//     break;
//     case 3 : console.log('Tuesday');
//     break;
//     case 4 : console.log('Wednesday');
//     break;
//     case 5 : console.log('Thursday');
//     break;
//     case 6 : console.log('Friday');
//     break;
//     case 7 : console.log('Saturday');
//     break;

//     default : console.log('Empty Number is Typed Here');

// }



// Question 2 :-> Take a number (1–12) and print the month name.
// Example:
// 1 → January
// 12 → December

// Solution : 
// let num = Number(prompt('Enter the Number Here :'));

// switch(num){

//     case 1 : console.log('January');
//     break;
    
//     case 2 : console.log('Feburary');
//     break;

//     case 3 : console.log('March');
//     break;
    
//     case 4 : console.log('June');
//     break;

//     case 5 : console.log('July');
//     break;

//     case 6 : console.log('August');
//     break;

//     case 7 : console.log('September');
//     break;

//     case 8 : console.log('October');
//     break;

//     case 9 : console.log('November');
//     break;

//     case 10 : console.log('December');
//     break;

//     default : console.log('Empty Number');
    

// }



// Question 3 :-> Traffic Light (Indicator)
// Print:
// red → Stop
// yellow → Ready
// green → Go

// Solution :->
// let signal = String(prompt('Enter your Single Light Color Here :'));

// switch(signal){

//     case ('red') : console.log('Stop');
//     break;

//     case ('yellow') : console.log('Run');
//     break;

//     case ('green') : console.log('Go Now');
//     break;

//     default : console.log('Sorry No Signal Typed here');
    
// }



// Question 4 :-> Grade System
// Solution :-> 

// let grade = String(prompt('Enter your Grade here :'));

// switch(grade){

//     case "A" : console.log('Excellent');
//     break;

//     case "B" : console.log("Very Good");
//     break;

//     case "C" : console.log("Good");
//     break;

//     case "D" : console.log("Average");
//     break;

//     case "E" : console.log("Fail");
//     break;

//     default : console.log("Invalid Grade");

// }



// Question 5 :-> Calculator
// Solution :-> 

// let num1 = 10;
// let num2 = 20;
// let operator = String(prompt('Enter Your Operator symbol here :'));

// switch(operator){

//     case "+" : console.log(num1 + num2);
//     break;

//     case "-" : console.log(num1 - num2);
//     break;

//     case "*" : console.log(num1 * num2);
//     break;

//     case "**" : console.log(num1 ** num2);
//     break;

//     case "%" : console.log(num1 % num2);
//     break;

//     default : console.log("Invalid operator");

// }



// Question 6 :-> Browser Detection
// Solution :-> 


// let browser = String(prompt('Enter Browser Name :'));

// switch(browser){

//     case "chrome" : console.log('Chrome')
//     break;
     
//     case "safari" : console.log('Safari');
//     break;

//     case "firefox" : console.log('Firefox');
//     break;

//     case "operamini" : console.log('OperaMini Browser');
//     break;

//     default : console.log('Sorry Browser Not Support');
    

// }



// Question 7 :-> Fruit Price
// Example:
// Apple → ₹120/kg
// Banana → ₹60/kg
// Mango → ₹150/kg
// Orange → ₹90/kg

// Solution :-> 

// let fruit = String(prompt('Enter your fruit name I Will Show you the prize - (Apple/Bnana/Mango/Litchi)'))

// switch(fruit){

//     case "apple" : console.log("Apple Buy");
//     break;

//     case "bnana" : console.log("Bnana Buy");
//     break;

//     case "Mango" : console.log("Mango Buy");
//     break;

//     case "litchi" : console.log("Lithchi Buy");
//     break;

//     default : console.log("Sorry we dont have that Item");

// }



// Question 7 :-> Fruit Price
// Even or Odd (Using switch(true))

// Solution :-> 
// let number = 22;


// switch(true){

//     case number % 2 === 0 : console.log("Even");
//     break;

//     default : console.log("Odd");
    

// }






