// Javascript Functions -->


// function sayMyName(){
//     console.log('A');
//     console.log('Y');
//     console.log('U');
//     console.log('S');
//     console.log('H');
//     console.log('H');
// }

// sayMyName();
// sayMyName();
// sayMyName();       // CallBacK help to repeat you code and execute on time while user Action.


// function mySum(num1, num2){
//     console.log(num1 + num2);
// }


// function mySum(num1, num2){
//    return num1 + num2;
// }

// const result = mySum(45, 87);
// console.log("Results are :", result);


// function loginUserMessage(username, emailID){
//     return `${username} just logged In || User email ID is : ${emailID}`
// }

// const output = loginUserMessage("Ayush", "kumarayush8117@gmail.com");
// console.log(output);



// How If Else work in Functions --->

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log('Please enter your username!');
//     }else {
//         return `${username} just logged In`
//     }
// }

// const output = loginUserMessage('Dube');
// console.log(output);




// function loginUserMessage(username = "Surya"){
//     if(!username){
//         console.log('Please enter your username!');
//     }else {
//         return `${username} just logged In`
//     }
// }

// const output = loginUserMessage();
// console.log(output);




// ------------> JavaScript Functions With Object & Array In JavaScript <-------------

// function shoppingCart(...num1){
//     return num1;
// }

// const output = shoppingCart(44500, 3672, 8442, 1845, 8245);
// console.log("OutPut is :", output.indexOf(3672))


// How function Receive An Array --->

// const student = {
//     fullName : 'Ayush Kumar',
//     course : 'MCA(Masters In Computer Application)',
//     annualFees : 210000,
//     gmailID : 'kumarayush8117@gmail.com',
// }

// function handleObject(anyObject){
//     console.log(`The Student Name is ${anyObject.fullName} and his gmail ID is : ${anyObject.gmailID} or He is the student of Chandigarh University Course Name is ${anyObject.course} and the annual Prize off Course is ${anyObject.annualFees}`);
// }

// handleObject(student);





// This is the Second way to put an object through the callback function -->

// function handleObject(anyObject){
//     console.log(`The Student Name is ${anyObject.fullName} and his gmail ID is : ${anyObject.gmailID} or He is the student of Chandigarh University Course Name is ${anyObject.course} and the annual Prize off Course is ${anyObject.annualFees}`);
// }

// handleObject({
//     fullName : 'Goutam Buddh',
//     gmailID : 'shivam9345@gmail.com',
//     annualFees : 200000,
//     course : 'BCA'
// });



// Now I Know how the data of an array received on function --->


// // 1 Way -->
// const studentName = ['Shivam Dube', 'Rahul Kishan', 'Vinod Khanna', 'Rohit Agarwal', 'Parshant Mishra', 'Rohit Gulati'];

// function handleArray(students){
//     console.log(`hello my name is ${students[2]} and i am from Hyderabad`);
// }

// handleArray(studentName);



// 2 Way -->
// const studentName = ['Shivam Dube', 'Rahul Kishan', 'Vinod Khanna', 'Rohit Agarwal', 'Parshant Mishra', 'Rohit Gulati'];

// function handleArray(students){
//     return students[4];
// }

// const output = handleArray(studentName);
// console.log(output);




// 3 Way -->
// function handleAnyArray(universities){
//     return universities[3];
// }

// const output = handleAnyArray(['IIT', 'NIT', 'MIT', 'IIT KANPUR', 'IIT HYDERABAAD']);
// console.log(output);










































































































































































