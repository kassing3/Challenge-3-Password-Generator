/* 
ACCEPTANCE CRITERIA: 
*  present a series of prompts for password criteria when button is pressed
*  select which criteria to include in the password
*  choose a length of at least 8 characters and no more than 128 characters
*  confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
*  my input should be validated and at least one character type should be selected
*  password is generated that matches the selected criteria
*  password is either displayed in an alert or written to the page

*/

// Assignment code here
var characterLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpperCase = characterLowerCase.toUpperCase();
var characterSpecial = ["!", "#", "$", "$", "%", "&", "'", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "_", "^", "[", "]", "~"];





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
