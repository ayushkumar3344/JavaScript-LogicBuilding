// #Practice Notes ------------->

// -----------------------------------------------------------------------------------
// const todayDate = new Date();
// console.log(todayDate);

// Using all  Get Methods of Date -->

// 1. getDate();
// sol ->
// console.log(todayDate.getDate());


// 2. getDay();
// sol ->
// console.log(todayDate.getDay());


// 3. getMonth();
// sol ->
// console.log(todayDate.getMonth() + 1);


// 4. getFullYear();
// sol ->
// console.log(todayDate.getFullYear());


// 5. getHours();
// sol ->
// console.log(todayDate.getHours());


// 6. getMinutes();
// sol ->
// console.log(todayDate.getMinutes());


// 7. getSeconds();
// sol ->
// console.log(todayDate.getSeconds());


// 8. getMilliseconds()
// sol ->
// console.log(todayDate.getMilliseconds());


// 9. getTime()
// sol ->
// console.log(todayDate.getTime());




// -------------------------------------------------------------------------------------------
// const dateLive = new Date();
// console.log(dateLive);

// Using all  set Methods of Date -->


// 1. setDate();
// sol ->
// dateLive.setDate(24);
// console.log(dateLive.getDate());


// 2. setDate();
// sol ->
// const dateLive = new Date();
// console.log(dateLive);
// dateLive.setMonth(3);
// console.log(dateLive);


// 3.setFullYear();
// sol ->
// const dateLive = new Date();
// console.log(dateLive);
// console.log(dateLive.setFullYear(2030));
// console.log(dateLive);


// 4.setHours();
// sol ->
// const dateLive = new Date();
// console.log(dateLive);
// dateLive.setHours(5,34,51);
// console.log(dateLive);


// 5.setHours();
// sol ->
// const dateLive = new Date();
// console.log(dateLive);
// dateLive.setMinutes(20);
// console.log(dateLive);






// -------------------------------------------------------------------------------------------

// Using all  🌎 UTC Methods of Date -->


// 1. getUTCDate();
// sol ->
// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getUTCDate());


// 2. getUTCMonth();
// sol ->
// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getUTCMonth() + 1);


// 3. getUTCFullYear();
// sol ->
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getUTCFullYear());




// -------------------------------------------------------------------------------------------

// Using all  📝 Formatting Methods of Date -->


// 1. toString();
// sol ->
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());


// 2. toDateString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toDateString());


// 3. toTimeString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toTimeString());


// 4. toISOString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toISOString());


// 5. toLocaleDateString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleDateString());


// 6. toTimeString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate.toTimeString());


// 7. toLocalTimeString()
// sol ->
// let currentDate = new Date();
// console.log(currentDate.toTimeString());
// console.log(currentDate.toLocaleTimeString());




// -----------------> Practice Questions Task <----------------------


// 🟢 Beginner Level ----------->


// 1. Display Current Date and Time
// Create a program that displays the current date and time using Date().
// Sol :
// const currentDate = new Date();
// console.log(currentDate);


// 2. Display Individual Date Values
// Create a program that prints the current:
// Year
// Month
// Day
// Date
// Hours
// Minutes
// Seconds
// Sol :
// let currentWeather = new Date();
// console.log(currentWeather);
// console.log(currentWeather.getUTCFullYear());
// console.log(currentWeather.getMonth());
// console.log(currentWeather.getDay());
// console.log(currentWeather.getDate());
// console.log(currentWeather.getHours());
// console.log(currentWeather.getMinutes());
// console.log(currentWeather.getSeconds());


// 3. Display a Custom Date
// Create a Date object for 15 August 2026 and display it.
// Sol :
// const customDate = new Date(2026, 7, 15);
// console.log(customDate);


// 4. Get the Current Year
// Write a program that prints the current year using getFullYear().
// Sol :
// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getFullYear());


// 5. Find the Current Month
// Use getMonth() to display the current month. Remember that JavaScript months start from 0.
// Sol :
// const currentDate = new Date();
// console.log(currentDate.getMonth());


// 6. Find Day of the Week
// Use getDay() to determine which day of the week today is.
// Sol :
// const currentWeather = new Date();
// const day = currentWeather.getDay();

// let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ]

// console.log(days[day]);


// 7. Create a Digital Clock
// Create a digital clock that displays the current time in this format:
// Sol :
// const currentTime = new Date();
// console.log(currentTime.toLocaleTimeString());




// 🟡 Intermediate Level   ----------->


// 1. Calculate Age
// Ask the user for their birth year and calculate their current age using Date().
// Sol :
// const userBirthYear = prompt("Enter your birth year here :");
// let currentDate = new Date().getFullYear();
// let nowAge = currentDate - userBirthYear;
// console.log(`Your current Age is ${nowAge}`);



// 2. Calculate Age
// Ask the user for their birth year and calculate their current age using Date().
// Sol :
// let birthDate = new Date(2004,6,26);
// let today = new Date();

// let age = today.getFullYear() - birthDate.getFullYear();
// console.log(age);

// let monthDifference = today.getMonth() - birthDate.getMonth()
// console.log(monthDifference);


// if(monthDifference < 0  || (monthDifference === 0 && today.getDate() < birthDate.getDate() )){
//     age--;
// } 

// console.log("Age : ", age);



// 3. Days Until Birthday
// Ask the user for their date of birth and calculate how many days are left until their next birthday.
// Sol :
// let today = new Date();

// let birthday = new Date(
//     today.getFullYear(),
//     11,
//     25
// );

// if (birthday < today) {
//     birthday.setFullYear(today.getFullYear() + 1);
// }

// let difference = birthday.getTime() - today.getTime();

// let days = Math.ceil(
//     difference / (1000 * 60 * 60 * 24)
// );

// console.log("Days until birthday:", days);























































































