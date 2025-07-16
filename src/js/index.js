import '../css/styles.css';

const displayTextElement = document.getElementById('displayText');
const lengthValueElement = document.getElementById('lengthValue');
const inputRangeElement = document.getElementById('range');
const formElement = document.getElementById('form');

const allowedCharacters =
  'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';

const setPasswordLength = () => {
  lengthValueElement.textContent = inputRangeElement.value;
};

const generatePassword = () => {
  let password = [];
  for (let i = 0; i < inputRangeElement.value; i++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    password.push(randomCharacter);
  }
  const passwordString = password.join('');
  displayTextElement.textContent = passwordString;
};

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  setPasswordLength();
  generatePassword();
});
