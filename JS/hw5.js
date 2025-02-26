// HomeWork built-in obj
// Task 1
// Преобразовать строку 'js'в верхний регистр.

let task1String = `js`
console.log(task1String .toLocaleUpperCase(task1String));

//Task 2
// Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, 
// которые начинаются со второй строки. Регистр символов не влияет на результат.
 
function arrAndString(stringArr,string){
    const stringToLowerCase = string.toLowerCase()
    return stringArr.filter (str => str.toLowerCase().startsWith(stringToLowerCase))
}

const stringArr =[`Молоко`,`Молочный продукт`,`Кефир`,`Ряженка`,`Йогурт`,`Вонючий крендель`,`Молочный диджей`]
const string = `Молоч`;
console.log(arrAndString(stringArr,string));

// Task 3
/* Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого. */

const insainBigNumber = 32.58884;
console.log(Math.floor(insainBigNumber)); 
console.log(Math.ceil(insainBigNumber));
console.log(Math.round(insainBigNumber));

/* Task 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль. */
const numberArr = [52,53,49,77,21,32]
let minNumber = (Math.min(...numberArr))
let maxNumber = (Math.max(...numberArr))
console.log(minNumber,maxNumber);

/* Task 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10. */
const generateRandom = () => {
const randomNumber = (Math.floor(Math.random()*10)+1);
console.log(randomNumber);}
generateRandom();

/* 
Task 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
 Длина массива должна быть в два раза меньше переданного числа. */

 const randomArrBack =(numb) => {
    if (!Number .isInteger(numb)) { console.error(`Пожалуйста введите целое число`);
        return;
        
    }
    const randomArrLength = Math.floor(numb/2)
    const array = Array.from({length:randomArrLength},() =>{
        const randomArrNumber = Math.floor(Math.random()*(numb+1))
        return randomArrNumber;
    })
    console.log(array);
    return array;
    
 }
 randomArrBack(15);

 /* Task 7
 Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне. */
 function RandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min +1))+ min
 }
 const randomNumberTask7 = RandomNumber(8,100)
 console.log(randomNumberTask7);

/* Task 8
Вывести в консоль текущую дату. */
let myDate = new Date;
console.log(`Точная дата  и время сейчас`, new Date);

/*  Task 9

Создать переменную currentDate
, хранящую текущую дату. 
Вывести дату, которая наступит
 через 73 дня после текущей. */
  const currentDate =  new Date();
  let futureDate = new Date(currentDate)
  futureDate.setDate(currentDate.getDate()+73);
  console.log(`Точная дата  и время сейчас : ${ new Date}`);
  console.log(`Точная дата  через 73 дня : ${ futureDate}`);
/* 
Task 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды] */

function DateChange(date) {
    const months = [
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ];

    const days = [
        "Воскресенье", "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота"
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const nowDate = new Date();
console.log(DateChange(nowDate));
