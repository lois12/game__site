function greet(name){
    setInterval(() => {
        console.log(`Привет ${name}`);
    }, 1000);
    
    
    
}
greet(`Анна`);

/* Напишите функцию isEven, которая принимает число и возвращает true, если число четное, и false, если нечетное.

Пример использования:

isEven(4); // Должно вернуть true
isEven(7); // Должно вернуть false
isEven(0); // Должно вернуть true
Подсказки:

Функция должна принимать один числовой параметр
Используйте оператор остатка от деления (%)
Четное число делится на 2 без остатка
Функция должна возвращать булево значение (true/false)
Это задача чуть сложнее предыдущей, но всё ещё достаточно простая для понимания 
базовых концепций работы с числами и условными операторами в JavaScript. Попробуйте решить её! */

function isEven(num) {
    return num % 2 === 0;
   }
   
   // Примеры использования:
   console.log(isEven(4)); // true
   console.log(isEven(5)); // false
   console.log(isEven(0)); // true




    
const fruts =[
    {name: "Lemon ",price:50},
    {name:"Orange", price:100}
    { name:"WaterLemon", price:200}
]

