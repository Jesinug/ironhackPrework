/*
//  NOT
let doesCode = true;
if (!doesCode){
  console.log("Ironhack is right place to be!");
}

// AND
let lovesParty = true;
if (doesCode && lovesParty){
  console.log("You seem to be an Ironhacker!");
}

// OR
let framework = "Express"
if (doesCode && (framework === "Express" || framework === "React")){
  console.log("You are a smart developer!");
}

//  IF..ELSE
// 8TO SEE HOW THIS EXAMPLE WORKS, UNCOMMENT OUT THE FOLLOWING LINE):

const fruit  = prompt ("Enter the fruit name:");
let type = "";

if (fruit === "pear" || fruit === "apple") {
  type = "pome";
} else if (fruit === "peach" || fruit === "coconut") {
  type = "drupe";
} else if (fruit === "strawberry" || fruit === "blueberry" || fruit === "blackberry") {
  type = "berry";
} else if (fruit === "beans" || fruit === "peas") {
  type = "legumes";
} else {
  type = "other";
}

console.log(`${fruit} is type of: ${type}.`);
*/

//  SWITCH CASE

let pet = "dog";

switch (pet) {
  case "cat":
    console.log("I will be break a lot of things but hey, I'm adorable ... ")
    break;
  case "dog":
    console.log("I will be very annoying but I'm your best friend ... ")
    break;
  case "hamster":
    console.log("I will be impossible to find but I'm reeeeaaaally cute ... ")
    break;
  default:
    console.log("I'm a special pet!")
    break;
}

console.log("=========== TIME TO PRACTICE ===========");
// JS EX- Boolenas and conditional statements.
// Define two string variables and compare them so you can print out which one has more characters, or they have an equal number of characters.

let countChar1= "Vuelve el perro arrepentido";
let countChar2= "con el hocico cansado";

let char1Length = countChar1.length;
let char2Length = countChar2.length;

console.log(char1Length);
console.log(char2Length);

if (char1Length > char2Length) {
  console.log(countChar1)
} else if (char1Length < char2Length) {
  console.log(countChar2)
} else {
  console.log("They has equal length: " + (char1Length));
}

//Given the word, check if it exists in the given sentence and print out if it does or it doesn’t: 
let word = 'web';
let sentence = 'I enrolled Ironhack because I love web development.';
console.log(sentence);

if (sentence.includes(word)) {
  console.log(`the word "${word}" it is included in the sentence`);
} else {
    console.log(`the word "${word}" it is not included in the sentence`);
}

// Given the number, print if the number is odd or even:

let num = 219;

if (num % 2 == 0) {
  console.log(`Number ${num} is even`);
  } else {
  console.log(`Number ${num} is odd`); 
 } 


//Given the year, print out the century:
// 2019; // => 21
// 111; // => 2
// 44; // => 1*/

let playWithYears = 1903;

if (playWithYears >= 2000) {
  console.log("21st century");
} else if (playWithYears >= 1900 && playWithYears < 2000) {
   console.log("20th century");
} else if (playWithYears <= 1899) {
   console.log("game over for me");
}

// LOOPS AND ITERATIONS
//My first for (count down)

for (let i = 10; i >= -1; i--){
    if (i === -1){
      console.log("Boom!");
      break;
    } else {
      console.log(i);
    }
  }

//TO END A LOPP EXECUTION EARLY: BREAK KEYWORD + SOME CONDITION
for (let i = 1; i <= 30; i++){
    if (i === 21){
      console.log("TWENTY ONE! Black Jack, dale!");
      break;
    } else {
      console.log(i);
    }
  }
//TO SKIP AN ITERATION IN A LOOP AND CONTINUE TO THE NEXT: CONTINUE KEYWORD + SOME CONDITION
  for (let i = 1; i <= 30; i++){
    if (i % 3 === 0) { 
      continue; 
    }
    console.log(i);
  }

  console.log("=========== TIME TO PRACTICE ===========");

//print the numbers 1 through 50,
for (let i = 1; i <= 30; i++) {
console.log(i);
}

// if the number is divisible by 5, skip it,
for (let i = 1; i <= 30; i++) {
  if (i % 5 != 0) {
    console.log(i);
  }
}

// if the number is divisible by 10 or 15, print “Donkey!”,
for (let i = 1; i <= 30; i++) {
  if (i % 10 == 0 || i % 15 == 0)   {
    console.log("Donkey!");
  } else {
    console.log(i);
  }
}

// if the number is not divisible by 2 and the previous number is divisible by 10, print “Monkey!”.*/
for (let i = 1; i <= 30; i++) {
    if (i % 2 != 0 && (i-1) % 10 == 0)   {
      console.log("Monkey!");
    } else {
      console.log(i);
    }
  }

//FOR EACH LOOP: we have to options here...

let animalArray = [
    'dog',
    'cat',
    'rabbit',
    'hamster',
    'snake'
]

// option 1 - ES5 (still in use so good to know):
// animal is just a placeholder, can be any word
animalArray.forEach(function(animal){
    console.log(`option 1: ${animal}`);
  });
  
  // option 2 - ES6 (new and cool way that uses arrow function ( => ) 
  //We will talk about this in the course
  // arrayElement is just a placeholder, can be any word
  animalArray.forEach(arrayElement => {
    console.log(`option 2: ${arrayElement}`);
  });
