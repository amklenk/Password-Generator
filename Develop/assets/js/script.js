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
  //at least one character type has to be selected, if not alert user to go back and cycle through each of the previous character prompts
  //The final function must randomly choose the amount of characters the user sets from the specified arrays/pools of characters
  //password is written to the page
  
  //objects
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsArray = ["!", "~", "?", "'", "\"", "#", "$", "%", "&", ",", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "]", "^", "`", "_", "{", "}"];

//functions
//random index generator
var randomIndex = function (min, max) {
  //fix this! This is copied and pasted from Robot Gladiators
  //generate a random number, and round it down
  var value = Math.floor(Math.random() * (max - min) + min);
  //return that value so we can use it
  return value;
};

//function that checks if  x<8, x>=8 and < 128, allows user to input a number, assigned to a variable: this function should use an if, else or such to test if user"s input meets criteria
var writePassword = function () {
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);
    var promptNumbers = window.prompt("How many characters long would you like your password to be? Choose a number between 7 and 129.");
    promptNumbers = parseInt(promptNumbers);
    if (promptNumbers < 8 || promptNumbers > 128) {
      window.alert("Your password can't be that long. Please choose a number between 7 and 129.");
      writePassword();
    } else if (promptNumbers >= 8 && promptNumbers <= 128) {
    chooseCharacters();
    } else {
      window.alert ("You need to enter a number between 7 and 129. Try again!");
      writePassword();
    }
};


//function that allows user to choose the characters they want to use
var chooseCharacters = function () {
  var charactersArray = [];
  var promptChooseLowercase = window.confirm("Would you like to use lowercase letters in your password?");
  if (promptChooseLowercase) {
    charactersArray.push(lowercaseArray);
  } else {
  };

  var promptChooseUppercase = window.confirm("Would you like to use uppercase letters in your password?");
  if (promptChooseUppercase) {
    charactersArray.concat(uppercaseArray);
  } else {
  };

  var promptChooseNumbers = window.confirm("Would you like to use nummbers in your password?");
  if (promptChooseNumbers) {
    charactersArray.concat(numbersArray);
  } else {
  };

  var promptChooseSymbols = window.confirm("Would you like to use symbols in your password?");
  if (promptChooseSymbols) {
    charactersArray.concat(symbolsArray);
  } else {
  };

  //only takes the first yes and doesn't add the rest, fix this!
  console.log(charactersArray);

//   if (charactersArray.length = 0) {
//   window.alert("You need to pick a type of character to create your password. Try again!")
//   chooseCharacters();
//   }
// characterIterator();
};

writePassword();

// //function that loops through each pool of characters
// var  characterIterator = function () {
//  //password --userPassword?
//   var password = "";
//   //for loop
//   for(var i = 0; i < password.length; i++) {

//   }
// }

// //function that writes thes password, allows to happen again by looping back to first function: this function will call upon the random generator and then return the result from that function to the window. Then it should call upon the checking function to start over (onCLick)
// function generatePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }


//objects (nested array?)
//array for lowercase ketters