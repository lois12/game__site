
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