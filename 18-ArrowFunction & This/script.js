// (This) In JavaScript!!!


// const user = {

//     fullName : 'Ayush Kumar',
//     course : "MCA(Masters In Computer Applications)",

//     welcomeMessage : function(){
//         console.log(`Hello, ${this.fullName} Welcome to our Website`);
//         console.log(this);
        
//     }

// }


// user.welcomeMessage()
// user.fullName = "Parmish Verma";
// user.welcomeMessage();

// console.log(this);






// ------------> Functions <---------------


// function user(){
//     const userName = "Ayuhs Kumar";
//     const gmailID = "kumarayush8117@gmail.com";
//     console.log(this.userName);  //undefined
// }

// user()


// const user = function(){
//     const userName = "Ayush Kumar";
//     console.log(this.userName);
// }

// user();



// Arrow Function -->

// const user = () => {
//     let userName = "Ayush Kumar";
//     console.log(this);
// }

// user()


// const addTwo = (num1, num2) => {
//     return num1 * num2
// }

// const output = addTwo(prompt('Enter num1'), prompt('Enter Num2'));
// console.log("Output is :", output);


// const studentMarks = (math, english) =>  
//     {
//         return math + english
//     }

//     const output = studentMarks(67, 89);

// console.log("Outpur is :", output);



// Here Perform Functions In Simgle Line --->

// const user = (num1, num2) => num1 * num2;
// const output = user(393, 654);

// console.log(`Total Count Is : ${output}`);





// IIFE (Immediately Invoked Function Expressions) --->

(function user(name){
    console.log(`My Name is ${name} whiat is ur Name`);
})("Ayush Thakur");

( () => {
    console.log("Hello, Ayush");
})();

































































