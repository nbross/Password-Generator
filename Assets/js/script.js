var generateBtn = document.querySelector("#generate");

// arrays of possible characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// added function to ask user which options 
function questionPrompts(){
  var isValid = false;
  do {
    var passwordLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
    var askNumbers = confirm("A good password needs some numbers. Want to add some?");
    var askLowerCase = confirm("How about some lowercase letters?");
    var askUpperCase = confirm("What about some uppercase letters?");
    var askSpecial = confirm("You have a good password, but great one has special characters. Want to add that too?");
    var responses = {
      length: passwordLength,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    }
    if((passwordLength < 8)||(passwordLength > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
};

function generatePassword() {
  var password = "";
  var passwordChar = "";



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
