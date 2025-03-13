/* Task 1 Скрытие и показ текста
Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.
Инструкция:
В HTML создайте заголовок <h1>с текстом и кнопку.
Используйте метод querySelectorдля получения ссылок на заголовок и кнопку.
Используйте событие clickи метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова. */

const elemH1 = document.querySelector('h1')
const btnHide = document.getElementById(`btnHide`)
console.log(btnHide);
console.log(elemH1);
btnHide.addEventListener('click', function () {
    if (elemH1.style.display === 'none') {
        elemH1.style.display = `block`
        btnHide.textContent = 'Скрыть'
    }
    else {
        elemH1.style.display = `none`;
        btnHide.textContent = 'Показать';
    }
})
/* Task 2. Изменение стиля элемента
Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.
Инструкция:В HTML создайте абзац <p>и кнопку.Используйте метод querySelector для получения ссылки на абзац и кнопку.Используйте событие clickи метод addEventListener
, чтобы изменить стиль элемента, например его цвет.
Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим. */

const changeColorBtn = document.getElementById(`change__p-color`)
const changeColorP = document.querySelector(`.change__color-p`)
const originalColor = changeColorP.style.color = `black`
console.log(changeColorBtn);
console.log(changeColorP);
changeColorBtn.addEventListener(`click`, function () {
    if (changeColorP.style.color === `blue`) {
        changeColorP.style.color = originalColor
        changeColorBtn.style.textContent = 'Вернуть оригинальный цвет'
        changeColorBtn.style.borderColor = `red`
    }
    else {
        changeColorP.style.color = `blue`
        changeColorBtn.style.textContent = 'Вернуть цвет'
        changeColorBtn.style.borderColor = `black`
    }



});

/* Task 3. Динамическое изменение текста
Задача: создайте кнопку, которая меняет текст в заголовке <h1>.
Инструкция:
В HTML создайте заголовок <h1>с текстом и кнопку.
Используйте метод querySelectorдля получения ссылки на заголовок и кнопку.
Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!». */
const changeTextTitle = document.querySelector(`.change__text-title`);
const changeTextBtn = document.querySelector(`.change__text-btn`);
const originalText = changeTextTitle.textContent;

changeTextBtn.addEventListener(`click`, function () {
    changeTextTitle.textContent = 'Привет  я измененный текст'
})

/* Task 4. Поиск и изменение элементов по классу
Задача: найдите все элементы с классом
description и измените их текст на «Измененный текст».
Инструкция:
В HTML создайте несколько элементов с классом description.
Используйте методquerySelectorAllдля поиска всех элементов с этим классом.
Переберите найденные элементы и измените их текстовое содержимое с помощью свойстваtextContent .
Как должно работать: после выполнения скрипта все элементы с классомdescription
изменяют свой текст на «Измененный текст». */
const descriptionEl = document.querySelectorAll(`.description__box-content`);
const descriptionBtn = document.querySelector(`.descriprion__box-btn`);
descriptionBtn.addEventListener('click', function () {
    descriptionEl.forEach(el => {
        el.textContent = 'Текст который тут есть'
    });
})
/* Task 5. Работа с querySelectorAll
 Задача: создайте несколько элементов 
 <p>с разными классами. Используйте querySelectorAll, чтобы найти все элементы с классом descriptionи изменить их текст.
 Инструкция:
 В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
 Используйте querySelectorAllдля поиска всех элементов с классом description.
 Переберите найденные элементы и измените их текстовое содержимое.
 Как должно работать: после выполнения скрипта все элементы с классом 
 description изменяют свой текст на «Новый текст». */
const allPboxElems = document.querySelectorAll('.p__box-description')
allPboxElems.forEach(element => {
    element.textContent = ' Привет, я текст';
});
/* Task 6. Добавление нового элемента в DOM
Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.
Инструкция:
В HTML создайте кнопку.Используйте метод createElementдля создания нового элемента.Используйте appendChild
 для добавления нового элемента в конец документа при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац». */
const createElBtn = document.querySelector(`.createEl-btn`);
createElBtn.addEventListener('click', function () {
    const newText = document.createElement('p')
    newText.textContent = ' Я новый параграф'
    newText.classList.add('createElem');
    document.body.append(newText);
});
/* Task 7. Удаление элемента
Задача: создайте кнопку, которая удаляет первый элемент <p>с классом description.
Инструкция:В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
Используйте метод querySelector
для поиска первого элемента с классом 
description.
Используйте метод removeдля удаления этого элемента при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом 
description со страницы. */

const removeBtn = document.querySelector(`.remove__box-btn`)
removeBtn.addEventListener('click', function () {
    const removeP = document.querySelector(`.remove__box-p-true`);
    if (removeP) {
        removeP.remove();

    }
})

const comment = '  Где то названия классов будут отличатся  - слишком много description для одной страницы =)))'
alert(comment);