let words = ['slay', 'you go gurl', 'psichiatria']; // массив исходных слов
let usedWords = []; // массив использованных слов
let lastWord // последнее использованное слово

// функция задают реакцию после наведение мышки на поле поверх текста
function overlayMethod() {
  
  const blocks = document.querySelectorAll(".over");
  const blocks2 = document.querySelectorAll(".text");

  blocks.forEach(block => {
    block.addEventListener("mouseover", function () {
      blocks2.forEach(blockx => {
        blockx.style.color = "rgba(0,0,0,0)";
      });
    });
    block.addEventListener("mouseleave", function () {
      blocks2.forEach(blocky => {
        blocky.style.color = "black";
      });
    });
  });
}

// функция возращает использованные слова в исходный массив, если тот пуст
function ifWordsEmpty(arr, arr2) {
  
  if (arr.length === 0) { // если не осталось неиспользованных слов
    
    arr.push(...arr2); // пушим использованные слова в исходный массив
    arr2.splice(0, arr2.length); // очищаем массив использованных слов
    console.log('NEW CYCLE'); // уведомляем о начале нового цикла
    
  }
}

// функция проверяет наличие слов в исходном массиве и совпадает ли выбранное слово с последним использованным
function ifWordsNotEmpty(arr, arr2, text, randomIndex) {

  if (arr.length > 0) {

    text.textContent = arr[randomIndex]; // обновляем текст на странице

    if (arr2 === 0) {
      console.log('WORDS: ' + arr); // печатаем в консоль массив слов если использованных ещё нет
    }
    
    arr2.push(arr[randomIndex]); // копируем использованное слово в свой массив
    arr.splice(randomIndex, 1); // удаляем использованное слово из массива слов
    console.log('USED: ' + arr2); // логим использованные слова

    // печатаем в консоль оставшиеся слова, если они есть
    if (arr.length > 0) {
      console.log('WORDS: ' + arr);
    }

    lastWord = arr2[arr2.length - 1]; // декларируем последнее слово
  
  }
}

// функция проверяет повторяет ли слово по новому индексу последнее использованное слово
function checkRepetition(arr, randomIndex) {
  
  while (lastWord === (arr[randomIndex])) {
    console.log('REPETITION FOUND: ' + lastWord);
    randomIndex = getRandomIndex(arr); // получаем индекс
  }
  return randomIndex;
}

// функция генерирует случайный индекс для выбора слова из массива
function getRandomIndex(arr) {
  
  const max = arr.length; // определяем максимальный индекс длинной массива
  const randomIndex = Math.floor(Math.random() * (max));
  return randomIndex;

}

// функция обновляет текст на странице, запуская функции проверок
function updateText() {

  let text = document.querySelector('.text');

  ifWordsEmpty(words, usedWords);

  let randomIndex = getRandomIndex(words);

  randomIndex = checkRepetition(words, randomIndex);

  ifWordsNotEmpty(words, usedWords, text, randomIndex);

}

overlayMethod();
updateText();
let timerId = setInterval(() => updateText(), 10000); // повторяет обновление текста через заданный интервал
// setTimeout(() => { clearInterval(timerId); }, 5000); // останавливает обновление через заданное время