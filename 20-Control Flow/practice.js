// Practice Questions Task :-->


// 🔥 15 Hard Conditional Statement Tasks --->

// Q1 : Student Grade + Scholarship
// Take marks and family income.
// Grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → F
// If marks ≥ 85 and income < ₹3,00,000, print "Eligible for Scholarship".
// Sol ::
// const totalMarks = Number(prompt('Enter Your Current Marks Here (?/100) :'));
// const familyIncome = Number(prompt('Enter Your Current Annual Family Income :'));

// if(totalMarks >= 90 && totalMarks <= 100){
//     console.log(`${totalMarks} : Grade A`);
// } else if(totalMarks >= 80 && totalMarks <= 89){
//     console.log(`${totalMarks} : Grade B`);
// } else if(totalMarks >= 70 && totalMarks <= 79){
//     console.log(`${totalMarks} : Grade C`);
// } else if(totalMarks >= 60 && totalMarks <= 69){
//     console.log(`${totalMarks} : Grade D`);
// } else{
//     console.log(`${totalMarks} : Result Fail`);
// }

// if(familyIncome <= 300000){
//     console.log(`Yes you are eligible for Scholership`);
// } else {
//     console.log(`Sorry you are not eligible for scholership`);
// }



// Q2 : Leap Year + Century
// Take a year.
// Determine whether it is a leap year.
// Additionally, print whether it is a Century Year or Non-Century Year.
// Example: 2000 → Leap Year, Century Year.
// Sol ::
// const year = 2000;

// if(year % 400 === 0){
//     console.log("Leap Year");
// } else if(year % 100 === 0){
//     console.log("Not a Leap Year");
// } else if(year % 4 === 0){
//     console.log("Leap year");
// } else{
//     console.log("Not a Leap Year");
// }

// if(year % 100 === 0){
//     console.log("Century Year");
// } else {
//     console.log("Non-Century year");
// }



// Q3 : Login Authentication
// Store a correct username and password.
// Check:
// Both correct → "Login Successful"
// Username correct but password wrong → "Incorrect Password"
// Username wrong → "User Not Found"
// If the account is blocked, print "Account Blocked" regardless of credentials
// Sol ::
// const username = 'Ayush'
// const password = 'ayush@2004'

// const typeduUserName = String(prompt('Enter your name here :'));
// const typedPassword = String(prompt('Enter your password here :'));
// const isAccountBlocked = false;

// if(isAccountBlocked){
//     console.log("Account Blocked");
// } else if (typeduUserName === username && typedPassword === password){
//     console.log("Login Successful");
// } else if (typeduUserName === username && typedPassword !== password){
//     console.log("Wrong Password");
// } else {
//     console.log("User Not Found");
// }



// Q4 : ATM Withdrawal System
// Take:
// Account balance
// Withdrawal amount
// Daily withdrawal limit
// Conditions:
// Amount must be a multiple of 500.
// Amount must not exceed balance.
// Amount must not exceed daily limit.
// Minimum withdrawal = ₹500.
// Print the appropriate error or success message.
// Sol ::

// let balance = 25000;
// const withdrawalAmount = Number(prompt("Here Enter your withdrawal amount"));
// const dailyLimit = 10000;
// if(withdrawalAmount < 500){
//     console.log("Minimum withdrawal is ₹500");
// } else if(withdrawalAmount % 500 === 0){
//     console.log("Amount must be a multiple of 500.");
// } else if(withdrawalAmount > dailyLimit){
//     console.log("Today you withdrawal limit is completed");
// } else if(withdrawalAmount > balance){
//     console.log("Insufficient balance");
// } else {
//     balance = balance - withdrawalAmount;

//     console.log("Withdrawal Successful");
//     console.log("Withdrawal Amount :", withdrawalAmount);
//     console.log("Current Balance :",balance);
    
// }


// Q5 : Employee Bonus Calculator
// Take salary, years of experience, and performance rating.
// Bonus rules:
// Experience ≥ 5 and rating ≥ 8 → 20%
// Experience ≥ 3 and rating ≥ 7 → 15%
// Experience ≥ 1 and rating ≥ 6 → 10%
// Otherwise → 5%
// If salary > ₹1,00,000, reduce the calculated bonus by 2 percentage points.
// Sol ::
// const salary = 80000;
// const experience = 3;
// const rating = 7

// let bonesPercentage;

// if(experience >= 5 && rating >= 8){
//     bonesPercentage = 20;
// } else if(experience > 3 && rating > 7){
//     bonesPercentage = 15;
// } else if(experience > 1 && rating > 6){
//     bonesPercentage = 10;
// } else{
//     bonesPercentage = 5;
// }

