
// Assignment code here
var characterLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpperCase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterSpecial = ["!", "#", "$", "$", "%", "&", "'", "'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "_", "^", "[", "]", "~"];


function generatePassword() {
  var createdPassword = ""
  var getCharacterLength = parseInt (prompt("How many characters would you like your password to be?"));
 
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

  var containerForCharacters = [];

  if(getLowerCase === true) {
    containerForCharacters = containerForCharacters.concat(characterLowerCase);
  }

  if(getUpperCase === true) {
    containerForCharacters = containerForCharacters.concat(characterUpperCase);
  }

  if(getNumeric === true) {
    containerForCharacters = containerForCharacters.concat(characterNumeric);
  }

  if(getSpecial === true) {
    containerForCharacters = containerForCharacters.concat(characterSpecial);
  }

  for (i = 0; i < getCharacterLength; i++){
    var randomNum = Math.floor(Math.random() * containerForCharacters.length);
    createdPassword += containerForCharacters[randomNum]
  }

  return createdPassword;

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
