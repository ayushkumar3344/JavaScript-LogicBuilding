// ---> #OBJECTS <---

// 1> Singleton.
// 2> Object Literals.

// const jsUser = {
//     fullName : "Ayush",
//     age : 20,
//     email : 'kumarayush8117@gmail.com',
//     courseName : 'MCA',
//     isLoggedIn : true,
//     lastLogginDays : ['Monday','Saturday'],
// }

// console.log("Current Age of User is :", jsUser.age);   // Old Method To access Object Values.
// console.log("User Email Is :", jsUser["email"]);    // New Way To Acces Object Values.
// jsUser.courseName = "BBA";
// console.log("Course :", jsUser['courseName']);


// jsUser.greeting = function(){
//     console.log('Hello JS User');
// }

// jsUser.greeting2 = function(){
//     console.log(`Hello Coders, ${this.fullName}`);
// }

// console.log(jsUser.greeting2());





// ------------ #OBJECT VIDEO 2 ------------



// Here I understand how to create object in Singleton Way --->

// const tinder = new Object();
// const tinder = {}

// tinder.fullName = 'Ayush Kuamr'
// tinder.age = 23
// tinder.isLoggedIn = true
// tinder.course = "MCA(Masters in Computer Applications)"

// // console.log(tinder);

// // const regularUser = {
// //     email : "kumarayush8117@gmail.com",
// //     fullName : {
// //         userFullName : {
// //             firstName : "Ayush",
// //             lastName : "kumar",
// //             age : 25,
// //         }
// //     }
// // }

// // console.log(regularUser.fullName?.userFullName.firstName);



// const obj1 = {
//     course : "MCA",
//     roomNo : 345,
//     department : "C",
//     state : "Punjab",
// }

// const obj2 = {
//     fullName : "Ayush Kumar",
//     rollNo : 35,
//     pincode : 176076,
// }

// const obj3 = {
//     isLoggedIn : true,
//     father : "Ram Lal Mishra",
//     mother : "Suman Devi"
// }

// // const returnObject = Object.assign({},obj1,obj2,obj3);
// // console.log(returnObject);


// // Sprad Operator --->
// // const returnObject = {...obj1,...obj2,...obj3};
// // console.log(returnObject);


// const users = [
//     {
//         id : 1,
//         name : "Rupesh",
//         course : "MCA",
//     },
//     {
//         id : 2,
//         name : "Priya",
//         course : "LLB",
//     },
//     {
//         id : 3,
//         name : "Krish",
//         course : "BBA",
//     },
//     {
//         id : 4,
//         name : "Jyoti",
//         course : "B.tech",
//     },
// ]

// users[1].name
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty("fullName"));



// #OBJECT METHODS 

// const collegeStudent = {
//     fullname : "Ayush Kumar",
//     corseName : "MCA (Masters In Computer Application)",
//     isPassOut : false,
//     parentsDetail : {
//         fatherName : "Parveen Kumar",
//         motherName : "Neelam Kumari",
//     }
// }

// console.log(collegeStudent);


// Methods --->

// 1> Object.keys()
// Sol : 
// const keys = Object.keys(collegeStudent);
// console.log("Keys are :",keys);


// 2> Object.values()
// Sol : 
// const values = Object.values(collegeStudent);
// console.log("Values are :",values);


// 3> Object.entries()
// Sol : 
// const result = Object.entries(collegeStudent);
// console.log("Result is :",result);


// 4> Object.fromEntries()
// Sol : 
// const studentInfo = [
//     ['nsme','ayush'],
//     ['age','24'],
// ]

// const output = Object.fromEntries(studentInfo);
// console.log(output);


// 5> Object.assign()
// Sol :
// const obj1 = {
//     fullName : "Ayush Kumar",
//     course : "MBA",
//     loggedIn : true,
// }

// const obj2 = {
//     fullName2 : "Mohit Sharma",
//     course2 : "M.tech",
//     attendence : 100,
// }

// const combineOutput = Object.assign({},obj1,obj2);
// console.log(combineOutput);


// const combinedOutput = {...obj1,...obj2};
// console.log(combinedOutput);


// 6> Object.hasOwn()
// Sol :
// const output = Object.hasOwn(collegeStudent, "fullname");
// console.log(output);


// 7> Object.create()
// Sol :
// const tyotaCar = {
//     carName : "Fortuner",
//     prize : 5000000,
//     color : "Navy Blue",
//     isPowerStaring : true,
//     toalSeats : 7,
//     carDescription(){
//         console.log(`This is a Fortuner car & This car is deliver to Mr. ${this.name} & the Person Email id is ${this.emailID} or Contact no of customer is : ( ${this.contactNo} )`);
//     },
// }

// const customer = Object.create(tyotaCar);
// customer.name = "Tarun Yadav"
// customer.emailID = "kumarayush8117@gmail.com"
// customer.contactNo = 8091077739
// customer.carDescription()

// console.log(customer);






































































