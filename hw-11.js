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




// Задание 5

const allDescriptions5 = document.querySelectorAll('.description5');

allDescriptions5.forEach(description5 => {
   description5.textContent = 'НОВЫЙ ТЕКСТ';
});




// Задание 6

const button6 = document.querySelector('.button6');
const description6 = document.querySelector('.description6');

button6.addEventListener('click', () => {
    const newText6 = document.createElement('p');
    newText6.textContent = 'Новый абзац';
    newText6.classList.add ('text');
    description6.appendChild (newText6);
});





// Задание 7

const button7 = document.querySelector('.button7');
const description7 = document.querySelector('.description7');

button7.addEventListener('click', () => {
   description7.remove();

});
