  //objects (arrays for each type of character)
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsArray = ["!", "~", "?", "'", "\"", "#", "$", "%", "&", ",", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "]", "^", "`", "_", "{", "}"];

//functions
//random index generator that creates a joined string of characters that match the user's length and character choices
var characterIterator = function () {
  var passResults = [];
  var optionsChosen = chooseCharacters();
  if (optionsChosen === null) {
    return;
  }
  for (var i = 0; i < optionsChosen.passLength; i++) {
    var indexEachCharacter = Math.floor(Math.random()*optionsChosen.charactersArray.length);
    var passwordCharacters = optionsChosen.charactersArray[indexEachCharacter];
    passResults.push(passwordCharacters);
  }
  return passResults = passResults.join("");
};

var generateBtn = document.querySelector("#generate");

//function that checks if the user input is <8, >=8 and <128
var writePassword = function () {
    var passLength = window.prompt("How many characters long would you like your password to be? Choose a number between 7 and 129.");
    passLength = parseInt(passLength);
    if (passLength < 8 || passLength > 128) {
      window.alert("Your password can't be that long. Please choose a number between 7 and 129.");
      return writePassword();
    }

    if (isNaN(passLength)) {
      window.alert("Please select a numerical value.")
      return writePassword();
    }
    return passLength;
};


//function that allows user to choose the characters they want to use and creates an array with those choices
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

//function that generates the password using the joined string from the iterator
function generatePassword() {
  var password = characterIterator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//event listener
generateBtn.addEventListener("click", generatePassword);