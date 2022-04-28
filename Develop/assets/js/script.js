// Assignment code here
//prompt asks user to input how many characters they want
//the user needs to choose 8 or higher, but no more than 128.
  //if they choose lower, they need to be told to pick again
  //if they choose correctly, move onto next prompt
//The user needs to be asked if they want to to include lowercase letters or not
  //If they choose no, do not access any of those characters
  //If yes, your array of choices must access this array
//The user needs to be asked if they want to include uppercase letters or not
  //If they choose no, do not access any of those characters
  //If yes, your array of choices must access this array
// The user needs to be asked if they want to include numerals or not
  //If they choose no, do not access any of those characters
  //If yes, your array of choices must access this array
//The user needs to be asked if they want to include special characters or not
  //If they choose no, do not access any of those characters
  //If yes, your array of choices must access this array
//The final function must randomly choose the amount of characters the user sets from the specified arrays/pools of characters

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
