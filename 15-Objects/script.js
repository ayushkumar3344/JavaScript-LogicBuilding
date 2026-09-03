// ---> #OBJECTS <---

// 1> Singleton.
// 2> Object Literals.

const jsUser = {
    fullName : "Ayush",
    age : 20,
    email : 'kumarayush8117@gmail.com',
    courseName : 'MCA',
    isLoggedIn : true,
    lastLogginDays : ['Monday','Saturday'],
}

// console.log("Current Age of User is :", jsUser.age);   // Old Method To access Object Values.
// console.log("User Email Is :", jsUser["email"]);    // New Way To Acces Object Values.
// jsUser.courseName = "BBA";
// console.log("Course :", jsUser['courseName']);


jsUser.greeting = function(){
    console.log('Hello JS User');
}

jsUser.greeting2 = function(){
    console.log(`Hello Coders, ${this.fullName}`);
}

console.log(jsUser.greeting2());




























































































