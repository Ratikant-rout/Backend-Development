//Callbacks Are Mostly Used In Asynchronous Programming

function greet(name,Callbacks){
    const greeting = 'Good Morning ' + name;
    console.log(greeting);
}


function displayGreeting(message){
    console.log(message);
}

greet("Ratikanta",displayGreeting);

//Callback Hell | Pyramid of Doom
//We Should Avoid This