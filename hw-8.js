// // Задание 1

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
//    if (numbs[i] === 10) break;
// }


// Задание 2

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i] === 4){
//     console.log(i);
//     break; 
//     }
// }


// // Задание 3

// const arr = [1, 3, 5, 10, 20];

// let joinedNumber = arr.join(' ');
// console.log(joinedNumber);


// // Задание 4

// const arr = [];
// for (let i = 0; i < 3; i++)  {
//     const arr2 = [];
//     for (let i = 0; i < 3; i++) {
//         arr2.push(1);
//     }
//     arr.push(arr2);
// }
// console.log(arr);


// // Задание 5

// const arr = [1, 1, 1];

// arr.push (2,2,2);

// console.log(arr);



// // Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];

// arr.sort ();

// console.log(arr);

// const filteredArr = arr.filter(arr => arr  !== 'a');

// console.log(filteredArr);


// // Задание 7

// const arr = [9, 8, 7, 6, 5];

// const userNumber = +prompt ('Введите число');

// if (arr.includes(userNumber)) {
//     alert ('Угадал');
// } else {
//     alert ('Не угадал');
// }



// // Задание 8

// let str = 'abcdef';
// str = str.split ('');
// console.log (str);
// str.reverse ();
// str = str.join ('');
// console.log (str);


// // Задание 9


// const arr = [[1, 2, 3],[4, 5, 6]];

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//    newArr.push (...arr[i]) ;
// }

// console.log(newArr);


// // Задание 10

// const arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr [i+1]) {
//     console.log (arr[i] + arr[i+1]);
//     }
// }



// // Задание 11

// function square(arr) {
//     return arr.map (item => item ** 2);
// }

// console.log (square([1,2,3]));



// // Задание 12

// function getLength(arr) {
//      return arr.map (item => item.length);
// }

// console.log (getLength(['hi','world']));


// // Задание 13


// function negativeNumbers (arr) {
//     return arr.filter (item => item < 0);
// }

// console.log(negativeNumbers([1,8.4,-5,-7,3,-8]));


// // Задание 14

// function randomNumber (){
//     return Math.floor(Math.random() * 10);
// }

// const arr= [];

// for (let i = 0; i < 10; i++) {
//     arr.push(randomNumber());
// }

// console.log (arr);

// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }

// console.log (evenArr);



// // Задание 15

// function randomNumber (){
//     return Math.floor(Math.random() * 10);
// }

// const arr= [];

// for (let i = 0; i < 10; i++) {
//     arr.push(randomNumber());
// }

// console.log (arr);

// console.log(arr.reduce ((a,b) => a+b) / arr.length);
