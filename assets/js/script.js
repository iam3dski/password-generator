const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}|;:,./<>?";

const generatePassword = (length) => {
const password = [];
for (let i = 0; i < length; i++) {
  password.push(characters[Math.floor(Math.random() * characters.length)]);
}
return password.join("");
};

// Prompt user for password length
const getCharLength = () => {
const charLength = prompt("Enter the number of characters you would like for your password. (Minimum 8 - Maximum 128)");
while (charLength < 8 || charLength > 128) {
alert("You must select a character limit with a minimum of 8 characters, or a maximum of 128.");
charLength = prompt("Enter the number of characters you would like for your password. (Minimum 8 - Maximum 128)");
}
return charLength;
};

// Prompt user for character type
const getCharType = () => {
  const charType = prompt("Would you like to use uppercase, lowercase, or both in your password? (u/l/b)");
  while (charType !== "u" && charType !== "l" && charType !== "b") {
  alert("Please select a valid character type. (u/l/b)");
  charType = prompt("Would you like to use uppercase, lowercase, or both in your password? (u/l/b)");
  }
  if (charType === "u") {
    return characters.toUpperCase();
  } else if (charType === "l") {
    return characters.toLowerCase();
  } else {
    return characters;
  }
};

// Prompt user for special character inclusion
const getSpecialChar = () => {
  const charType = prompt("Would you like to include special characters in your password? (y/n)");
  while (charType !== "y" && charType !== "n") {
  alert("Please select a valid response. (y/n)");
  charType = prompt("Would you like to include special characters in your password? (y/n)");
  }
  if (charType === "y") {
    return true;
  } else {
    return false;
  }
};

// Write password to the #password input
const writePassword = () => {
const password = generatePassword(getCharLength(), getCharType(), getSpecialChar());
const passwordText = document.querySelector("#password");
passwordText.value = password;
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
