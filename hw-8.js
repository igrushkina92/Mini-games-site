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


// Задание 4

const arr = [];
for (let i = 0; i < 3; i++)  {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr.push(arr2);
}
console.log(arr);
