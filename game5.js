function simpleQuiz() {

    const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2, 
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2,
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2,
           }
       ];

       let num = 0;
       for (let i = 0; i < quiz.length; i++) {
        let quizAnswer = Number(prompt(`Выберите правильный ответ \n${quiz[i].question} \n${quiz[i].options}`));
        if (quizAnswer == quiz[i][`correctAnswer`]){
        num++;
            alert (`Вы ответили правильно!`);
        } else {
          alert (`Вы ответили неправильно!`);  
        }
    }
   alert (`Вы ответили правильно на ${num} вопросов`) ;

}