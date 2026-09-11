// Javascript Scopes -->

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 30;

// if(true){
//    let a = 10;
//    const b = 20;
// //    var c = 30;
// }

// // console.log(a);
// // console.log(b);
// console.log(c);



// let a = 20

// if(true){
//    let a = 10;
//    const b = 20;
// //    var c = 30;
//    console.log("Value of A is :", a);  //Local Scope
   
// }

// console.log("A is : ",a); // Global Scope


// // console.log(a);
// // console.log(b);
// // console.log(c);




// Scope Level & Mini Hosting In Javascript --->


// function one(){

//     const userName = "Ayush"

//     function two(){

//         const website = "Code With Harry Website"
//         console.log("Username is :", userName);
        
//     }

//     // console.log("Website Name is :", website); 
//     two();
    
// }

// one()




// How Scopes Work In Loop --->


// if(true){

//     let fullName = "Ayush Kumar"
//     let course = "MCA(Masters In Computer Applications)"

//     if(fullName === "Ayush Kumar" && course === "MCA(Masters In Computer Applications)"){
        
//         const annualFees = 5200000;
//         console.log(`Hello my name is ${fullName} & I Am in Cu and My Course Name is ${course}`);

//     }

//     // console.log("Full Course Fees is :", annualFees);

// }


// console.log("Name :", fullName);
// console.log("Course :", course);



// ++++++++++++ #INTERESTING ++++++++++

console.log(numOne(24));

function numOne(num){
    return num + 1;
}


console.log(addTwo(64));

const addTwo = function(plus){
    return plus + 2;
}


















