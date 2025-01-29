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