// // Задание 1

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// // const min = (a, b) => (a < b) ? a :b;

// console.log (min (4,3));
// console.log (min (6,6));

// Задание 2

// function even (n) {
//     if (n % 2 == 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
// }

// console.log (even (3));
// console.log (even (8));


// Задание 3

// function square (number) {
//     console.log (number ** 2);
// }

// const up = (n) => n ** 2;

// square (6);
// console.log (up (7));


// Задание 4

// function age () {

//     let age = +prompt ('Сколько вам лет?');

//     if (age < 0) {
//         alert ('Возраст не может быть отрицательным!');
        
//     } else if (age >= 0 && age <= 12) {
//         alert ('Привет, друг!');
//     }
//     else if (age >= 13) {
//         alert ('Добро пожаловать!');
//     } else {
//       alert ('Вы ввели неправильное значение'); 
//     }
// }

// age ();

// Задание 5

// function calc (a, b) {
//     console.log (isNaN(a));
//     console.log (isNaN(b));
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//        return a * b; 
//     }
// }

// console.log (calc(8,5));


// Задание 6

// function getNumber() {
//     let number = prompt ('Введите число');
//     console.log (isNaN(number));
//     if (isNaN (number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `n в кубе равняется ${number ** 3}`;
//     }
// }

// console.log (getNumber());

// Задание 7

function getArea () {
    return Math.PI * this.radius ** 2;
}

function getPerimetr () {
return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,
}

const circle2 = {
    radius: 20,
   methodGetArea: getArea,
    methodGetPerimetr: getPerimetr,
 }

 console.log (circle1.methodGetArea());
 console.log (circle2.methodGetArea());

 console.log (circle1.methodGetPerimetr());
 console.log (circle2.methodGetPerimetr());