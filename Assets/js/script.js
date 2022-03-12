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
    var numbersChoice = confirm("A good password needs some numbers. Want to add some?");
    var lowercaseChoice = confirm("How about some lowercase letters?");
    var uppercaseChoice = confirm("What about some uppercase letters?");
    var specialChoice = confirm("You have a good password, but great one has special characters. Want to add that too?");
    var responses = {
      length: passwordLength,
      numbersChoice: numbersChoice,
      lowercaseChoice: lowercaseChoice,
      uppercaseChoice: uppercaseChoice,
      specialChoice: specialChoice
    }
// added conditional statements to make sure their choices met the bare minimum  
    if((passwordLength < 8)||(passwordLength > 128))
    alert("Choose number between 8 and 128");
    else if((!numbersChoice)&&(!lowercaseChoice)&&(!uppercaseChoice)&&(!specialChoice))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
};

// function then joins responses and creates password
function generatePassword() {
  var passwordChoices = questionPrompts();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordChoices.numbersChoice) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordChoices.lowercaseChoice) {
    for (var i of lowercase)
      possibleCombo.push(i);
  }
  if (passwordChoices.uppercaseChoice) {
    for (var i of uppercase)
      possibleCombo.push(i);
  }
  if (passwordChoices.specialChoice) {
    for (var i of special)
      possibleCombo.push(i);
  }

  for (var i = 0; i < passwordChoices.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);