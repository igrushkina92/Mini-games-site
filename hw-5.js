// Задание 1

let password = 'пароль';
let userPass = prompt ('Введите пароль');
if (userPass === password) {
    alert ('Пароль введен верно');}
else {
alert ('Пароль введен неправильно');
}



// Задание 2

let c = -3;
if (c >= 0 && c <= 10) {
   alert ('Верно') 
} else {
   alert ('Неверно') 
}

// Задание 3

let d = 150;
let e = 20;

if (d >= 100 && ce <= 100) {
   alert ('Верно') 
} else {
   alert ('Неверно') 
}

// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert( Number (a) + Number (b));

// Задание 5

let monthNumber = 7;

switch (monthNumber) {
    case 1:
    case 2: 
    case 12:   
        alert ('Зима');
        break;
    case 3:
    case 4: 
    case 5:   
        alert ('Весна');
        break;
    case 6:
    case 7: 
    case 8:   
        alert ('Лето');
        break;
    case 9:
    case 10: 
    case 11:   
        alert ('Осень');
        break;   

    default:
     alert ('Неверно');   
        break;
}

