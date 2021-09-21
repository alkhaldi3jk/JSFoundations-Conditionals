const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);
//console.log(typeof name)

const firstNumber = parseInt (prompt("please enter the first number:  "));
//console.log(`${firstNumber}` );

if (firstNumber >=0){
    console.log(firstNumber);
}
else {
    console.log("wrong input")
}
//console.log(typeof firstNmber)


const secondNumber = parseInt (prompt("please enter the second number:  "));
//console.log(`${secondNumber}` );
if (secondNumber  >=0) {
    console.log(secondNumber);
}
else{
    console.log("wrong input");
}
//console.log(typeof secondNmber)

const operation = prompt("please choose the operation (+,-,/,*):  ");

if (operation === "+") {
console.log(firstNumber+secondNumber);
}
if (operation === "-") {
    console.log(firstNumber-secondNumber);
    }
if (operation === "*") {
console.log(firstNumber*secondNumber);
}
if (operation === "/") {
    console.log(firstNumber/secondNumber);
}
        



