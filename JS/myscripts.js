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

 let password = `пароль`;
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
}

