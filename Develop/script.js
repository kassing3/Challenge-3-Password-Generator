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
var characterUpperCase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterSpecial = ["!", "#", "$", "$", "%", "&", "'", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "_", "^", "[", "]", "~"];
var createdPassoword = ""


function generatePassword() {
  var getCharacterLength = parseInt (prompt("How many characters would you like your password to be be?"));
 
  if (getCharacterLength < 8 || getCharacterLength > 128) {
    alert("Error: The password characters must be at least 8 and no greater than 128");
    showConfirm();
  } else {
    console.log(getCharacterLength)
  };

  var getLowerCase = confirm("Would you like to include lowercase characters?")
  var getUpperCase = confirm("Would you like to include uppercase characters?");
  var getNumeric = confirm("Would you like to include numeric characters?");
  var getSpecial = confirm("Would you like to include special characters?");


  if  (getLowerCase === true) {
    for (i = 0; i < getCharacterLength; i++){
      createdPassoword = createdPassoword += characterLowerCase[i]
    }
  } else if (getLowerCase === true &&  getUpperCase === true) {
    for (i = 0; i < getCharacterLength / 2; i++){
      createdPassoword = createdPassoword += characterLowerCase[i] += characterUpperCase[i]
    }
  } else if (getLowerCase === true &&  getUpperCase === true && getNumeric === true) {
    for (i = 0; i < getCharacterLength / 3; i++){
      createdPassoword = createdPassoword += characterLowerCase[i] += characterUpperCase[i]
    }
  }

}
  



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
