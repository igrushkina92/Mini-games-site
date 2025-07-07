// Задание 1   

   const button1 = document.querySelector('.button1');
    const title1 = document.querySelector('.title1');

button1.addEventListener('click', () => {
  if (title1.style.display === 'none') {
   title1.style.display = 'block';
  } else {
    title1.style.display = 'none';
  }
});




// Задание 2

const button2 = document.querySelector('.button2');
const description2 = document.querySelector('.description2');

button2.addEventListener('click', () => {
  description2.style.color = 'blue';
});




// Задание 3

const button3 = document.querySelector('.button3');
const title3 = document.querySelector('.title3');

button3.addEventListener('click', () => {
  title3.textContent = 'Привет, мир!';
});




// Задание 4

const allDescriptions4 = document.querySelectorAll('.description4');

allDescriptions4.forEach(description4 => {
   description4.textContent = 'Измененный текст';
});