// Toggle password visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

const getVal = (passVal) => {
  const passwordToArray = passVal.split(""); // password form user converted to array
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // capital letters array
  const specialCharacters = '{|}~`()*+,-./:;<=>?@[]^_#$%&!"'; //special characters string 1
  const specialCharacters1 = "'"; // special characters string 2
  const specialCharacters2 = specialCharacters + specialCharacters1; // special characters concatenated
  const numberInPassword = "0123456789".split(""); // numbers array
  const specialCharactersToArray = specialCharacters2.split(""); // special characters converted to array

  const checkSpecialCharacters = (passwordArray, specialCharactersArray) =>
    passwordArray.some((item) => specialCharactersArray.includes(item)); // call back function to check special characters in the password

  const checkCapitalLetter = (passwordArray, capitalLettersArray) =>
    passwordArray.some((item) => capitalLettersArray.includes(item)); // call back function to check capital letters in the password

  const checkNumber = (passwordArray, numberArray) =>
    passwordArray.some((item) => numberArray.includes(item)); // call back function to check number in the password

  const callSpecialCharacters = checkSpecialCharacters(
    passwordToArray,
    specialCharactersToArray
  ); // callback function called and boolean value stored

  const callCapitalLetter = checkCapitalLetter(passwordToArray, capitalLetters); // callback function called and boolean value stored

  const callCheckNumber = checkNumber(passwordToArray, numberInPassword); // callback function called and boolean value stored

  const searchForSpace = passVal.search(" "); // checking for spaces

  // password checklist
  // check for minimum 8 letters
  if (passVal.length <= 7) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  }

  // check for not more than 20 letters
  else if (passVal.length > 20) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  }

  // // check for capital letter
  else if (callCapitalLetter == false) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  }

  // check for special characters
  else if (callSpecialCharacters == false) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  }

  // check for checking number
  else if (callCheckNumber == false) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  }

  // check for spaces
  else if (searchForSpace > -1) {
    let passStrength = document.querySelector(".pass-strength").children;
    passStrength[0].style.color = "#ff0000";
    document.querySelector(".pword-input-div").style.borderColor = "#ff0000";
    let paraElement = document.querySelector(".pass-strength").children;
    let spanElement = paraElement[1].children;
    spanElement[0].style =
      "border-color: #ff0000; font-size: 1.5rem; box-shadow: 0 0 10px 0 #ff0000";
  } else {
    if (callSpecialCharacters == true) {
      if (callCapitalLetter == true) {
        if (callCheckNumber == true) {
          if (searchForSpace == -1) {
            if (passVal.length <= 9) {
              let passStrength =
                document.querySelector(".pass-strength").children;
              passStrength[0].style.color = "#fbff00";
              document.querySelector(".pword-input-div").style.borderColor =
                "#fbff00";
              let paraElement =
                document.querySelector(".pass-strength").children;
              let spanElement = paraElement[1].children;
              spanElement[1].style =
                "border-color: #fbff00; font-size: 1.5rem; box-shadow: 0 0 10px 0 #fbff00";
              spanElement[0].style = null;
            } else {
              let passStrength =
                document.querySelector(".pass-strength").children;
              passStrength[0].style.color = "#51ff00";
              document.querySelector(".pword-input-div").style.borderColor =
                "#51ff00";
              let paraElement =
                document.querySelector(".pass-strength").children;
              let spanElement = paraElement[1].children;
              spanElement[2].style =
                "border-color: #51ff00; font-size: 1.5rem; box-shadow: 0 0 10px 0 #51ff00";
              spanElement[0].style = null;
              spanElement[1].style = null;
            }
          }
        }
      }
    }
  }
};

document.getElementById("getform").onsubmit = function values() {
  // this functions gets the input values
  const formValues = document.getElementById("password").value;
  getVal(formValues);
  return false; // prevents reload on form submit
};
