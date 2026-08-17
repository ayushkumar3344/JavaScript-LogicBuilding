// #DATATYPE CONFUSION UNDERSTANDING --->

// let score = "23";

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// Confusion -->

// 1> "33" => 33
// 2> "33abc" => NaN
// 3> true => "1" ; false => "0"


// *If i need to convert value in boolean form So -->

let isLoggedIn = "ayush";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 0 => False ; 1 => True
// "" => False
// "Ayush" => True


// If i need to convert any data in String So -->

let age = 45;

let getStringData = String(age);
console.log(getStringData);
console.log(typeof getStringData);

