/* Task 1
С помощью метода массива sortотсортируйте массив people по возрастанию возраста и выведите результат в консоль.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ] */

const peopleArray = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(peopleArray.sort((a, b) => a.age -b.age));
 
/*  Task 2
 Реализуйте функцию filter, которая должна работать аналогично методу массива filter
. Возьмите за основу функцию map, которую мы реализовывали на уроке.
Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction
, принимать решение о том, добавлять в результирующий массив очередной элемент или нет. */

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    return array.filter(item => ruleFunction(item));
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

/* Task 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
Последней строкой должно выводиться сообщение «30 секунд прошло». */

function theDate() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

function Timer() {
    let time = 0;
    const interval = setInterval(() => {
        if (time > 30) {
            clearInterval(interval);
            console.log('Прошло 30 секунд');
            return;
        }
        
        if (time % 3 === 0) {
            console.log(`Текущая дата: ${theDate()}`);
        }
        
        time++;
    }, 1000);
}

Timer();
/* Task 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
Допишите функцию delayForSecond  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
setTimeout
. */

function delayForSecond(callback) {
setTimeout(() => {
    callback();
    
}, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})
/* Task 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке: */

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function(){sayHi('Глеб')})

