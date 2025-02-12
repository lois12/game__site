
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