function guessTheNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let guess = prompt("Я загадал число от 1 до 100. Попробуй его угадать!");
        guess = Number (guess);
        if (guess === secretNumber) {
            alert("Поздравляю! Ты угадал число");
           break;
        }
        else if (guess < secretNumber) {
            alert('Загаданное число больше!');
        }

        else  {
            alert('Загаданное число меньше!');
        }
    }
}