// #PRACTICE AREA ------>


// #Beginner Level :


// 1> Check whether a person is 18 or older AND 60 or younger.
// Solution :
// let age = 11;

// if(age >= 18 && age <= 60){
//     console.log("Eligible for Job");
// } else if(age > 60){
//     console.log("Too Older Age");
// } else{
//     console.log("Not Eligible For Job");
// }



// 2> Check whether both username and password are correct.
// Solution :
// let username = "ayushkumar334";
// let password = "ayush@2004";

// if(username === "ayushkumar334" && password === "ayush@2004"){
//     console.log("Valid Password");
// } else {
//     console.log("Wrong Password");
// }



// 3> Check whether a student is eligible for an exam when attendance is at least 75% AND fees are paid.
// Solution :
// let percentage = String(prompt('Enter Percentage here :'));
// let fees = String(prompt('Your Fees : (Paid/Unpaid)'));

// if(percentage >= "75%" && fees === "paid"){
//     console.log("Eligible for Exam");
// } else {
//     console.log("Not Eligible For Exam");
// }



// 4> Check whether a customer gets free delivery when order amount is ₹500 or more OR the customer is a premium member.
// Solution :
// let itemAmount = Number(prompt('Enter Item Prize :'));
// let premiumMember = String(prompt('Please give me answer if you have a premium Membership YES/NOT')).toUpperCase();

// if(itemAmount >= 500 || premiumMember === "YES"){
//     console.log('Yes I Gave you 99% Discount -- Congraluation');
// } else{
//     console.log("Sorry - No Discount");
// }




// #InterMediate Level :



// 1> Check whether a student is eligible for college admission when percentage is at least 60% AND the entrance exam is passed.
// Solution :

// let percentage = Number(prompt('Enter your percentage here :'));
// let entranceExam = String(prompt('Please type here is ur Entrance Exam (PASS/FAIL) :')).toUpperCase();

// if(percentage >= 60 && entranceExam === "PASS"){
//     console.log("Yes you are Eligible for College Admission");
// } else {
//     console.log("Not Eligible - SORRY");
// }



// 2> Check whether outdoor activity is possible when temperature is between 20°C and 35°C AND it is not raining.
// Solution :
// let temperature = Number(prompt('Enter current Temperature here :'))
// let raining = String(prompt('Is Raining (YES/NO)')).toUpperCase();

// if(temperature >= 20 && temperature <= 35 && raining === "NO"){
//     console.log("Out Door Activity is Possible");
// } else{
//     console.log("Sorry Today is Raining");
// }





// #Advanced Level :



// 1> A MERN developer is eligible when they know JavaScript AND React AND (Node.js OR MongoDB).
// Solution :
// let javascript = String(prompt('Are you know about JavaScript ? (YES/NO)')).toUpperCase();
// let react = String(prompt('Are you know about React ? (YES/NO)')).toUpperCase();
// let nodeJS = String(prompt('Are you know about Node.js ? (YES/NO)')).toUpperCase();
// let mongoDB = String(prompt('Are you know about MongoDB ? (YES/NO)')).toUpperCase();

// if(javascript === "YES" && react === "YES" && nodeJS === "YES" && mongoDB === "YES"){
//     console.log(' Congraluations -- You are a Mern Stact Developer');
// } else {
//     console.log('Please learn Skills First');
// }



// 2> A person is eligible for a bank loan when age is 21+, salary is at least ₹40,000, AND credit score is 700 or higher.
// Solution :
// let age = Number(prompt('Enter Age'));
// let salary = Number(prompt('Enter your per Month Salary Amount here :'));
// let creditScore = Number(prompt('Enter your Credit Score Here :'))

// if(age >= 21 && salary >= 40000 && creditScore >= 700){
//     console.log('Yes you are Eligible for Bank Loan');
// } else {
//     console.log('Not Eligible Sorry');
// }



// 3> A person is eligible for a bank loan when age is 21+, salary is at least ₹40,000, AND credit score is 700 or higher.
// Solution :