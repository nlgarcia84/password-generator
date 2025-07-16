import '../css/styles.css';

const formElement = document.getElementById('form');

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Enviado');
};

formElement.addEventListener('submit', handleSubmit);
