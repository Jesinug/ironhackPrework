/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
*/

function CodelandUsernameValidation(str) { 

for (let i = 0; i<=userName.length-1; i++);
  if (str.length < 4 && userName.length > 25) {
  return "invalid password";
  } else {
    return "valid password";
  }
}


// keep this function call here 
console.log(CodelandUsernameValidation("jesi");

/*
switch (userName.length >= 4) {
  case [i] typeof != 'string' :
  console.log("invalid password")

  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}