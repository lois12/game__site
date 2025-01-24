// let number  = 20;
// alert(number);
// const date = 2007;
// alert  ('Год выхода нового айфона - '+ date);
// const jsCreatorName = ('Брендан Эйх');
// alert  ('создатель языка JavaScript - '+ jsCreatorName);
// let a = 10;
// let b = 2;
// let sum = a + b;
// alert  ('сумма A и B: '+ sum);
// let multi = a * b;
// alert  ('Результат умножения A и B: '+ multi);
// let division = a / b;
// alert  ('Результат деления A на B: '+ division);
// let subtraction = a - b;
// alert  ('Результат вычитания B от A: '+ subtraction);

// let variable = 2;
// let result = variable **5;
// alert  ('2  в 5 степени: '+ result);


// let a1 = 9;
// let b1 = 2;
// result = a1 % b1;
// alert  ('Остаток деления a1 на b1: '+ result);



// let num = 1;
// num +=5;
// num -=3
// num *=7;
// num /=3;
// num +=1;
// num -=1;
// alert(num);

// let age = prompt ("Сколько вам лет?");
// alert  ('Количество полных лет '+ age);


// const user = {
//     name: 'IlonMask',
//     age:50,
//     isAdmin:true
// }


// let userName = prompt("Ваше имя сэр- господин??")
// alert( "Имя пользователя:"+userName);


//>>Условное ветвление<<
//Задание 1

/* let password = `пароль`;
let reqwest = prompt(`Введите пароль`)
if (reqwest === password) {
    console.log(`Пароль введен верно`);
} else {
    console.log(`Пароль введен  неправильно`)
}

//Задание 2


let c = 2
   if (c > 0 && c<10) {
    console.log(`Верно`);
 } else {
   console.log(`Неверно`);
 }

// Задание 3

let d = 100;
let e = 8;
if (d >=100|| e >= 100) {
   console.log(`Верно`);
} else {
   console.log(`Неверно`);
}

//Задание 4

let a = '2';
let b = '3';
alert (+a + +b);
//Задание 5

let monthNumber = 12
switch (monthNumber) {
   case 1:
   case 2:
   case 12:
       alert(`Зима`)
       break;
   case 3:
   case 4:
   case 5:
       alert(`Весна`)
       break;
   case 6:
   case 7:
   case 8:
       alert(`Лето`)
       break;
   case 9:
   case 10:
   case 11:
       alert(`Осень`)
       break;

   default:
       alert(`Неверно`)
       break;
} */

/* Домашка циклы */
/* Задание 1 */

/*
for (let i = 0; i < 2; i++) {

    console.log(`Привет`)

}

// Задание 2 

for (let i = 1; i <= 5; i++) { console.log(i); }

// Задание 3

for (let i = 7; i <= 22; i++) { console.log(i); }


// Задание 4
const obj = { // Обьявляем объект  obj
    Nikolay: '200', // ключ обекта Nikolay  - свойство  200
    Vasilii: `300`,
    petr: `400`
}
for (const key in obj) {    // из ключа в обьекте
    console.log(`${key}: ${obj[key]}`); // выводим  ключ : свойство
}
//  Задание 5

let n = 1000; // присвоили значение 1000 ------>>>> значение
let num = 0;
while (n >= 50)  // когда n больше или равно 50 --->>> условие
{
    n /= 2;    // n  делим на 2
    console.log(n); // выводим результат деления
    num++; //  Ставим инкремент после переменной для корректного вычисления количества  выполненных циклов

}

console.log(`Количество выполенных циклов: ${num}`); //  Выводим на экран количество полных циклов деления


// Задание 6

let Friday = 2; // обьявляем  переменную для пятницу  от 1 до 7
let allDay = 31; // объявляем переменную для общего  количества дней в месяце - их 31
for (let i = Friday; i < allDay; i += 7) // дословно  i-  это пятница --->>  если пятница меньше 31  делаем действие пятница += 7
{
    console.log(`Сегодня пятница, ${i}-e число. Необходимо подготовить отчёт`)
    // выводим в консоль переменную i -   и создаем текствое офромление

}

// Дополнительное задание 1

let k = 100; //  тут не до конца понял почему не выводит количество циклов и  считает как то странно
let iterations = 0;
while (k >= 0 ) {
  k = k- 7
  console.log(k);
  console.log(iterations++);  
}


// Дополнительное  задание 2
const Month = { // Обьявляем объект  Month
    January: '1', 
    February: `2`,
    March : `3`,
    April: `4`,
    May : `5`,   
    June: `6`,
    July : `7`,   
    August : `8`,
    September: `9`,
    October : `10`,   
    November : `11`,
    December : `12`
}
for (const key in Month) {    // из ключа в обьекте
    console.log(`${key}:это ${Month[key]} месяц по порядку`); // выводим  ключ : свойство +  текст
}
*/


