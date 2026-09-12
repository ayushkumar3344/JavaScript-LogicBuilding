// (This) In JavaScript!!!


const user = {

    fullName : 'Ayush Kumar',
    course : "MCA(Masters In Computer Applications)",

    welcomeMessage : function(){
        console.log(`Hello, ${this.fullName} Welcome to our Website`);
        console.log(this);
        
    }

}


user.welcomeMessage()
user.fullName = "Parmish Verma";
user.welcomeMessage();

console.log(this);
































































































