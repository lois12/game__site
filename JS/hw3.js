// ДОМАШКА функции


//Задание 1 Напишите функцию, которая возвращает меньшее из двух чисел.

/* Например, из двух чисел — 
8 и 4
 — функция должна вернуть значение 4
. Если мы передаем два одинаковых значения, например 6 и 6
, то функция должна вернуть это значение (в данном случае — 6). */

let firstNumber = Math.floor(Math.random() * 1000); //Создаём 1 рандомное число от 1 до 1000
let secondNumber = Math.floor(Math.random() * 1000); // создаём 2 рандомное число от 1 до 1000
console.log(`1 число = ${firstNumber}`)
console.log(`2 число = ${secondNumber}`)
let comparison = () => {

    console.log(`Сгенерированы случайные числа от 1 до 1000 а именно: ${firstNumber} и ${secondNumber}`)
    if (firstNumber > secondNumber) {
        console.log(`В данном случае ${firstNumber} больше чем ${secondNumber} `)
    }
    else if (firstNumber < secondNumber) {
        console.log(`В данном случае ${secondNumber} больше чем ${firstNumber} `)

    }
    else {
             //return  выше 
        return `Числа равны и  их значение ${secondNumber}`
    }
}
comparison();


/* Задание 2
Напишите функцию, которая принимает число и возвращает:
строку 'Число четное', если число четное;
строку 'Число нечетное' , если число нечетное.
Подсказка: четность проверяется с помощью условия 
n % 2 == 0
.
 */


console.log(`Загаданное число ${hiddenNumber}`)
hiddenguess(hiddenNumber = 1);

function hiddenguess(hiddenNumber) {


    if (hiddenNumber % 2 == 0) {
        console.log(`Число чётное`);
        return 
    }
    else {
        console.log(`Число нечётное`);
        return

    }


}

/* Задание 3
Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — так, чтобы потом это значение можно было использовать.

 */

let b = 2;
double(4, b);
function double(a, b) {

    let mult = a ** b;
    console.log(`Квадрат числа ${a} = ${mult}`);
    return mult;

}


 /* Задание 4
Создайте функцию, которая:
Спрашивает у пользователя, сколько ему лет. Если пользователь введет отрицательное число — выведет на экран 
'Вы ввели неправильное значение'.Если пользователь введет число от 
0
 до 
12
 — выведет на экран 
'Привет, друг!'
.
Если пользователь введет число больше или равно 
13
 — выведет на экран 
'Добро пожаловать!'
.
Подсказка: можете выполнить это задание с помощью оператора  */




 let ageCheck = (userAge) => {
   
    if (userAge < 0  ) {
        alert (`Вы  ввели неверное значение ${userAge}`)
        
   
    } 
    else if(userAge>=13){
        alert (`Ваш возраст - ${userAge} Добро пожаловать!`)
    }
    else {
        alert (`Привет друг, ты почти взрослый  твой возраст- ${userAge}`)
        
    }

}
ageCheck(+prompt(`Сколько тебе лет`));
 

/*
Задание 5
Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:
Проверяет, являются ли переданные параметры корректными числами.
Подсказка: используйте преобразование типов и 
isNaN()
.

Если нет — возвращает строку 
'Одно или оба значения не являются числом'
.
Если оба параметра — числа, то возвращает произведение данных чисел. */

let сorrectNumber = (a = Number( prompt (`Введите первое значение`)), b = Number( prompt (`Введите второе значение`))) => {  //  из строки в число +-
    if (isNaN(a) || isNaN(b)) {
        console.log(`Одно или оба значения не являются числом`);


    }
    else {
        let mult = a * b;
        return console.log(`${mult}`);

    }

}
сorrectNumber();



/* Задание 6
Напишите функцию, которая выполняет следующий алгоритм:
Запрашивает у пользователя число.
Проверяет, является ли введенное значение числом.
Если значение не является числом, возвращает строку 
'Переданный параметр не является числом'.
Если значение является числом, возвращает строку 'n в кубе равняется <получившееся значение>', где n — введенное число, а <получившееся значение>
 — число, возведенное в куб.
Проверьте работу функции с числами от  0 до 10.

 */


 let NumberCheck = (userDifferentNumber = prompt(`Введите любое число`)) => {
    if(isNaN(userDifferentNumber)) {
        console.log(`Значение ${userDifferentNumber} - не является числом`);  
    }
else{
    let multi = userDifferentNumber**3;
    return  console.log(`n в  кубе равно ${multi}`);
    
}
}
NumberCheck()
 



/* Задание 7

Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство 
radius.

Оба объекта должны иметь:Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
Метод 
getPerimeter, который возвращает периметр окружности. */
// C= 2p*radius
//S = p*radius*radius
/* this.radius*this.radius*p; */

getArea()
getPerimeter()
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 20,
    methgetArea: getArea,
    merhgetPerimetr: getPerimeter,
}

const circle2 = {
    radius: 10,
    methgetArea: getArea,
    merhgetPerimetr: getPerimeter,
}
console.log(circle1.merhgetPerimetr());
console.log(circle1.methgetArea());
console.log(circle2.merhgetPerimetr());
console.log(circle2.methgetArea());





// ЭТО ТЕСТОВОЕ ЗАДАНИЕ ДЕЛАЛ НА КОНСУЛЬТАЦИИ С НАСТВАВНИКОМ
/* let aa= test()
console.log ( Number(aa));
const test = () =>
{   

    return `5`
    
}

let aa= test()
console.log ( Number(test())); */