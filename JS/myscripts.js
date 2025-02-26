
//Игра угадай число

function game1(){
 let userName = prompt(`Введите своё имя`);
let randomNumber = Math.floor(Math.random()*100)+1;

console.log(randomNumber);
let guessed =false;


while (!guessed) {
    let userNumber = prompt(`Введите  число от 1 до 100`);
    
    if (userNumber>randomNumber) {
        alert(`Ваше число больше, попробуйте ещё раз`);        
    }
        else if(userNumber<randomNumber){
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
        const userAnswer = parseFloat(prompt(`Решите задачу: ${task}`));

        if (userAnswer === userCorrectAnswer) {
            alert(`Правильный ответ!`);
        } else {
            alert(`Неправильный ответ! Правильный ответ: ${userCorrectAnswer}`);
        }
    }

    checkUserAnswer();
}
/* Игра  "переверни слово" */
function wordReverse() {
    const userWord = prompt(`Введите слово что бы его перевернуть`)
    if (userWord) {
        const reverseWord = userWord .split(``).reverse().join(``);
        alert (`Перевернутое слово ${reverseWord}`)
    }
    else{
        alert (`Вы ввели неправильное значение`)
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

        if (parseInt(userAnswer) === q.correctAnswer) {
            point++;
            alert(`Правильный ответ! ${q.options[q.correctAnswer - 1]}`);
        } else {
            alert(`Неправильный ответ. Правильный ответ: ${q.options[q.correctAnswer - 1]}`);
        }
    }

    alert(`Вы набрали ${point} очков из возможных ${quiz.length}`);
}



/* Игра Камень\Ножницы\Бумага */
function gameStonePapperCut(){
const choices =[`камень`,`ножницы`,`бумага`]
const userChoice = prompt(`Выберете  один из вариантов Камень,Ножницы или Бумага`).toLocaleLowerCase();
if (!choices.includes(userChoice)) {
    alert(`Вы ввели недопутимое значение`)
    return;
    
}
const randomChoice = choices[Math.floor(Math.random()*choices.length)]
let resultGame;
if (userChoice===randomChoice) {
    alert(`Ваш выбор:${userChoice}, Выбор ИИ:${randomChoice} - получилась ничья` )
}
else if(userChoice === `камень` && randomChoice ===`ножницы` || userChoice === `ножницы` && randomChoice === `бумага` || userChoice === `бумага` && randomChoice ===`камень`){
alert(`Вы победили, возбмите с полки пирожок`)
}
else{
    alert(`Вы проиграли, печалька`)
}}