// Домашка функции
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

//Задание 2 Напишите функцию, которая возвращает меньшее из двух чисел.

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

        console.log(`Числа равны и  их значение ${secondNumber}`)
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

let hiddenNumber = Math.floor(Math.random() * 10000);  // promt // ----->>>
console.log(`Загаданное число ${hiddenNumber}`)
hiddenguess(hiddenNumber);

function hiddenguess(hiddenNumber) {


    if (hiddenNumber % 2 == 0) {
        console.log(`Число чётное`);
    }
    else {
        console.log(`Число нечётное`);

    }


}

/* Задание 3
Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — так, чтобы потом это значение можно было использовать.

 */
let a = Math.floor(Math.random() * 10000);
let b = 2;
double(a, b);
function double(a, b) {

    let mult = a * b;
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
Подсказка: можете выполнить это задание с помощью оператора 
if else
. */


/* let ageCheck = (userAge = prompt(`Сколько тебе лет`)) => {
   
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
ageCheck();
 */

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

let CorrectNumber = (a = prompt(Number(`Введите первое значение`)), b = prompt(Number(`Введите второе значение`))) => {
    if (isNaN(a) || isNaN(b)) {
        console.log(`Одно или оба значения не являются числом`);


    }
    else {
        let mult = a * b;
        return console.log(`${mult}`);

    }

}
CorrectNumber();



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


/* let NumberCheck = (userDifferentNumber = prompt(`Введите любое число`)) => {
    if(isNaN(userDifferentNumber)) {
        console.log(`Значение ${userDifferentNumber} - не является числом`);  
    }
else{
    let multi = userDifferentNumber**3;
    return  console.log(`n в  кубе равно ${multi}`);
    
}
}
NumberCheck()
 */



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
console.log(circle1.merhgetPerimetr);
console.log(circle1.methgetArea);
console.log(circle2.merhgetPerimetr);
console.log(circle2.methgetArea);





















// Задания на воркшопе //




/* Напишите функцию, которая выполняет следующий алгоритм:

Запрашивает у пользователя число.
Проверяет, является ли введенное значение числом.
Если значение не является числом, возвращает строку
'Переданный параметр не является числом'
.
Если значение является числом, возвращает строку
'n в кубе равняется <получившееся значение>'
, где
n
 — введенное число, а
<получившееся значение>
 — число, возведенное в куб.
Проверьте работу функции с числами от
0
 до
10
. */



/*
Задание 1
Напишите функцию для получения уникальных
элементов массива.

Для этого cоздайте функцию , которая принимает массив и возвращает новый массив с уникальными элементами.
Используйте методы массивов для фильтрации и исключите дубликаты.
*/

//uniqueElements([ 1,2 ,3 ,3 ,4 ,4 ,1,5 ]); // [1,2,3,4,5]
// uniqueElements([ 'apple', 'orange', 'banana', 'apple']); //['apple', 'orange', 'banana']



/* const uniqueElements = (arr) => {
    let newarr =[];
    arr.forEach((elem) => {
        if (!newarr.includes(elem)) {
            newarr.push(elem);

        }
    })
    return newarr.sort();
}
console.log(uniqueElements([ 'apple', 'orange', 'banana', 'apple']));

 */




/*
Задание 2
Напишите функцию для объединения массивов и сортировки уникальных значений.

Создайте функцию , которая принимает два массива, объединяет их, удаляет дубликаты и возвращает отсортированный массив уникальных значений.
*/

// mergeAndSort([3,4,5], [1,2,6]) // [1,2,3,4,5,6]
// mergeAndSort(['c', 'a'], [ 'b', 'a', 'd']) // ['a', 'b', 'c', 'd']


/*

const mergeAndSort = (arr,arr2) => {
    let comboArr = arr.concat(arr2)
    let newarr =[];
    comboArr.forEach((elem) => {
    if (!newarr.includes(elem)) {
        newarr.push(elem);

            }
    })

    return newarr.sort();


}
console.log(mergeAndSort(['c', 'a'], [ 'b', 'a', 'd']));


 */

/*

Задание 3
Напишите функцию для фильтрации чисел больше заданного значения.

Создайте функцию, которая принимает массив чисел и число limit.
Функция должна возвращать новый массив, содержащий только те числа, которые больше limit.
*/

// filterGreaterThan([1,2,3,4,10,25,125,105], 10) // [25,125,105]
/* 

const filterGreaterThan = (arr,num) => {
    let newarr = arr.filter(number => number > num)
    return newarr;
}
console.log(filterGreaterThan([1,2,3,4,10,25,125,105], 10));
 */