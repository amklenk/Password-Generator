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

//functions
//random generator: start with (onClick), this function needs to randomly generate a certain amount of characters from 4 arrays using some kind of loop, maybe switch?
//function that checks if  x<8, x>=8 and < 128, allows user to input a number, assigned to a variable: this function should use an if, else or such to test if user's input meets criteria
//functions that loop through each pool of characters
//function that generates and executes password, allows to happen again by looping back to first function: this function will call upon the random generator and then return the result from that function to the window. Then it should call upon the checking function to start over (onCLick)


//objects
var lowerCaseLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var upperCaseLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["put special characters here"];


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
