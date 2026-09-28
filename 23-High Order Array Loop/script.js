// High Order Array Loop --->


// 1> For Of Loop --->

["","",""]  // Array
[{},{},{}]  // Object


// ---------> Array
// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
//     console.log(val);
// }


// ---------> String

// Example 1 --->
// const universityName = "Sardar Patel University";

// for (const uni of universityName) {
//     if(uni.includes('t')){
//         console.log(`Detect ${uni}`);
//         continue;
//     }
//     console.log(`Every Char of String is : ${uni}`);
// }

// Example 2 --->
// const userEmail = 'kumarayush8117@gmail.com';

// for(let email of userEmail){
//     if(email === '@'){
//         console.log("@ Target Detected");
//         continue;
//     }
//     console.log("All Character are :", email);
// }



// Maps --->

// const map = new Map();
// map.set("IN","India")
// map.set("PAK","Pakistan")
// map.set("CHIN","China")
// map.set("JAP","Japnease")

// // console.log(map);
// for(const [key,val] of map){
//     console.log(key, ":-", val);
// }




// --------------------------->
// Perform this same task in Object Format :->

// const myObject = {
//     fullName : "Ayush Kumar",
//     rollNo : 32,
//     emailID : "Kumarayush8117@gmail.com",
//     isLoggedIn : true,
// }

// ------> For Of Loop is Not working in Objects its only working on [Arrays]. 
// for(const [key,val] of myObject){
//     console.log(key, ":-", val);
// }

// For In Loop :-
// for(let val in myObject){
//     console.log(`keys are :- ${val} or Values are :- ${myObject[val]} `);
// }



// Now try for using for in loop for array -->

// const languages = ["c++","JavaScript","python","Java","ruby","react"];

// for (const key in languages) {
//     console.log(languages[key]);
// }





























































































































































































