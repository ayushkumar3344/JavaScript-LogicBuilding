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




































































































































































































































