// Loop Practice Question Answers --->


// Q1 -> Print All Even Numbers From 0 to 100?
// Sol ->
// for(let i=0 ; i<=100 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }




// Q2 -> Create a game where you start with any Random Game Number. Ask the user to keep guessing the Game Number Until the user enters correct value.
// Sol -> 
// const gameNum = 25;
// let userNum = Number(prompt('Guess the Game Number :'));

// while(userNum !== gameNum){ //game
//     userNum = Number(prompt('You entered wrong number guess again :'))
// }

// console.log("Congraluation you Win This Game -- Wow 🎉🎉🎉🎉");



// ---------------------------------------------------------------------------------->
// ---------------------------------------------------------------------------------->
// ---------------------------------------------------------------------------------->

// #For Loop Practice Question Answers : -->


// Q1 -> Write a program to print all numbers from 1 to 100 that are divisible by 3 but not by 5.
// Sol ->
// for(let i=1 ; i<=100 ; i++){
//     if(i % 3 === 0 && i % 5 !== 0){
//         console.log("that Numbers are divisible by 3 but not by 5",i);
//     }
// }



// Q2 -> Given an array:
// let numbers = [12, 5, 8, 21, 17, 30, 9, 14];
// Use a for loop to find the largest number.
// Sol ->
// let numbers = [12, 5, 8, 21, 17, 30, 9, 14];

// let largest = numbers[0];

// for(let i=1 ; i<=numbers.length ; i++){
//     if(numbers[i] > largest){
//         largest = numbers[i];
//     }
// }

// console.log("Largest Number is :",largest);



// Q3 -> Write a program to calculate the factorial of a number using a for loop.
// Sol ->
// let userNum = Number(prompt('If you want he factorial of any number please type here i will Help you Dear :'));

// let factorial = 1;

// for(let i=1 ; i<=userNum ; i++){
//     factorial = factorial * i;
// }

// console.log(`Factorial of ${userNum} is : ${factorial}`);



// Q4 -> Print the following pattern using nested for loops:
// Sol ->

// for(let i=1 ; i<= 5 ; i++){
    
//     let pattern = "";

//     for(let j=1 ; j<=i ; j++){
//         pattern = pattern + "*"
//     }

//     console.log(pattern);
    
// }



// Q5 -> Given:
// let numbers = [10, 15, 20, 25, 30, 35, 40];
// Use a for loop to calculate the sum of even numbers only.
// Sol ->

// let numbers = [10, 15, 20, 25, 30, 35, 40];

// let sum = 0;

// for(let i=0 ; i<numbers.length ; i++){
//     if(numbers[i] % 2 === 0){
//         sum = sum + numbers[i];
//     }
// }

// console.log(`Total Sum of Even number is : ${sum}`);














