// JTBD: ask for an input and write the input in document
let person = "Ironhacker";
let age;
age = 45;
console.log(age);

// JTBD: to change values and print them each tiempo in console.
//aca defino la variable favouriteFood
let favoriteFood;

//aca inicializo la variable con el valor "steak":
favoriteFood = "Steak";
//y luego imprimo el valor de la variable favouriteFood:
console.log(favoriteFood); // <== "Steak"
//luego cambio el valor de la variable favourtiteFood:
favoriteFood = "Pizza";
//e imprimo nuevamente el valor de la variable favouriteFood (que cambió):
console.log(favoriteFood); // <== "Pizza"

//NUMBER DATA TYPE: %
// 4 / 2 = 2
console.log(4 / 2);
//With a remainder of 0
console.log(4 % 2);

// 7 / 2 = 3.5
console.log(7 / 2);
//With a remainder of 1
console.log(7 % 2);

// If a number modulus other number is equal to 0, it is a multiple of "other number"

// 8 is indeed a multiple of 2:
console.log(8 % 2 === 0);
// 9 is NOT a multiple of 2:
console.log(9 % 2 === 0);


// += ADDING ASSIGNMENT OPERATOR
let myAge = 25;

myAge += 1;
console.log(myAge);

// EXPRESSIONS Exercise
const expressionOne = ((2 * 2) + 5) * 6;
// console.log(expressionOne);

const expressionTwo = ((2 * 2) + (5 * 3)) - 5;
// console.log(expressionTwo);

const expressionThree = (5 * 5) / (5 * 5);
// console.log(expressionThree);

const expressionFour = 5 * 5 - 5 * 4;
// console.log(expressionFour);


// STRINGS //
const country = "USA";
console.log("The country is", country);
//OR console.log(`The country is ${country}`);

const otherCountry = 'Spain';
console.log("The otherCountry is ", otherCountry);
//OR IDEM

let name = "Ironhacker";
console.log("The name is", name);
//OR IDEM
let username = 'ironhack123';
console.log("The username is", username);

let superSecretPassword = "pa$$w0rd_";
console.log("Shhhh: ", superSecretPassword);

//string / CONCATENATIONS

let emptyContainer = "";

emptyContainer += "Hello there, student!";
// += is equivalent to saying:
// emptyContainer = emptyContainer + "Hello there, student!";
console.log(emptyContainer);

// error case -
// At this moment the value of the emptyContainer is "Hello there, student!"
emptyContainer + " How are you?";
// Forget it, "Hello there, student! How are you?" will not appear in our console...
// We didn't reassign the variable value with `+=`
console.log(emptyContainer);

// If we want it to console "Hello there, student! How are you?",
// we need to have the following: emptyContainer += " How are you?";

//====================================== string.length
let studentID = 3100;
console.log(`${emptyContainer} You are stundent number ${studentID} CONGRATS and welcome!`);
console.log("Oh oh... Type mistake sorry.");
console.log(`You are student number ${studentID -= 1000}.`);
console.log(studentID);



//=====================================.charAt(n) method
let myStreet = "Carrer de la Llacuna"
console.log(myStreet.charAt(0)); // => C
console.log(myStreet.charAt(1)); // => a
console.log(myStreet.charAt(8)); // => e
console.log(myStreet.charAt(13)); // => L

//====================================.indexOf(substring)
const favoritePhrase = "Don't be evil";

console.log(favoritePhrase.indexOf("Don't")); 
// => 0

console.log(favoritePhrase.indexOf("e")); 
// => 7 because indexOf prints the FIRST occurance

console.log(favoritePhrase.indexOf("z")); 
// -1 since it's not found

//=====================================.includes()
console.log("dog".includes("og")); // => true
console.log("Dog".includes("do")); // => false since it's a case sensitive
console.log("Hippopotamus".includes("pop")); // true

// We can pass an optional second argument to tell the method where to start
console.log("Hippopotamus".includes("Hip", 1)); // => false

//=====================================.substring(start, end)
let str = "ironhack";

let substr1 = str.substring(1, 4);
console.log(substr1);  // => ron

let substr2 = str.substring(4, 8);
console.log(substr2); // => hack

let substr3 = str.substring(5);
console.log(substr3); // => ack

let substr4 = str.substring(11);
console.log(substr4); // => ""

// ====================================.slice(star, end)

let statement = "I am the Ironhacker and I can't wait for this course to start!!!";

// it is zero indexed ==> starts with zero
let test1 = statement.slice(0, 19);
console.log(test1); // => I am the Ironhacker

// if the second parameter is not passed, it will capture 
// from the character found on the position that corelates with passed number 
// to the end of the string
let test2 = statement.slice(24);
console.log(test2); // => I can't wait for this course to start!!!

// if negative nuber is passed, the count starts from the end of the string
let test3 = statement.slice(-8);
console.log(test3); // => start!!!
