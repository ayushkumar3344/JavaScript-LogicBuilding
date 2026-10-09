// ---------------------------------------------->
// DOM Manipulation practice Work Start Here :--->


// const h1 = document.createElement('h1');
// console.log(h1);
// h1.className = "heading"
// h1.id = "main-title"
// h1.style.backgroundColor = "Purple"
// h1.style.padding = '20px';
// h1.style.margin = '15px';
// h1.style.borderRadius = '10px';
// h1.innerText = "Hello, JavaScript";

// document.body.appendChild(h1);


// ----------------------------------------------->
// Target Html Elements And Using DOM Properties -->


// const parentEl = document.querySelector('.parent');
// console.log(parentEl.children);
// console.log(parentEl.children[2].style.backgroundColor = "Orange");
// console.log(parentEl.children[2].style.color = "Black");
// console.log(parentEl.children[2].style.borderRadius = "20px");
// console.log(parentEl.children[2].style.padding = "0px 12px");
// console.log(parentEl.children[2].innerText = "Hello: Javascript");


// ----------------------------------------------->
// Acces FirstChild and LastChild or parent Element  -->

// const parentEl = document.querySelector('.parent');
// console.log(parentEl);
// console.log(parentEl.children);


// const parentEl = document.querySelector('.parent');
// console.log(parentEl.firstElementChild.innerText);
// console.log(parentEl.lastElementChild.innerText);

// const childNodeEl = document.querySelector('.day');
// console.log(childNodeEl);
// console.log(childNodeEl.parentElement);


// ----------------------------------------------->
// here i access and manage ClassList node child and using forEach loop at all -->

// const allDays = document.getElementsByClassName('day')
// // console.log(allDays);

// const arraysDay = Array.from(allDays);
// console.log(arraysDay);

// arraysDay.forEach( (days) => {
//     days.style.backgroundColor = "purple";
//     days.style.padding = '20px 20px'
//     days.style.margin = '20px'
//     days.style.borderRadius = '10px'
//     days.style.cursor = 'pointer'
// } )




// ------------------------------------------------------->
// ------------------------------------------------------->
// ##Practice Task Questions of DOM Manupulation Start here :: 
// DOM Manipulation — 40 Practice Tasks ::


// 🟢 Level 1: DOM Selection & Text — 1–10


// Q1: Select a heading and change its text from "Hello World" to "Welcome to JavaScript".
// Sol ::
// const headingEl = document.querySelector('h1');
// console.log(headingEl);
// headingEl.innerText = 'JavaScript';


// Q2: Select a paragraph and change its text color using JavaScript.
// Sol ::
// const para = document.querySelector('p');
// para.style.color = "yellow"


// Q3: Select an element by its id and change its background color.
// Sol ::
// const paragraph = document.querySelector('#paragraph');
// paragraph.style.backgroundColor = "purple"


// Q4: Select all <p> elements and change their font size.
// Sol ::
// const para = document.querySelectorAll('p');
// console.log(para);
// para.forEach((el) => {
//     el.style.fontSize = '30px'
// })


// Q5: Create a button that changes the text of a paragraph when clicked.
// Sol ::
// function handlePara(){
//     const para = document.querySelector('p');
//     para.style.color = "orange";
// }


// Q6: Create a button that hides a paragraph when clicked.
// Sol ::
// function handlePara(){
//     const para = document.querySelector('p');
//     para.style.display = 'none';
// }


// Q7: Create a button that shows a hidden paragraph when clicked.
// Sol ::
// function handleClose(){
//     const para = document.querySelector('p');
//     para.style.display = 'inline';
// }


// Q8: Create two buttons: Hide and Show. Make them hide/show a <div>.
// Sol ::
// function handlePara(){
//     const para = document.querySelector('p');
//     para.style.display = 'none';
// }

// function handleClose(){
//     const para = document.querySelector('p');
//     para.style.display = 'inline';
// }


// Q9: Create a button that toggles the visibility of a <div> every time it is clicked.
// Sol ::
// const h1 = document.querySelector('h1');

// function handleToggle(){
//     if(h1.style.display === "inline"){
//         h1.style.display = "none"
//     } else{
//         h1.style.display = 'inline';
//     }
// }


// Q10: Create a button that changes a heading between "Light Mode" and "Dark Mode".
// Sol ::
// const h1 = document.querySelector('h1');

// function handleToggle(){
//     if(h1.style.color === 'black'){
//         h1.style.color = 'white';
//     }else{
//         h1.style.color = "black";
//     } 
// }



// 🟡 Level 2: Classes & Styles — 11–20


// Q11: Create a button that adds a CSS class to a paragraph.
// Sol ::
// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     h1.classList.add('newVal')
// })


// Q12: Create a button that removes a CSS class from a paragraph.
// Sol ::
// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     h1.classList.remove('dataSolo')
// })


// Q13: Create a button that toggles a CSS class on a <div>.
// Sol ::
// const h1El = document.querySelector('h1');
// const toggleBtn = document.querySelector('#btn');

// console.log(h1El, toggleBtn);


// toggleBtn.addEventListener('click', () => {
//     h1El.classList.toggle('active')
// })


// Q14: Create a button that toggles a CSS class on a <div>.
// Sol ::

// const h1 = document.querySelector('h1');

// const button = document.querySelectorAll('button');
// console.log(button);

// button[0].addEventListener('click', () => {
//     h1.classList.toggle('red')
// })

// button[1].addEventListener('click', () => {
//     h1.classList.toggle('blue')
// })

// button[2].addEventListener('click', () => {
//     h1.classList.toggle('orange')
// })


// Q15: Create three buttons: Red, Green, Blue. Clicking each button should change the background color of a box.
// Sol ::

// const h1 = document.querySelector('h1');
// const buttons = document.querySelectorAll('.btn');

// buttons[0].addEventListener('click', () => {
//     h1.style.backgroundColor = 'red';
// })

// buttons[1].addEventListener('click', () => {
//     h1.style.backgroundColor = 'green';
// })

// buttons[2].addEventListener('click', () => {
//     h1.style.backgroundColor = 'Blue';
// })


// Q16: Create a button that increases the font size of a paragraph by 2px every time you click it.
// Sol ::
// const para = document.querySelector('#para');
// const btn = document.querySelector('#btn');
// let size = 16;

// btn.addEventListener('click', () => {
//     size = size + 2

//     para.style.fontSize = size + 'px';
// })


// Q17: Create a Dark Mode / Light Mode toggle using classList.
// Sol ::
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    document.body.classList.toggle('active');
    btn.classList.toggle('change')
})





























































































