console.log("script file is linked");
// JavaScript functions
// what are fucntions?
// reference https://javascript.info/function-basics



// difference between an aleart and promt, well an aleart is a pop up that has a notice where as a prmopt has an input field.
// alert("hello");
// prompt = ("hello, how are you");



let user;
function welcome(){
    // let user = prompt('what is your user name');
    console.log('Welcome to our website ' + user);
}
// to make a function work we first have to call/invoke the function
// welcome();


// we can call/envoke funtions inside of other functions

function registerUser(){
    let user = prompt('what is your user name');
    // this will activate the use function once we have entered the prompt.
    welcome();
}

registerUser();




//passing values from one function to another

function greeting(text){
    console.log('Kia ora, thanks for signing up. ' + text);
}
// we can pass data through functions
// in this case we decear the variable text inside of the greeting functions
// the string is being passed into the variable so whats happening behind the scene is that
// let text = 'insert yuour name here';
greeting('insert yuour name here')


function register(){
    let userName = prompt('enter a user name');
    let email = prompt('enter your email');
    greeting("Your user name is " + userName + ". Your email address is " + email);
}
register();

// in this example we are passing data from the register function into the greeting function through variables. The reason we have to do this is because the data inside of a function is unique to itself and can only be accesed from inside. 

// function greeting(name , userEmail, code){
//     console.log('Kia ora, thanks for signing up. Your user name is ' + name + '. Your email address is ' + userEmail + '. Your password is ' + code);
// }

// function register(){
//     let userName = prompt('enter a user name');
//     let email = prompt('enter your email');
//     let password = prompt('enter a password');
//     // here we are inputing the variables data
//     // and transfereing the data values into the variables decleared. so what happening
//     // let name = userName;
//     // let userEmailmail = email
//     // let code = password;
//     greeting(userName, email, password);
// }
// register();

// JavaScript has inbuil functions

// Date();
// console.log(Date());

// console.log();
// is going to give us a flasy value of undefined

// Math.random();
// is going to give us a random number

// Math.max();
// going to give us the largest number

// Math.min();
// will give us the smallest number

// so certin functions that we execute and return wont give us any data such, as a console.log for example


// function maxNumber(){
//     let max = Math.max(1,90);
//     console.log(max);
// };
// maxNumber()
// console.log(maxNumber);


// basically in sort a return function will execute a piece of code and when doing so it will stop an execution of a function and return the given value that we are asking for.
// reference https://www.w3schools.com/JSREF/jsref_return.asp



// activating function through a click event
let example = document.querySelector("#clickMe");
function clickExample(){
    document.body.style.backgroundColor = "#333";
}

example.addEventListener("click", clickExample);
