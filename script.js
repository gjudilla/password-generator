// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Variables
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!@#$%^&*()?.<\>|=+:;,[-_]";
  var numbers = "0123456789";

  // Prompt to choose password length
  var passLength = prompt ("Enter password length. Password must be between 8 to 128 characters.");

  // Validate password length
  if (passLength < 8 || passLength > 128 ) {
    alert("Please enter number between 8 and 128.");
    return;
  }

  // Prompt on which character set to include
  var includeUpper = confirm ("Include uppercase letters?");
  var includeLower = confirm ("Include lowercase letters?");
  var includeSpecial = confirm ("Include special characters?");
  var includeNumbers = confirm ("Include numbers?");

// Validate character set was chosen
if (!includeUpper && !includeLower && !includeSpecial) {
  alert("Please choose a character set.");
  return;
}

// Build password based on selections
let allChar = '';
if (includeUpper) {
  allChar += upperCase;
}
if (includeLower) {
  allChar += lowerCase;
}
if (includeSpecial) {
  allChar += specialChar;
}
if (includeNumbers) {
  allChar += numbers;
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



