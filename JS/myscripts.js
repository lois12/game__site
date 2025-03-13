
//Игра угадай число

function game1() {
    let userName = prompt(`Введите своё имя`);
    if (!userName) {
        alert("Игра отменена");
        return;
    }
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    let guessed = false;
    while (!guessed) {
        let userNumber = prompt(`Введите  число от 1 до 100`);
        if (userNumber === null) {
            alert("Игра отменена!Хотите начать заново?");
            game1()
            return;
        }

        if (userNumber > randomNumber) {
            alert(`Ваше число больше, попробуйте ещё раз`);
        }
        else if (userNumber < randomNumber) {
            alert(`Ваше число меньше, попробуйте ещё раз`)
        }
        else {
            alert(`Вы угадали число `)
            guessed = true;
        }
    }
}
// Игра простая арифметика

function gameArifmetix() {
    function generateTask() {
        const operations = [
            { operator: '+', func: (a, b) => a + b },
            { operator: '-', func: (a, b) => a - b },
            { operator: '*', func: (a, b) => a * b },
            { operator: '/', func: (a, b) => a / b }
        ];

        const randomOperator = operations[Math.floor(Math.random() * operations.length)];

        const number1 = Math.floor(Math.random() * 10) + 1;
        const number2 = Math.floor(Math.random() * 10) + 1;

        let task;
        let userCorrectAnswer;

        if (randomOperator.operator === '/') {
            task = `${number1 * number2} ${randomOperator.operator} ${number2}`;
            userCorrectAnswer = number1;
        } else {
            task = `${number1} ${randomOperator.operator} ${number2}`;
            userCorrectAnswer = randomOperator.func(number1, number2);
        }

        return { task, userCorrectAnswer };
    }

    function checkUserAnswer() {
        const { task, userCorrectAnswer } = generateTask();
        const userAnswer = prompt(`Решите задачу: ${task}`);
        if (userAnswer === null) {
            alert("Игра отменена!");
            return;
        }
        const parsedUserAnswer = parseFloat(userAnswer);

        if (isNaN(parsedUserAnswer)) {
            alert("Пожалуйста, введите число!");
            checkUserAnswer();
        } else if (parsedUserAnswer === userCorrectAnswer) {
            alert("Правильный ответ!");
        } else {
            alert(`Неправильный ответ! Правильный ответ: ${userCorrectAnswer}`);
        }
    }


    checkUserAnswer();
}
/* Игра  "переверни слово" */
function wordReverse() {
    const userWord = prompt(`Введите слово что бы его перевернуть`)
    if (userWord === null) {
        alert("Игра отменена!");
        return;
    }
    if (userWord) {
        const reverseWord = userWord.split(``).reverse().join(``);
        alert(`Перевернутое слово ${reverseWord}`)
    }
    else {
        alert(`Вы ввели неправильное значение`)
    }
}

/* Игра простая викторина */
function gameQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let point = 0;

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        let questionText = q.question + "\n";

        for (let a = 0; a < q.options.length; a++) {
            questionText += q.options[a] + "\n";
        }

        const userAnswer = prompt(questionText + "Введите свой ответ: ");
        if (userAnswer === null) {
            alert("Игра отменена!");
            return;
        }

        if (parseInt(userAnswer) === q.correctAnswer) {
            point++;
            alert(`Правильный ответ! ${q.options[q.correctAnswer - 1]}`);
        } else {
            alert(`Неправильный ответ. Правильный ответ: ${q.options[q.correctAnswer - 1]}`);
        }
    }

    alert(`Вы набрали ${point} очков из возможных ${quiz.length}`);
}
// Камень/Ножницы/Бумага
function gameStonePapperCut() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const userChoice = prompt('Выберите один из вариантов: Камень, Ножницы или Бумага');
    if (userChoice === null) {
        alert('Игра отменена!');
        return;
    }
    const lowerCaseChoice = userChoice.toLowerCase();
    if (!choices.includes(lowerCaseChoice)) {
        alert('Вы ввели недопустимое значение');
        return;
    }
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultGame;
    if (lowerCaseChoice === randomChoice) {
        resultGame = `Ваш выбор: ${lowerCaseChoice}, Выбор ИИ: ${randomChoice} - получилась ничья`;
    } else if (
        (lowerCaseChoice === 'камень' && randomChoice === 'ножницы') ||
        (lowerCaseChoice === 'ножницы' && randomChoice === 'бумага') ||
        (lowerCaseChoice === 'бумага' && randomChoice === 'камень')
    ) {
        resultGame = `Вы победили, возьмите с полки пирожок! Выбор компьютера был ${randomChoice}`;
    } else {
        resultGame = `Вы проиграли, печалька. Выбор компьютера был ${randomChoice}`;
    }
    
    alert(resultGame);
}
/* Игра Угадай цвет */
const colorChangeBtn = document.getElementById("color-change__btn");
const colorChangeElem = document.querySelector(`.mini-games-box`);
colorChangeBtn.addEventListener('click', function () {
    const randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16)
    colorChangeElem.style.backgroundColor = randomColor;
    colorChangeBtn.style.backgroundColor = randomColor;
})

