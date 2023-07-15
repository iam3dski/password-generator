// Assignment code here
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}\|;:'\",./<>?";

const generatePassword = (length) => {
  const password = [];
  for (let i = 0; i < length; i++) {
    password.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  return password.join("");
};
// Get references to the #generate element

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword(12);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
