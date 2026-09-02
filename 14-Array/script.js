// ++++++++++ Array In Javascript +++++++++++




// #ARRAY :-

// const myArr = [0, 1, 2, 3, 4, 5, 6]
// const myHeroes = ["IronMan", "SaktiMan", "SpiderMan", "HanuMan"]
// const myArr2 = new Array(4, 7, 3, 3, 8, 3)

// console.log(myArr[0]);



// #ARRAY METHODS :-

// const myArr = [0, 1, 2, 3, 4, 5, 6]

// myArr.push(7, 8, 9, 10);
// console.log("Result is :", myArr);
// console.log(myArr.length);


// myArr.pop();
// console.log(myArr);

// myArr.unshift(0);   // 0 Added on Starting
// myArr.shift()   // 0 Removed

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice | splice :-

// console.log("A",myArr);
// console.log(myn1);
// console.log("B",myArr);

// const myn1 = myArr.slice(1,4);
// const myn2 = myArr.splice(1,4)
// console.log(myn1);
// console.log(myn2);



// ---------------------------------------------------->
// Array Methods Practice --------------------->


// 1> push() --> It help to add more items in given array.
// Sol : 
// const fruits = ['Graphes', 'Bnana', 'Mango', 'Orange'];
// const count = fruits.push('Litchi', 'Pineapple', 'SitaFal')
// console.log(fruits);
// console.log(count);


// 2> pop() --> It help to remove last datatype in given array.
// Sol :
// const cities = ['Ayush', 'Rahul', 'Preeti', 'Jyoti', 'Pooja'];
// const result = cities.pop();
// console.log(cities);


// 3> shift() --> It help to remove first datatype in given array.
// Sol :
// const cities = ['Palampur', 'Hamirpur', 'JoginderNagar', 'Jaipur', 'Jaisinghpur'];
// console.log(cities);
// const newCities = cities.shift();
// console.log(cities);


// 4> unshift() --> It help to add more items on starting in given array.
// Sol :
// const states = ['Himachal Pradesg', 'Uttrakhand', 'Punjab', 'Ladakh'];
// console.log(states);
// const result = states.unshift('Jammu & Kshmir', 'Lahaul Spiti');
// console.log(states);


// 5> slice() --> It help to cut item according to index but not accept last index in given array.
// Sol :
// const fullName = ['Ayush', 'Shivam', 'Rahul', 'Raghav', 'Vishnu', 'Partigya'];
// console.log(fullName.slice(1,4));


// 6> splice() --> It help to cut item according to index it accept last index in given array.
// Sol :
// const fullName = ['Ayush', 'Shivam', 'Rahul', 'Raghav', 'Vishnu', 'Partigya'];
// console.log(fullName.splice(1,4));


// 7> includes() --> this method identify this value is present on givent array or not.
// Sol :
// const fullname = ['Ayush', 'Rahul', 'Madhav', 'Ravi', 'Gopal'];
// console.log(fullname.includes('Ayush'));


// 8> indexOf() --> this method help to find the current index of given array DataType.
// Sol :
// const cities = ['Palampur', 'Hamirpur', 'Rampur', 'Shimla', 'JawalaJi', 'Kedarnath']
// console.log(cities.indexOf('Shimla'));








// ---------------------- #JavaScript Video 2 ----------------------------------------


// const marvel_Heroes = ['SpiderMan', 'Flash', 'IronMan', 'Thor'];
// const indian_Heroes = ['Saktiman', 'FlyingJatt', 'SuperMan'];

// // const newArr = marvel_Heroes.concat(indian_Heroes);
// // console.log(newArr);


// // #Spreat Operator :->

// const all_new_heroes = [...marvel_Heroes,...indian_Heroes];
// // console.log(all_new_heroes);
// const another_Array = [1, 2, 3, [4, 5, 6], 4, 5, [10, 12 , 14], 6];

// const realAnother_array = another_Array.flat(Infinity)
// console.log(realAnother_array);


// console.log(Array.from('Ayush'));
// console.log(Array.from({
//     fullName : 'Vinod',
// }));    // Interesting...........


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));

// console.log(all_new_heroes);



// Imortant methods convert normal data into array Format -->

// ...Array1     <--Spread Operator.
// flat()        <--Convert nested Array into Normal simple Readable array.
// from()        <--convert simple string into an array. 
// of()          <--it help to convert simple declared variables into an array format.












































 