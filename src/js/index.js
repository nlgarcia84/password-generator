import '../css/styles.css';

const displayTextElement = document.getElementById('displayText');
const lengthValueElement = document.getElementById('lengthValue');
const inputRangeElement = document.getElementById('range');
const formElement = document.getElementById('form');
const submitButtonElement = document.getElementById('submitButton');
const checkUpperCaseElement = document.getElementById('checkUpperCase');
const checkLowerCaseElement = document.getElementById('checkLowerCase');
const checkNumbersElement = document.getElementById('checkNumbers');
const checkSymbolsElement = document.getElementById('checkSymbols');

const allowedCharacters =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';
const allowedLettersUpperLower =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const allowedLowerLetters = 'abcdefghijklmnñopqrstuvwxyz';
const allowedNumbers = '1234567890';
const allowedSymbols = '+-.,!"·$%&/()=?{}';
let password = '';

let passwordLength = inputRangeElement.value;
lengthValueElement.textContent = passwordLength;

const setPasswordLength = () => {
  passwordLength = inputRangeElement.value;
  lengthValueElement.textContent = passwordLength;
};

const generatePassword = () => {
  password = '';
  if (checkUpperCaseElement.checked && checkLowerCaseElement.checked) {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(
        Math.random() * allowedLettersUpperLower.length
      );
      const randomCharacter = allowedLettersUpperLower.charAt(randomNumber);
      password += randomCharacter;
    }
  } else if (checkUpperCaseElement.checked || checkLowerCaseElement.checked) {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(
        Math.random() * allowedLowerLetters.length
      );
      const randomCharacter = allowedLowerLetters.charAt(randomNumber);
      password += randomCharacter;
    }
  } else if (checkNumbersElement.checked) {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * allowedNumbers.length);
      const randomCharacter = allowedNumbers.charAt(randomNumber);
      password += randomCharacter;
    }
  } else if (checkSymbolsElement.checked) {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * allowedSymbols.length);
      const randomCharacter = allowedSymbols.charAt(randomNumber);
      password += randomCharacter;
    }
  } else if (checkSymbolsElement.checked) {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * allowedSymbols.length);
      const randomCharacter = allowedSymbols.charAt(randomNumber);
      password += randomCharacter;
    }
  } else {
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
      const randomCharacter = allowedCharacters.charAt(randomNumber);
      password += randomCharacter;
    }
  }
  return password;
};

const printPassword = () => {
  const password = generatePassword();
  if (checkUpperCaseElement.checked) {
    displayTextElement.textContent = password.toUpperCase();
  }
  if (checkLowerCaseElement.checked) {
    displayTextElement.textContent = password.toLowerCase();
  }
  if (checkUpperCaseElement.checked && checkLowerCaseElement.checked) {
    displayTextElement.textContent = password;
  }
  if (checkNumbersElement.checked) {
    displayTextElement.textContent = password;
  }
  if (checkSymbolsElement.checked) {
    displayTextElement.textContent = password;
  }
};

const activateSubmitButton = (e) => {
  if (
    checkUpperCaseElement.checked ||
    checkLowerCaseElement.checked ||
    checkNumbersElement.checked ||
    checkSymbolsElement.checked
  ) {
    submitButtonElement.style.backgroundColor = '#a221d4';
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.style.backgroundColor = '#90899e';
    submitButtonElement.disabled = true;
  }
};

checkUpperCaseElement.addEventListener('change', activateSubmitButton);
checkLowerCaseElement.addEventListener('change', activateSubmitButton);
checkNumbersElement.addEventListener('change', activateSubmitButton);
checkSymbolsElement.addEventListener('change', activateSubmitButton);
inputRangeElement.addEventListener('input', setPasswordLength);
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  setPasswordLength();
  printPassword();
});
