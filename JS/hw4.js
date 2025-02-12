// Циклы ДЗ
// Задание 1
/* Дан массив: 
[1, 5, 4, 10, 0, 3].Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
10. После вывода значения 10
в консоль цикл должен прекратить свою работу. */

const  numbers =[1,5,4,10,0,3];
for (let el = 0; el < numbers.length; el++){
    console.log(numbers[el]);
    if (numbers[el] === 10){
        
        break;
    }
    }


/* Задание 2
Дан массив: 
[1, 5, 4, 10, 0, 3].
Найдите индекс значения 
4 в этом массиве. */
const num = [1,5,4,10,0,3];
const index =num.indexOf(4);
console.log(index);


/* Задание 3
Дан массив чисел: 
[1, 3, 5, 10, 20].
С помощью метода join
 выведите элементы массива через пробел (пустую строку 
' '). */

const NumbArr = [1,3,5,10,20]
const NumbArrJoin = NumbArr.join(" ")
console.log(NumbArrJoin);

/* Задание 4
С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
. */

const matrixArr = [];
const matrixFirstArr =[];
for ( a = 0; a < 3; a++){
    for (c = 0; c < 1; c++){
    let b =Math.round(Math.random()*100)
    matrixFirstArr.push(1);
}
matrixArr.push(matrixFirstArr);
}
console.log(matrixArr);

/* Задание 5
Дан массив: 
[1, 1, 1]
. Добавьте в конец массива значения 2, 2, 2. */
 const arr =[1,1,1];
 arr.push(2,2,2);
 console.log(arr);
 
/*  Задание 6
Дан массив: 
[9, 8, 7, 'a', 6, 5]
.С помощью метода  sort отсортируйте массив и удалите букву 
'a' из массива. Затем выведите массив. */

const confusingArr = [9, 8, 7, 'a', 6, 5]
confusingArr.splice(3,1);
confusingArr.sort(Number)

console.log(confusingArr);

/* Задание 7
Дан массив: 
[9, 8, 7, 6, 5]
.

Попросите пользователя угадать число с помощью метода 
prompt
. Если значение, которое ввел пользователь, есть в массиве, выведите в 
alert
 «Угадал», в противном случае — «Не угадал». */

/* const diffrentNumbers = [9,8,7,6,5];
const userNumber = +prompt(`Угадай число`);


if (diffrentNumbers.includes(userNumber))
{
    alert(`Угадал`);
    
 } else {
    alert(`Не угадал`);
    
 } */
/* Задание 8
 Дана строка: 'abcdef'. Выведите в консоль 
 'fedcba'.
 Для этого задания вам пригодится метод 
 reverse()
 . Он располагает элементы массива в порядке, обратном исходному. */
 let string =`abcdef`.split(``);
 console.log(string);
 string = string.reverse().join(``);
 console.log(string);


/*  Задание 9
 
 Дан массив: 
[[1, 2, 3],[4, 5, 6]]
. Выведите в консоль массив вида: 
[1, 2, 3, 4, 5, 6] */

const matrixArr2 = [
    [1,2,3],
    [4,5,6]
]

let arr1 = [];

matrixArr2.map((item) => {
    arr1 = [...arr1, ...item];
});

console.log(arr1);


/* Задание 10
Создайте массив с произвольными числами (диапазон от 
1
 до 
10
).
Переберите его с помощью цикла 
for
.
В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
Следующий элемент массива можно получить с помощью индекса: 
i + 1
. Обратите внимание, что у последнего элемента нет следующего. */

const randomArr = [2,4,7,8,9]
for ( i = 0; i < randomArr.length - 1; i++){
    if (i < randomArr.length - 1) console.log(randomArr[i] + randomArr[i + 1]);

}
/* Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. */
    
function NumberArr(array) {
    return array.map(elem => elem**2)
}
console.log(NumberArr(randomArr));

/* Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов. */

const arrString = ['Создайте', 'функцию', 'которая', 'принимает', 'на'];

function StrokeArr(array) {
    return array.map(elem => elem.length)
}
console.log(StrokeArr(arrString));

/* Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения. */
function NumberArr(array) {
    return array.filter(elem => elem < 0)
}
console.log(NumberArr(randomArr));
  
/* Задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random()
в диапазоне от 0 до 10.В данном массиве найдите все четные значения и добавьте их в новый массив.
Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями. */

const NextArr = Array(10).fill().map(() => Math.floor(Math.random()*11))
const NextArr2 =[];
let NextwArrFilter = NextArr.filter(elem => elem%2 === 0)
console.log( NextArr);
console.log(NextwArrFilter);

NextArr2.push(NextwArrFilter)
console.log(NextArr2);

 
/* Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
Math.random() в диапазоне от 1 до 10.

Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль. */
const ArifmeticArr = Array.from({length:6},() => Math.floor(Math.random()*10)+1)
console.log(ArifmeticArr);
let ArifmeticArrSum = ArifmeticArr.reduce((elem,value) => elem+value )
let ArifmeticArrResult = ArifmeticArrSum / ArifmeticArr.length
console.log(ArifmeticArrResult);
