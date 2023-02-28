// const blocks = document.querySelectorAll(".over");
// const blocks2 = document.querySelectorAll(".text");

// blocks.forEach(block => {
//   block.addEventListener("mouseover", function (){
//     blocks2.forEach (blockx => {
//       blockx.style.color = "rgba(0,0,0,0)";
//     });
//   });
//   block.addEventListener("mouseleave", function () {
//     blocks2.forEach (blocky => {
//       blocky.style.color = "black";
//     });
//   });
// });

// let words = ['slay', 'you go gurl', 'psichiatria'];
let words = ['A', 'B', 'C']; // даём коду массив откуда брать слово
let usedWords = []; // даём коду массив куда убирать использованное слово
var lastWord // переменная последнего использованного слова

function updateText() { // ОГРОМНАЯ ФУНКЦИЯ ОБНОВЛЕНИЯ ТЕКСТА
  let randomIndex
  // let text = document.querySelector('.text');

  function getRandomIndex() { // функция чтобы получить случайный индекс для выбора слова из массива
    const max = words.length; // говорим что максимум это всегда длинна массива
    randomIndex = Math.floor(Math.random() * (max));
    // console.log(randomIndex)
    return randomIndex;
  }

  getRandomIndex() // получаем индекс

  if (words.length > 0 && lastWord !== (words[randomIndex])) {
    // смотрим есть ли что-то в массиве слов и не совпадает ли выбранное слово с последним использованным

    // text.textContent = words[randomIndex]; // здесь обновляем текст на странице, !НЕ РАБОТАЕТ В ВСКОДЕ!
    if (usedWords <= 0) { console.log('WORDS: ' + words) }; // логим массив слов если использованных ещё нет
    usedWords.push(words[randomIndex]); // копируем использованное слово в свой массив
    words.splice(randomIndex, 1) // удаляем использованное слово из массива слов
    console.log('USED: ' + usedWords) // логим использованные слова
    if (words.length > 0) { console.log('WORDS: ' + words) } // если слова ещё есть логим оставшиеся
    lastWord = usedWords[usedWords.length - 1] // декларируем последнее слово

  } else if (words.length > 0 && lastWord === (words[randomIndex])) { 
    // если ещё есть неиспользованные слова и последнее слово совпадает с выбранным по индексу

    console.log('REPETITION') // ругаемся
    do { // просим повторить выдачу индекса...
      getRandomIndex()
  } while (lastWord === (words[randomIndex])) 
    // ...пока последнее слово не перестанет с ним совпадать
  }

  else if (words.length === 0) { // если не осталось неиспользованных слов
    words.push(...usedWords) // пушим использованные обратно домой
    usedWords.splice(0, usedWords.length) // очищаем массив использованных
    console.log('LEFT: 0, NEW CYCLE') // увеломляем
    // console.log(words[randomIndex]) 
    // console.log(lastWord)
  }
}

let timerId = setInterval(() => updateText(), 100); // повторяем обновление текста очень часто
// setTimeout(() => { clearInterval(timerId); }, 1000); 
   // откомментить чтобы остановить обновление через секунду после начала