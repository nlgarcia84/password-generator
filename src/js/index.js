import '../css/styles.css';

const displayTextElement = document.getElementById('displayText');
const lengthValueElement = document.getElementById('lengthValue');
const inputRangeElement = document.getElementById('range');
const formElement = document.getElementById('form');

const allowedCharacters =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';

let passwordLength = inputRangeElement.value;
lengthValueElement.textContent = passwordLength;

const setPasswordLength = () => {
  passwordLength = inputRangeElement.value;
  lengthValueElement.textContent = passwordLength;
};

const printPassword = (password) => {
  displayTextElement.textContent = password;
};

const generatePassword = () => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    password += randomCharacter;
  }
  printPassword(password);
};

inputRangeElement.addEventListener('input', setPasswordLength);

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  setPasswordLength();
  generatePassword();
});
