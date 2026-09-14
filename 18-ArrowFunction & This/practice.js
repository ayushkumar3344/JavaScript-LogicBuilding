//  Javascript This keyword Practice --->

const student = {
    fullName : "Ayush",
    course : 'Mca',
    welcomeMessage : function(){
        console.log(`Welcome, ${this.fullName} and course is ${this.course}`);
    }
}

student.welcomeMessage();