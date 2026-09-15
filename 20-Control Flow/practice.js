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































































































































































































