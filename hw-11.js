// Задание 1   

   const button = document.querySelector('.button');
    const title = document.querySelector('.title');

button.addEventListener('click', () => {
  if (title.style.display === 'none') {
   title.style.display = 'block';
  } else {
    title.style.display = 'none';
  }
});