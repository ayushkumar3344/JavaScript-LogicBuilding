// Object Tasks Questions --->

// 🟢 Beginner Level  --->


// Q1 > Create an object representing a student with properties for name, age, and course. Print all three values.
// Sol :
// const student = {
//     name : "Ayush Saklani",
//     age : 22,
//     course : "MCA(Masters In Computer Applications)",
// }

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);


// Q2 > Create a car object with brand, model, and year. Change the year to a different value and print the updated object.
// Sol :
// const car = {
//     brand : "Maruti",
//     model : 2025,
//     year : 2,
// }

// console.log("First Object", car);
// car.year = 4;
// console.log("New Object", car);


// Q3 > Create a person object with name, age, and city. Add a new property called country and print the object.
// Sol :
// const person = {
//     name : "Piyush Agarwal",
//     age : 25,
//     city : "Palampur",
// }

// console.log("Previous Object", person);
// person.country = "India";
// console.log("New Object", person);


// Q4 > Create an object representing a mobile phone. Add properties for brand, price, and color. Then remove the color property.
// Sol :
// const iPhone18 = {
//     brand : "Apple",
//     prize : 130000,
//     color : "Orange",
// }

// console.log('Pervious Object', iPhone18);
// delete iPhone18.color;
// console.log('New Object', iPhone18);


// Q5 > Create a book object with title, author, and price. Check whether the object contains a property called author.
// Sol :
// const book = {
//     title : "The last lesson",
//     author : "Mr. Ayush",
//     prize : 550,
// }

// console.log(Object.hasOwn(book, "author"));


// Q6 > Create an object containing your favorite movie's name, year, rating, and genre. Print only the movie name and rating.
// Sol :
// const movie = {
//     name : "Kaho na Payar Hai",
//     year : 2020,
//     rating : 5,
//     genre : "Voilance",
// }

// console.log(`The Name of the Movie Is ${movie.name} & the Movie have ${movie.rating} Star Rating`);


// Q7 > Create a student object with name, age, and marks. If the marks are greater than or equal to 40, print "Pass"; otherwise print "Fail".
// Sol :
// const student = {
//     name : "Ayush",
//     age : 22,
//     marks : 41,
// }

// if(student.marks >= 40){
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }
 



// 🟡 Intermediate Level  --->


// Q1 > Create an object representing a product with name, price, and quantity. Calculate and print the total price using price × quantity.
// Sol :
// const product = {
//     name : "Sunscreen Cream",
//     price : 120,
//     quantity : 10,
// }

// const totalCost = product.price * product.quantity;
// console.log(`Total Bill Amount is : ${totalCost}`);


// Q2 > Create an object containing five different subjects and their marks. Calculate the total marks obtained by the student.
// Sol :
// const student = {
//     english : 75,
//     math : 46,
//     sanskrit : 65,
//     hindi : 37,
//     sst : 89,
// }

// const OutOf = 400;
// const totalMarks = student.english + student.math + student.sanskrit + student.hindi + student.sst;
// console.log(`Therefore, the Student Scored ${totalMarks} out of ${OutOf}`);

// if(totalMarks >= 300){
//     console.log('Congrates 1st Division');
// } else if (totalMarks > 200  && totalMarks < 300){
//     console.log('2nd Division');
// } else {
//     console.log("3rd Division");
// }


// Q3 > Create a user object containing name, email, and password. Print a message showing the user's name and email without displaying the password.
// Sol :
// const user = {
//     fullName : "Ayush Kumar",
//     email : "kumarayush8117@gmail.com",
//     password : "ayush@176076",
// }

// const message = `User Name is ${user.fullName} and If you want to contact him. His Email ID is : ${user.email}`
// console.log("Message is :" , message);


// Q4 > Create an object representing a bank account with accountHolder, balance, and accountType. Add ₹5,000 to the balance and display the updated balance.
// Sol :
// const bankAccount = {
//     accountHolder : "Ayush",
//     balancs : 21000,
//     accountType : "Saving Account",
// }

// const userDeposit = Number(prompt('Enter your Amount Here'));
// const totalAmount = bankAccount.balancs + userDeposit;

// console.log("Total Amount is : ", totalAmount);


// Q5 > Create an object containing information about a laptop. Write a program that checks whether the laptop has a property named ram.
// Sol :
// const laptopConfig = {
//     brandName : 'Lenovo',
//     prize : 75000,
//     modelDate : 2025,
//     ram : 16,
//     batteryMAH : 9000,
// }

// const result = Object.hasOwn(laptopConfig, "ram");
// console.log("Is RAM Available :" ,result);

// if('ram' in laptopConfig){
//     console.log('Yes Ram Property is Exist on this Laptop Cconfiguration');
// } else {
//     console.log('Property not Exist Now');
// }


// Q6 > Create an object containing employee information: name, salary, department, and experience. Increase the salary by 10% and display the new salary.
// Sol :
// const employeeInfo = {
//     name : 'Kesari Lal Yadav',
//     salary : 35000,
//     department : "B-Block",
//     experience : 5,
// }

// console.log("Previous Salary is :", employeeInfo.salary);
// const newSalary = employeeInfo.salary + (employeeInfo.salary * 25 / 100);
// console.log(`New Pay Scale of ${employeeInfo.name} is : ${newSalary}`);


// Q7 > Create an object representing a shopping cart with three products. Each product should contain a name and price. Calculate the total price of all products.
// Sol :
// const product1 = {
//     name : 'teeth Brush',
//     prize : 120,
// }

