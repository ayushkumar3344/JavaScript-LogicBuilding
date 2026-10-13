// Practice Again That Project --------->


// -------------------------->
// Targate HTML Element --->

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const text = document.querySelector('#text');

for(let i=0 ; i<buttons.length ; i++){
    
    buttons[i].addEventListener('click' , (e) => {

        console.log(e.target.id);

        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            text.textContent = 'Green color Added';
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            text.textContent = 'White color Added';
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            text.textContent = 'Blue color Added';
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            text.textContent = 'Yellow color Added';
        }
        

    })

}









































































































































































































