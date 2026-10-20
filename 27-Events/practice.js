// 30 JavaScript Event Handling Practice Tasks 🚀
// ------------------------------------------------>


// ----->
// Level 1: Beginner (1–10)


// 1. Button Click
// Create a button. When clicked, display 'Hello JavaScript!' inside a paragraph.
// Sol :
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert('Hello JavaScript!')
// })


// 2. Change Background Color
// Create a button that changes the webpage background color whenever you click it.
// Sol :
// const btn = document.querySelector('#btn');
// const body = document.querySelector('body');

// btn.addEventListener('click', () => {
//     body.style.backgroundColor = 'Yellow'
// })


// 3. Counter App
// Create Increment and Decrement buttons to increase or decrease a number.
// Sol :
// const number = document.querySelector('#number'),
//       increaseBtn = document.querySelector('#increase'),
//       decreaseBtn = document.querySelector('#decrease')
      

// let count = 0;

// increaseBtn.addEventListener('click', () => {
//     count++;
//     number.innerHTML = count
// }) 

// decreaseBtn.addEventListener('click', () => {
//     count--;
//     number.innerHTML = count
// })


// 4. Show and Hide Text
// Create a button that toggles a paragraph's visibility.
// Sol :
// const para = document.querySelector('#para'),
//       btn = document.querySelector('#btn');
      
// btn.addEventListener('click', () => {
//     para.classList.toggle('hide');
// })
      

// 5. Live Input Preview
// Display the text in an input field inside a paragraph while the user types.
// Sol :
// const textArea = document.querySelector('#space'),
//       para = document.querySelector('#para');
      

// textArea.addEventListener('input', () => {
//     para.textContent = textArea.value
// })


// 6. Character Counter
// Count the number of characters entered into a textarea in real time.
// Sol :
// const textArea = document.querySelector('#space'),
//       para = document.querySelector('#para');

// textArea.addEventListener('input' , () => {
//     para.textContent = textArea.value.length
// })


// 7. Mouseover Effect
// Change a box's background color when the mouse enters it.
// Sol :
// const box = document.querySelector('#heading');

// box.addEventListener('mouseover', () => {
//     box.style.backgroundColor = "yellow"
// })


// 8. Mouseout Effect
// Restore the original box color when the mouse leaves it.
// Sol :
// const heading = document.querySelector('#heading');

// heading.addEventListener('mouseover', () => {
//     heading.style.backgroundColor = 'purple' 
// })

// heading.addEventListener('mouseleave', () => {
//     heading.style.backgroundColor = 'gray'
// })


// 9. Image Switcher
// Change an image when a user clicks a button.
// Sol :
// const image = document.querySelector('#markit'),
//       btn = document.querySelector('#btn');
      
// btn.addEventListener('click', () => {
//     image.src = "https://images.unsplash.com/photo-1789758489727-40dc88d25a62?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D"
// })
      

// 10. Input Value Display
// Create an input and a button. Display the input value only when the button is clicked.
// Sol :
// document.querySelector("#showBtn").addEventListener("click", () => {
//   const value = document.querySelector("#userInput").value;
//   document.querySelector("#result").textContent = value;
// });




// ----------------------------------------------------------------->
// Level 2: Intermediate (11–20)
// Focus: form submission, keyboard events, event objects, and event delegation.



// 11. Login Form Validation
// Check whether the username and password fields are empty when the form is submitted.
// Sol :
// const form = document.querySelector('#loginForm');

// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const username = document.querySelector('#username').value.trim();
//     const password = document.querySelector('#password').value;
//     const message = document.querySelector('#loginMessage');

//     if(!username || !password){
//         message.textContent = "Please Filled Both Field";
//     }else{
//         message.textContent = "Form Submitted";
//     }

// })


// 12. Password Show/Hide
// Add a checkbox that toggles the password input between visible and hidden.
// Sol :
// const passwordField = document.querySelector('#password');
// const checkBox = document.querySelector('#showPassword');

// checkBox.addEventListener('change', () => {
//     passwordField.type = checkBox.checked ? "text" : "password" 
// })


// 13. Keyboard Key Detector
// Display the key pressed by the user using a keyboard event.
// Sol :
// document.addEventListener('keydown', (e) => {
//     let message = document.querySelector('#keyOutput');
//     message.textContent = `Key is ${e.key}`
// })


// 14. Enter Key Submit
// Submit an input value when the user presses Enter.
// Sol :
// const inputEl = document.querySelector('#inputField');

// inputEl.addEventListener('keydown' , (e) => {
//     if(e.key === 'Enter'){
//         let output = document.querySelector('#output');
//         output.textContent = `${inputEl.value}`;
//     }
// })


// 15. Live Word Counter
// Count words entered into a textarea as the user types.
// Sol :
// const textInput = document.querySelector("#textInput");
// const wordCount = document.querySelector("#wordCount");

// textInput.addEventListener("input", () => {
//   const text = textInput.value.trim();

//   const words = text ? text.split(/\s+/) : [];
//   wordCount.textContent = words.length;
// });


// 16. Live Word Counter
// Count words entered into a textarea as the user types.
// Sol :
// document.querySelector("#country").addEventListener("change", (event) => {
//   document.querySelector("#selectedCountry").textContent =
//     event.target.value
//       ? `Selected: ${event.target.value}`
//       : "No country selected";
// });


// 17. Add Items to a List
// Take text from an input and add it to a list when a button is clicked.
// Sol :
// const input = document.querySelector("#itemInput");
// const list = document.querySelector("#itemList");

// document.querySelector("#addBtn").addEventListener("click", () => {
//   const value = input.value.trim();

//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = value;
//   list.appendChild(li);

//   input.value = "";
// });



















































































































































































