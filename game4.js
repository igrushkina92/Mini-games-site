function rockScissorsPaper() {

    const options = [`камень`, `ножницы`, `бумага`,];
    const randomIndex = Math.floor(Math.random() * (options.length));
    let randomOptions = options[randomIndex];
    console.log(randomOptions);


    function printResult() {
        let userChoice = (prompt(`Давай сыграем в "Камень Ножницы Бумага"? \nНапиши "камень", "ножницы" или "бумага".`)).toLowerCase();
        if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {

            switch (randomOptions) {
                case `камень`:
                    if (userChoice === `ножницы`) {
                        alert(`Вы проиграли, компьютер выбрал ${randomOptions}`);
                    } else if (userChoice === `бумага`) {
                        alert(`Вы выиграли, компьютер выбрал ${randomOptions}`);
                    } else {
                        alert(`ничья, компьютер тоже выбрал ${randomOptions}`);
                    }
                    break;
                case `ножницы`:
                    if (userChoice === `бумага`) {
                        alert(`Вы проиграли, компьютер выбрал ${randomOptions}`);
                    } else if (userChoice === `камень`) {
                        alert(`Вы выиграли, компьютер выбрал ${randomOptions}`);
                    } else {
                        alert(`ничья, компьютер тоже выбрал ${randomOptions}`);
                    }
                    break;
                case `бумага`:
                    if (userChoice === `камень`) {
                        alert(`Вы проиграли, компьютер выбрал ${randomOptions}`);
                    } else if (userChoice === `ножницы`) {
                        alert(`Вы выиграли, компьютер выбрал ${randomOptions}`);
                    } else {
                        alert(`ничья, компьютер тоже выбрал ${randomOptions}`);
                    }
                    break;
                default:
                    alert("Нет таких значений");
            }

        } else {
            alert(`Вы ввели неверное значение`);
        }
    }
   printResult();

}