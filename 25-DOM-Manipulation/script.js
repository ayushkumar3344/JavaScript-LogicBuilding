// -------> Introduction DOM (Document Object Model) Manipualtion ----------->
// -------------------------------------------------------------------------->



// 1> getElementById
// 3> getAttribute
// 4> setAttribute


// ------> Now we understand the difference about :

// 1> innerText
// 2> innerHTML
// 3> textContent



// ------> 1st is innerText or textContent

// 1> innerText --> only show the text content inside the element.
// 2> textContent --> same as innerText but it show all text content including child node of that that target element.
// 3> innerHTML --> Its Same as innerText but include HTML element inside the Element with all Text Content you can simple change the inner text with adding some HTML functionality.


// ------> DOM Comcepts

// 1> ForEach Loop Done
// 2> Style Properties Done
// 3> Access Intex Element Done


// ------> Now We understand about getElementByClassName <------

// ---> here i understand how classList converted in array using [ Array.from(...Valrable Name) ];



// ------------------------------------------------------->
// --------------------------> Create A New Element In DOM :


// const parent = document.querySelector('.parent');
// console.log(parent.children[2].innerHTML);


// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }
// parent.children[2].style.color = "Orange"
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.day');
// console.log(dayOne.parentElement);
// console.log(dayOne);
// console.log(dayOne.nextElementSibling);

// console.log('NODES :', parent.childNodes);




// ----------------------------------------------->
// ----------------------------------------------->
// ----------------------------------------------->
// ----------------------------------------------->

// Here I Creating A Div Element By only Using Javascript Properties -->

// const div = document.createElement('div');
// console.log(div);
// div.className = "main";
// div.id = Math.floor((Math.random() * 10) + 1);
// div.setAttribute('title','generated-title');
// div.style.backgroundColor = "Purple"
// div.style.padding = '12px';
// div.innerText = "Hello, JavaScript";

// document.body.appendChild(div);
// const addText = document.createTextNode('Hello, JavaScript');
// div.appendChild(addText);


// ----------------------------------------------------->
// ----------------------------------------------------->
// ----------------------------------------------------->

// function handleLang(language){
//     const li = document.createElement('li');
//     li.innerHTML = language;
//     const ul = document.querySelector('.language');
//     ul.appendChild(li);
// }

// handleLang("C++");
// handleLang("Python");
// handleLang("Kotline");
// handleLang("Flutter");
// handleLang("React");

// const paretEl = document.querySelector('.language');
// console.log(paretEl.children);
// paretEl.children[2].style.backgroundColor = "Purple";
// paretEl.children[2].style.borderRadius = "15px";
// paretEl.children[2].style.padding = "5px 20px";
// paretEl.children[2].style.cursor = "pointer";


































































































































