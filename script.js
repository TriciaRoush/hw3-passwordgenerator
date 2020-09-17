// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Declaring variables
var upperCaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var numberCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolCharacter = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|',';', ':', '<', '>', ',', '.', '/', '?'];
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumberCharacter;
var confirmSymbolCharacter;
var passwordResult = "";

//Defining the function
function generatePassword() {
    //Length promt with loop
    var confirmLength = prompt("How many characters does your password require?");
while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8 - 128 chracters.  Please try again.");
    var confirmLength = prompt("How many characters does your password require?");
}
//Character prompts with loop
var confirmUpperCase = confirm("Click OK if you wish to include an UPPER CASE LETTER in your password.");
var confirmLowerCase = confirm("Click OK if you wish to include a LOWER CASE LETTER in your password.");
var confirmNumberCharacter = confirm("Click OK if you wish to include a NUMERIC CHARACTER in your password.");
var confirmSymbolCharacter = confirm("Click OK if you wish to include a SYMBOL CHARACTER in your password.");
while (confirmUpperCase === false ||
    confirmLowerCase === false ||
    confirmNumberCharacter === false ||
    confirmSymbolCharacter === false) {
        alert("These four characters are requirements of a secure password. Please begin again.");
        var confirmUpperCase = confirm("Click OK if you wish to include an UPPER CASE LETTER in your password.");
        var confirmLowerCase = confirm("Click OK if you wish to include a LOWER CASE LETTER in your password.");
        var confirmNumberCharacter = confirm("Click OK if you wish to include a NUMERIC CHARACTER in your password.");
        var confirmSymbolCharacter = confirm("Click OK if you wish to include a SYMBOL CHARACTER in your password.");
    }
    //Combines confirmed results
if (confirmUpperCase) {
    passwordResult = passwordResult.concat(upperCaseCharacter);
}
if (confirmLowerCase) {
    passwordResult = passwordResult.concat(lowerCaseCharacter);
}
if (confirmNumberCharacter) {
    passwordResult = passwordResult.concat(numberCharacter);
}
if (confirmSymbolCharacter) {
    passwordResult = passwordResult.concat(symbolCharacter);
}
console.log(passwordResult);
//Renders password 
var randomPassword = "";
for (var i=0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordResult[Math.floor(Math.random() * passwordResult.length)];
    console.log(randomPassword);
}
return randomPassword;
}


