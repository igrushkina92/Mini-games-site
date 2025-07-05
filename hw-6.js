// Задание 1

for (let i = 0; i < 2; i++) {
    console.log ("Привет!"); 
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log (i); 
}

// Задание 3

for (let i = 7; i <= 22; i++) {
    console.log (i); 
}

// Задание 4

const obj = {
    Kolya : "200",
    Vasya : "300",
    Petya : "400"
}

for (const key in obj) {
    console.log (`${key} - ${obj[key]}`);
}

// Задание 5

let n=1000;
let num=0;

while (n>=50) {
    n/=2;
    console.log (n);
    num++;
}

console.log (`Количество циклов: ${num}`);

// Задание 6

let dayFriday = 3;
let allday = 31;

for (let i = dayFriday; i <= allday; i+=7) {
    console.log (`Сегодня пятница, ${i} число. Необходимо подготовить отчет.`)
    
}

//Дополнительное задание

// Задание 1

let k=100;
let iterations=0;

while (k>=0) {
    k-=7;
    console.log (k);
    iterations++;
}

console.log (`Количество циклов: ${iterations}`);

// Задание 2

const months = [
"Январь", 
"Февраль", 
"Март", 
"Апрель",
"Май", 
"Июнь",
"Июль", 
"Август", 
"Сентябрь",
"Октябрь", 
"Ноябрь", 
"Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

//Задание 3

const obj = {
    bookName : "Га́рри По́ттер и филосо́фский ка́мень",
    bookAuthor : "Джоан Роулинг",
    bookYear : "1997",
    bookGenre : "фэнтези"
}

for (const key in obj) {
    console.log (`${key} - ${obj[key]}`);
}


