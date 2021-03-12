/*
Have the function CodelandUsernameValidation(str) take the str parameter being 
passed and determine if the string is a valid username according to the 
following rules:

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


function CodelandUsernameValidation(userName) {
  let alertNo = "invalid username!";
  if (userName.length < 4 || userName.length > 25) {
    return alertNo;
  };
  if (!(/[a-zA-Z]/).test(userName.charAt(0))) {
    return alertNo
  };
  if (!(/^(\w|\.|-)+$/).test(userName)) {
    return alertNo
  };
  if (userName.charAt(userName.length - 1) === "_") {
    return alertNo
  };

  // code goes here  
  return str;

};



// keep this function call here 
console.log(CodelandUsernameValidation("jjhsjhjk"));