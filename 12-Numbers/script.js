// +++++++++++++++++++++ Numbers ++++++++++++++++++++++++


// const score = 100
// console.log(score);
// console.log(typeof score);   // Typeof Score is Number 

// const run = new Number(400);
// console.log(run);

// -->Methods
// console.log(run.toString().length);
// console.log(run.toFixed(2));

// const otherNumber = 29.4985;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// -------> Static Numbers Methods <-------



// 1> -------------- isFinite() Method;
// const userNum = 497;
// console.log(Number.isFinite(userNum));

// const age = Number(prompt('Enter a Number here :'));
// if(Number.isFinite(age)){
//     console.log("yes it is a Number");
// } else {
//     console.log("its Not a Number");
// }


// 2> -------------- isInteger() Method;
// const userNum = Number(prompt('Enter any Number here :'));
// if(Number.isInteger(userNum)){
//     console.log("Yes it is Valid Integer",userNum);
// } else{
//     console.log("its not a Integer",userNum);
// }


// 3> -------------- isNaN() Method;
// const userNum = Number(prompt('Please enter a Number Here :'));
// if(Number.isNaN(userNum)){
//     console.log("NaN value");
// } else {
//     console.log("it is correct value");
// }


// 4> -------------- isSafeInteger() Method;
// const userNum = Number(prompt('Enter any number here :'));
// if(Number.isSafeInteger(userNum)){
//     console.log("its Safe");
// } else{
//     console.log("not safe");
// }


// 5> -------------- isSafeInteger() Method;
// const marksNum = 97.7;
// console.log(String(marksNum).length);


// 6> -------------- parseFloat() Method;
// const userNum = "65.896";
// console.log(parseInt(userNum));
// console.log(Number.parseFloat(userNum));



// +++++++++++++++++++++ Maths ++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-32));  // It Help to convert Negative(-) Values to Positive(+)
console.log(Math.round(3.7)); // It Remove after Decimal Values to Increase before Decimal Value. Start Working from after 5.
console.log(Math.ceil(7.4)); // It Remove after Decimal Values to Increase before Decimal Value. Start Working from after 1.
console.log(Math.floor(6.3)); // if you cange any value after decimal the value before decimal always same.
console.log(Math.min(3,7,5,1,7,4,9,2)); // Its help to find the Smallest number given in Array;
console.log(Math.max(3,7,5,1,7,4,9,2)); // Its help to find the Largest number given in Array;

// Most Important Math Function Property is :
console.log(Math.floor((Math.random() * 10) + 1));  // Random number Generator formula 


const min = 10;
const max = 23;

console.log(Math.floor(Math.random() * (max - min + 1) + min));  // Random number Generator formula 



































