const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = 123456789;
const symbol = "@#$%^&*(){}[]:?/|,.";

const allCharacters = upperCase + lowerCase + numbers + symbol;

function generatePassword () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


while(length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
}
   passwordBox.value = password;
 
}

