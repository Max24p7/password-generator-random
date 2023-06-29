// Assignment code here

// Variables for password criteria types
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()-_=+[]{};:,<>./?";

// Function for generating a random password

// Asks user how long they would like their password to be.
function generatePassword() {
  var pwLength = prompt("What would you like the length of your password to be? (Please choose a number between 8-128)");
  if (pwLength < 8 || pwLength > 128) {
    alert("Try again. Length must be between 8 and 128.");
    return;
  }

  //Establishes the variable to store the password criterias
  var pwCriteria = "";

  //Series of prompts to ask which character types the user would like to use in their password.
  //lowercase prompt
  var includeLowerCase = confirm("Would you like to include lowercase letters?");
  if (includeLowerCase) {
    pwCriteria += lowerCase;
  }

  //uppercase prompt
  var includeUpperCase = confirm("Would you like to include uppercase letters?");
  if (includeUpperCase) {
    pwCriteria += upperCase;
  }

  //number prompt
  var includeNumbers = confirm("Would you like to include numbers?");
  if (includeNumbers) {
    pwCriteria += numbers;
  }

  //symbols prompt
  var includeSymbols = confirm("Would you like to include symbols and special characters?");
  if (includeSymbols) {
    pwCriteria += symbols;
  }

  //Confirms that at least one type was selected
  // ?? not functioning as !== ??
  if (pwCriteria === "") {
    alert("At least one character class must be selected.");
    return;
  }

  //stores generated password
  var password = "";

  //For loop that loops through the length selected and randomly uses the choices from the pwCriteria selection prompts.
  for (var i = 0; i < pwLength; i++) {    //If the password is still less than the length selected, continues running generator.
    var randomize = Math.floor(Math.random() * pwCriteria.length);  //Uses math random to randomly select a character from the criteria that the user selected.
    var characters = pwCriteria[randomize];
    password += characters;
  }

  //Presents the generated password
  return password;
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