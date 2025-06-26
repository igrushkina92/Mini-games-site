function simpleArithmetic() {
    const operations = ['+', '-', '*', '/'];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    let a, b, result;
    let userAnswer;
    

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
            case '+':
            userAnswer = prompt (`Сложите ${a} и ${b}`);
            result = a + b;
            break;

            case '-':
            userAnswer = prompt (`Вычтите ${b} из ${a}`);
            result = a - b;
            break;
            
            case '*':
            userAnswer = prompt (`${a} умножить на ${b}`);
            result = a * b;
            break;

            case '/':
            userAnswer = prompt (`${a} разделить на ${b}`);
            result = a / b;
            break;
    }

        userAnswer = parseInt( userAnswer);

    if (userAnswer ===  result) {
        alert (`Это верный ответ!`);
    } else {
        alert (`Ошибка!Правильный ответ: ${result}`);
    } 
    }

 