// const product2 = {
//     name : 'Water Bottle',
//     prize : 450,
// }

// const product3 = {
//     name : 'Cap',
//     prize : 365,
// }


// const totalCost = product1.prize + product2.prize + product3.prize;
// console.log('Total Cost of All Three Product is :', totalCost);


// Q8 > Create an object representing a student with a nested address object containing city, state, and pincode. Print the student's city and state.
// Sol :
// const studentInfo = {
//     name : 'David Warner',
//     age : 23,
//     course : 'MCA(Masters In Computer Application)',
//     hobbie : 'Cricket',
//     permanentAddress : {
//         city : 'Palampur',
//         state : 'Himachal Pradesh',
//         pinCode : 176076,
//     }
// }

// console.log("City :", studentInfo.permanentAddress.city);
// console.log("State :", studentInfo.permanentAddress.state);



// 🔴 Challenge Level --->


// Q1 > Create an object representing a company with a name, location, and an employees array containing several employee objects. Print the names of all employees.
// Sol :
// const company = {

//     name : 'SkyTeck Solutions',
//     location : 'Banglore',

//     employees : [

//         {
//             name : 'Rahul Sharma',
//             position : 'Web Devloper'
//         },

//         {
//             name : 'Kuldeep Yadav',
//             position : 'Graphic Designer'
//         },

//         {
//             name : 'Mohan Gupta',
//             position : 'Software Engineer'
//         },

//         {
//             name : 'Vinod Khanna',
//             position : 'Data Analyst'
//         },

//     ]

// }


// console.log("Employe1 :", company.employees[0].name);
// console.log("Employe1 :", company.employees[1].name);
// console.log("Employe1 :", company.employees[2].name);


// Q2 > Create an object containing information about several products. Find the product with the highest price.
// Sol :
// const items = {

//     product1 : {
//         name : 'Teeth Brush',
//         prize : 300,
//         expDate : 2027,
//         quantity : 2,
//     },

//     product2 : {
//         name : 'Fan',
//         prize : 5000,
//         expDate : Infinity,
//         quantity : 1,
//     },

//     product3 : {
//         name : 'T-Shirt',
//         prize : 375,
//         size : 'Large Size',
//         quantity : 1,
//     }

// }

// let highestProduct;
// let highestPrize;

// if(items.product1.prize > items.product2.prize &&
//     items.product1.prize > items.product3.prize
// ){
//     highestProduct = items.product1.name;
//     highestPrize = items.product1.prize;
// } else if(
//     items.product2.prize > items.product1.prize &&
//     items.product2.prize > items.product3.prize
// ){
//     highestProduct = items.product2.name;
//     highestPrize = items.product2.prize;
// } else {
//     highestProduct = items.product3.name;
//     highestPrize = items.product3.prize;
// }

// console.log("Highest Product Name is :", highestProduct);
// console.log("Highest Prize is :", highestPrize);


// Q3 > Create a person object containing name, age, and skills (an array). Add a new skill to the skills list and then display all skills.
// Sol :
// const person = {
//     name : 'Rahul Gandhi',
//     age : 31,
//     skills : ['Javascript', 'Python', 'Java', 'Pandas', 'GitHub'],
// }


// console.log('Previous Array List', person.skills);
// const newArray = person.skills.push('C Programming', 'C++', 'Figma Design', 'React');
// console.log('New Array List', newArray);


// for(let skill of person.skills){
//     console.log("Skills Are :",skill);
// }


// Q4 > Create an object representing a bank account with methods for depositing and withdrawing money. Make sure the withdrawal is not allowed when the requested amount is greater than the available balance.
// Sol :
// const bankAccount = {
//     name : 'Akhilesh Dube',
//     branch : 'SBI(State Bank Of India)',
//     totalBalance : 10000,
//     parentsName : {
//         fatherName : 'Rohan Dube',
//         motherName : 'Sakshi Dube',
//     }
// }

// let withdrawalAmount = Number(prompt('Enter your Withdrawel Amount Here :'));
// if(withdrawalAmount < bankAccount.totalBalance){
//     let finalAmount = bankAccount.totalBalance - withdrawalAmount;
//     console.log(`You Withdraw ${withdrawalAmount} Rupees Successfully`);
//     console.log(`Now My Amount Is : ${finalAmount}`);
    
// } else {
//     console.log('Sorry Insufficient Balance');
//     console.log('Current Amount :', bankAccount.totalBalance);
// }


// Q5 > Create a student object containing name, marks for five subjects, and a method that calculates the student's total, average, and grade based on the marks.
// Sol :
// const student = {
//     name : 'Subham Chudhary',
//     marks : {

//         maths : 57,
//         sanSkrit : 76,
//         hindi : 49,
//         science : 89,
//         geranlKnowledge : 88,

//     }
// }

// const totalMarks = student.marks.maths + student.marks.sanSkrit + student.marks.hindi + student.marks.hindi + student.marks.science + student.marks.geranlKnowledge

// const outOf = 600;
// const average = (totalMarks / outOf) * 100;
// console.log(average.toFixed(1));

// if(average >= 80){
//     console.log("Grade A");
// } else if(average >= 60){
//     console.log("Grade B");
// } else if (average >= 40){
//     console.log("Grade C");
// } else{
//     console.log("Fail");
// }





























































































































