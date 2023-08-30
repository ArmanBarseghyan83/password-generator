// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generatePassword = function () {
  var length = prompt(
    "Choose a length of at least 8 characters and no more than 128 characters"
  );
  while (!+length || length < 8 || length > 128) {
    if (!+length) {
      length = prompt("Please provide a number between 8 and 128");
    } else if (length < 8) {
      length = prompt("Must be greater than 8");
    } else {
      length = prompt("Must be less than 128");
    }
  }
  var isUpper = confirm("Include uppercase?");
  var isNumeric = confirm("Include numeric (0123456789)?");
  var isSpecial = confirm(
    "Include special (!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)?"
  );

  var characters = "";
  if (isUpper) {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else {
    characters = "abcdefghijklmnopqrstuvwxyz";
  }

  if (isNumeric) {
    characters += "0123456789";
  }

  if (isSpecial) {
    characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
