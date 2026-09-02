// Practice Tssk Questions -->


// 🟢 Beginner ------>


// Q1> Create an array of 5 numbers. Add a new number to the end of the array and print the updated array.
// Sol :
// const userArray = [0, 1, 2, 3, 4, 5];
// const output = userArray.push(6, 7, 8);
// console.log(userArray);


// Q2> Create an array of 5 fruits. Add "Mango" to the beginning of the array.
// Sol :
// const markitFruits = ['Apple', 'Banana', 'Graphes', 'Orange', 'PineApple'];
// const output = markitFruits.unshift('Mango');
// console.log(markitFruits);


// Q3> Given the array:
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Remove the last fruit and print the updated array.
// Sol :
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let output = fruits.pop();
// console.log(fruits);


// Q4> Given the array:
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Given the same array, remove the first fruit and print the updated array.
// Sol :
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let output = fruits.shift();
// console.log(fruits);


// Q5> Given:
// let numbers = [10, 20, 30, 40, 50];
// Find the largest number in the array.
// Sol :
// let numbers = [10, 45, 23, 89, 12, 67];
// let largest = Math.max(...numbers);
// console.log(largest);





// ---------> 20 Array Task Questions For Logic Building <--------


// Q1> Create an array of five fruits. Add one new fruit at the end of the array.
// Sol :
// const fruits = ['Apple', 'Mango', 'Graphes', 'PineApple', 'Litchi'];
// fruits.push('Bnana')
// console.log(fruits);


// Q2> Create an array of five numbers. Remove the last number from the array and display the removed value.
// Sol :
// const numbers = [0, 1, 2, 3, 4, 5];
// const removeValue = numbers.pop();
// console.log("Removed Number :",removeValue);
// console.log(numbers);


// Q3> Create an array of five student names. Remove the first student from the array
// Sol :
// const studentsName = ['Ayush', 'Vinod', 'Priya', 'Shagun', 'Shilpa'];
// studentsName.shift();
// console.log(studentsName);


// Q4> Create an array of three colors. Add two new colors at the beginning of the array.
// Sol :
// const colors = ['Red', 'Blue', 'Green'];
// colors.unshift('Purple', 'Orange')
// console.log(colors);


// Q5> Given an array of numbers, create a new array containing only the elements from index 1 to index 4 without changing the original array.
// Sol :
// const numbers = [45, 73, 63, 63, 95, 23, 63, 74];
// const output = numbers.slice(1,4);
// console.log(output);


// Q6> Given an array of fruits, remove two elements starting from index 2 and display the updated array.
// Sol :
// const fruits = ['Apple', 'Mango', 'Graphes', 'PineApple', 'Litchi', 'Papaya', 'Onion'];
// const newArrayFruits = fruits.splice(2,2)
// console.log(fruits);


// Q7> Given an array of programming languages, check whether "JavaScript" exists in the array.
// Sol :
// const languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'Kotlin'];
// console.log("Result is :", languages.includes("JavaScript") );


// Q8> Given an array of numbers, find the position of the first occurrence of number 50.
// Sol :
// const numbers = [45,87,63,83,64,24,85];
// console.log("Index No is :", numbers.indexOf(83));


// Q9> Create an array of numbers and add three new numbers at the end in one operation.
// Sol :
// const numbers = [45,87,63,83,64,24,85];
// numbers.push(99,23,19);
// console.log(numbers);


// Q10> Create an array of names and remove the last two names one by one. Display the final array.
// Sol :
// const studentNames = ['Ayush', 'Goutam', 'Priya', 'Kashav', 'Rajpal', 'Mohal', 'Gopal'];
// studentNames.pop();
// studentNames.pop();
// console.log("New Array is :",studentNames);



// Next 10 Practice Question Start :

// Q11> Given an array of cities, remove the first city and then add a new city at the beginning.
// Sol :
// const cities = ['Palampur', 'Jaipur', 'Hamirpur', 'Rampur', 'Daharampur', 'Gopalpur'];
// cities.shift();
// cities.unshift('JaisinghPur');
// console.log(cities);


// Q12> Given an array of numbers, replace two elements starting from index 1 with two new numbers.
// Sol :
// const numbers = [45,87,63,83,64,24,85];
// const newData = numbers.splice(1,2,788,959);
// console.log("New Array is :" , numbers);


// Q13> Create a copy of an existing array and add a new element to the copied array without modifying the original array.
// Sol :
// const numbers = [45,87,63,83,64,24,85];
// const newNumbers = [...numbers];
// newNumbers.push(45,64);
// console.log("First Array :" , numbers);
// console.log( "NewArray:", newNumbers);


// Q14> You have two arrays:
// ["HTML", "CSS"]
// ["JavaScript", "React"]
// Create one new array containing all four elements.
// Sol :
// const array1 = ["HTML", "CSS"];
// const array2 = ["JavaScript", "React"];
// const newArray = [...array1,...array2];
// console.log(newArray);


// Q15> Given a nested array:
// [[1, 2], [3, 4], [5, 6]]
// Convert it into a single-level array.
// Sol :
// let dataArray = [[1, 2], [3, 4], [5, 6]];
// let output = dataArray.flat();
// console.log("Simple Array is :", output);


// Q16> Given a deeply nested array containing numbers, convert it into a completely single-level array.
// Sol :
// const nestedArray = [[1, 2], [3, 4], [5, 6]]
// const output = nestedArray.flat(Infinity);
// console.log(output);


// Q17> Create an array containing 5 repeated values using a built-in Array technique.
// Sol :
// const array = Array.of('hello','hello','hello','hello','hello');
// console.log(array);


// Q18> Given an array of names, check whether "Ayush" exists. If it exists, find its position as well.
// Sol :
// const names = ['Ayush', 'Shivam','Partik','Rahul','Priya','Gopal'];
// const output = names.includes('Ayush');
// console.log(output,"Index of Ayush is :",names.indexOf('Ayush'));


// Q19> You have an array of shopping items. Add two items at the end, remove the first item, add one item at the beginning, remove one item from the middle, and finally create a separate copy of the resulting array.
// Sol :
// const cartItems = ['Teeth Brush','Soap','SuitCase','Kitchen Grousery','Tool kit','Toys'];
// const additems = cartItems.push('Clothes','Cycle');
// const removeFirst = cartItems.shift();
// const addStatingItem = cartItems.unshift('Toy Gun');
// const removeMiddleItem = cartItems.splice(2,2);

// const resultArray = [...cartItems];

// console.log("Original Array :",cartItems);
// console.log("Copy Array",resultArray);
























































