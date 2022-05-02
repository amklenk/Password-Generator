  //objects
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsArray = ["!", "~", "?", "'", "\"", "#", "$", "%", "&", ",", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "]", "^", "`", "_", "{", "}"];

//functions
//random index generator
var characterIterator = function () {
  var passResults = [];
  var options = chooseCharacters();
  if (options === null) {
    return;
  }
  for (var i = 0; i < options.passLength; i++) {
    var index = Math.floor(Math.random()*options.charactersArray.length);
    var character = options.charactersArray[index];
    passResults.push(character);
  }
  return passResults;
};

var generateBtn = document.querySelector("#generate");

//function that checks if  x<8, x>=8 and < 128, allows user to input a number, assigned to a variable: this function should use an if, else or such to test if user"s input meets criteria
var writePassword = function () {
    var promptNumbers = window.prompt("How many characters long would you like your password to be? Choose a number between 7 and 129.");
    promptNumbers = parseInt(promptNumbers);
    if (promptNumbers < 8 || promptNumbers > 128) {
      window.alert("Your password can't be that long. Please choose a number between 7 and 129.");
      return writePassword();
    }

    if (isNaN(promptNumbers)) {
      window.alert("Please select a numerical value.")
      return writePassword();
    }
    return promptNumbers;
};


//function that allows user to choose the characters they want to use
var chooseCharacters = function () {
  var passLength = writePassword();
  console.log(passLength);
  var charactersArray = [];
  var promptChooseLowercase = window.confirm("Would you like to use lowercase letters in your password?");
  if (promptChooseLowercase) {
    charactersArray= charactersArray.concat(lowercaseArray);
  };

  var promptChooseUppercase = window.confirm("Would you like to use uppercase letters in your password?");
  if (promptChooseUppercase) {
    charactersArray= charactersArray.concat(uppercaseArray);
    };

  var promptChooseNumbers = window.confirm("Would you like to use numbers in your password?");
  if (promptChooseNumbers) {
    charactersArray = charactersArray.concat(numbersArray);
  };

  var promptChooseSymbols = window.confirm("Would you like to use symbols in your password?");
  if (promptChooseSymbols) {
    charactersArray = charactersArray.concat(symbolsArray);
  };

  if (charactersArray.length === 0) {
  window.alert("You need to pick a type of character to create your password. Click 'Generate Password' to try again!")
  return;
  }
  var returnObj = {passLength, charactersArray}
  return returnObj;
};

//function that writes thes password, allows to happen again by looping back to first function: this function will call upon the random generator and then return the result from that function to the window. Then it should call upon the checking function to start over (onCLick)
function generatePassword() {
  var password = characterIterator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", generatePassword);