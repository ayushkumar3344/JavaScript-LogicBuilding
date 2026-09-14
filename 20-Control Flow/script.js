// Control Flow In JavaScript Notes :-->


// if 
// if(true){
//     console.log("Code Execute");
// }
// if(false){
//     console.log("Code Not Execute");
// }


// // Example ->
// const userLoggedIn = true;
// const temperature = 41;

// if(temperature <= 50){
//     console.log('Code Executed');
// }



// If-Else in Control Flow ------>
// const score = 200;

// if( score > 100 ){
//     let power = "Fly";
//     console.log(`Power is : ${power}`);
// }

// console.log(`Power now is : ${power}`); // it is not access the local variable declared values.


// const balance = 7893;

// if(balance < 500){
//     console.log(`your balance is less than 500`);
// } else if(balance < 700){
//     console.log(`your balance is less than 700`);
// } else if(balance < 800){
//     console.log(`your balance is less than 800`);
// } else if(balance < 900){
//     console.log(`your balance is less than 900`);
// } else if(balance < 1200){
//     console.log(`your balance is less than 1200`);
// } else {
//     console.log(`your current balance is ${balance}🪙`);
// }


// Example 2 -->
// const isLoggedIn = true;
// const dabitCard = true;

// if(isLoggedIn && dabitCard){
//     console.log("Yes!! You can buy our course");
// }


// Example 3 -->
// const isLoggedInWithGoogle = true;
// const isLoggedInWithfacebook = false;
// const isLoggedInWithGuestAccount = false;

// if(isLoggedInWithfacebook || isLoggedInWithGuestAccount || isLoggedInWithGoogle){
//     console.log("You Logged In Successfully");
// }



// Switch Case In Javscript ::::

// const month = Number(prompt('Enter Your Month Here :'));

// switch(month){

//     case 1 : console.log('January');
//     break;
//     case 2 : console.log('Feburary');
//     break;
//     case 3 : console.log('March');
//     break;
//     case 4 : console.log('April');
//     break;
//     case 5 : console.log('May');
//     break;
//     case 6 : console.log('June');
//     break;
//     case 7 : console.log('July');
//     break;
//     default : console.log('Please enter valid number');
//     break

// }



// const userEmail = '';

// if(userEmail){
//     console.log('I Got User Email');
// } else {
//     console.log('I am Not fount user Email Id');
// }


// Falsy Values ---->
// false , 0, -0, BigInt On, "", Null, Undefined, NaN


// Truth Values ---->
// '0', 'False', " ", {}, [], function(){}


// if(userEmail.length === 0){
//     console.log("Array is Empty");
// } else {
//     console.log("Valid Email Id");
// }


// const emptyObject = {};

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is Empty");
// } else {
//     console.log("Object is Not Empty");
// }




// Nullish Coalescing Operator (??):: null undefined

// let val1;
// // val1 = 5 ?? 10;
// val1 = null ?? 10

// console.log("Val1 is", val1);



// #TERNARY OPERATOR --->

// Rule ( Condition ? true : False );

// const age = 19;
// age >= 18 ? console.log('yes you can vote') : console.log('you are underage');









































































