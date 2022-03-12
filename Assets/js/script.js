var generateBtn = document.querySelector("#generate");

// arrays of possible characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var password = "";
  var passwordChar = "";
// prompts user to select password length
  var passwordLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Password must have more than 7 characters!");
    return "";
  }

  if (passwordLength > 128) {
    alert("Password must have no more than 128 characters!");
    return "";
  }

  // creates yes/no prompt choice for lowercase characters 
  var lowercaseChoice = confirm("Would you like some lowercase characters?");

  if (lowercaseChoice) {
    passwordChar += lowercase;
  }

  // creates yes/no prompt choice for uppercase characters
  var uppercaseChoice = confirm("Want uppercase characters?");

  if (uppercaseChoice) {
    passwordChar += uppercase;
  }

  // creates yes/no prompt choice for number characters
  var numberChoice = confirm("A good password needs some numbers. Want to add some?");

  if (numberChoice) {
    passwordChar += numbers; 
  }

  var specialChoice = confirm("You have a good password, but great one has special characters. Want to add that too?");
  
  if (specialChoice) {
    passwordChar += special;
  }

  for (var i = 0; i < passwordLength; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }


  // 1. Prompt the user for the password criteria
  //    a. Password length 8 < 128
  //    b. Lowercase, Uppercase, Numbers, Special
  // 2. Validate the input.
  // 3. Generate password based on criteria
  // 4. Display password to the page.

  return password;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