// if(salary > 100000){
//     bonesPercentage = bonesPercentage - 2;
// }

// let bones = salary * bonesPercentage / 100;

// console.log("Bones Percentage: " + bones + '%');
// console.log("Bones Amount: ₹" + bones);



// Q6 : Employee Bonus Calculator
// Take salary, years of experience, and performance rating.
// Bonus rules:
// Experience ≥ 5 and rating ≥ 8 → 20%
// Experience ≥ 3 and rating ≥ 7 → 15%
// Experience ≥ 1 and rating ≥ 6 → 10%
// Otherwise → 5%
// If salary > ₹1,00,000, reduce the calculated bonus by 2 percentage points.
// Sol ::
// const salary = 57000;
// const experience = 4;
// const rating = 7;

// let bonesPercentage;

// if( experience >= 5 && rating >= 8 ){
//     bonesPercentage = 20;
// } else if( experience >= 3 && rating >= 7 ){
//     bonesPercentage = 15;
// } else if( experience >= 1 && rating >= 6 ){
//     bonesPercentage = 10;
// } else {
//     bonesPercentage = 5;
// }

// if( salary >= 100000 ){
//     bonesPercentage - 2;
// }

// const bones = salary * bonesPercentage / 100;
// const updatedSalary = salary + bones;

// console.log("Current Salary :", '₹' + salary);
// console.log("Salary Increment Bones :", bonesPercentage + '%');
// console.log("New Salary With Bones :",'₹' + updatedSalary);



// Q7 : Online Shopping Discount
// Take cart amount and membership status.
// Discount:
// ₹10,000+ → 20%
// ₹5,000–₹9,999 → 15%
// ₹2,000–₹4,999 → 10%
// Below ₹2,000 → No discount
// Premium members get an additional 5% discount.
// If final amount after discount is ≥ ₹8,000, provide "Free Delivery".
// Sol ::
// const cartAmount = 77745;
// const membershipStatus = 'Premium';

// let discount;

// if( cartAmount > 10000 ){
//     discount = 20;
// } else if( cartAmount >= 5000 && cartAmount <= 9999 ){
//     discount = 15;
// } else if( cartAmount >= 2000 && cartAmount <= 4999 ){
//     discount = 10;
// } else {
//     discount = 0;
// }

// if( membershipStatus.includes('Premium') ){
//     discount = discount + 5;
// }

// const lessCoupon = cartAmount * discount / 100;
// const finalAmount = cartAmount - lessCoupon;

// console.log("CartAmount is :", '₹' + cartAmount );
// console.log("Coupon Applied :", discount + '%');
// console.log("Final Amount :", '₹' + finalAmount );

// if(finalAmount >= 8000){
//     console.log('₹' + finalAmount , "Free Delevery");
// } else{
//     console.log('Delivery Charges Applicable');
// }



// Q8 : Driving License Eligibility
// Take age, test score, and number of previous violations.
// Conditions:
// Age must be ≥ 18.
// Test score must be ≥ 70.
// Violations must be less than 3.
// If age ≥ 60, require a test score of at least 80.
// Sol ::
// const age = 35;
// const testScore = 129;
// const violations = 2;


// if(age < 18){
//     console.log("You are not Eligible for Driving Licence");
// } else if(testScore < 70 && testScore > 80){
//     console.log("Atleast your score is upto 80");
// } else if( violations > 3){
//     console.log("Too much violations, Sorry Not Eligible");
// } else if(age >= 60){
//     console.log("your age is greater than 60, sorry out of age [ Not Eligible ]");
// } else{
//     console.log("Congraluation, you are eligible for driving licence");
// }



// Q9 : Movie Ticket Pricing
// Take age, show time, and weekend status.
// Base ticket = ₹250.
// Rules:
// Age < 12 → 50% discount
// Age ≥ 60 → 30% discount
// Before 12 PM → additional 20% discount
// Weekend → ₹50 extra
// Calculate the final ticket price.
// Sol ::
// const age = 10;
// const showTime = 10;
// const isWeekend = false;

// let price = 250;

// // Age Discount -->
// if(age < 12){
//     price = price - (price * 50 / 100);
// } else if(age >= 60){
//     price = price - (price * 30 / 100);
// }

// // Time Discount -->
// if(showTime < 12){
//     price = price - (price * 20 / 100);
// }

// // Weekend Prize -->
// if(isWeekend){
//     price = price + 50;
// }

// console.log("Final Ticket Price is :", price);





































































































































































