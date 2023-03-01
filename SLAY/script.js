const blocks = document.querySelectorAll(".over");
const blocks2 = document.querySelectorAll(".text");

blocks.forEach(block => {
  block.addEventListener("mouseover", function (){
    blocks2.forEach (blockx => {
      blockx.style.color = "rgba(0,0,0,0)";
    });
  });
  block.addEventListener("mouseleave", function () {
    blocks2.forEach (blocky => {
      blocky.style.color = "black";
    });
  });
});





// let words = ['slay', 'you go gurl', 'psichiatria'];
let words = ['A', 'B', 'C']; // даём коду массив откуда брать слово
let usedWords = []; // даём коду массив куда убирать использованное слово
var lastWord // переменная последнего использованного слова


function getRI() { // функция чтобы получить случайный индекс для выбора слова из массива
  const max = words.length; // говорим что максимум это всегда длинна массива
  const randomIndex = Math.floor(Math.random() * (max));
  // console.log(randomIndex)
  return randomIndex;
}

function updateText() { // ОГРОМНАЯ ФУНКЦИЯ ОБНОВЛЕНИЯ ТЕКСТА
  let text = document.querySelector('.text');

  
  let randomIndex = getRI();

  if (words.length == 0) { // если не осталось неиспользованных слов
    words.push(...usedWords) // пушим использованные обратно домой
    usedWords.splice(0, usedWords.length) // очищаем массив использованных
    console.log('LEFT: 0, NEW CYCLE') // увеломляем
    // console.log(words[randomIndex]) 
    // console.log(lastWord)
  }
  randomIndex = getRI(); // иначе почти всё время 0, индекс не обновляется
  
   while (lastWord == (words[randomIndex])) {
    console.log('REPETITION FOUND: ' + lastWord)
    randomIndex = getRI() // получаем индекс
  };


  if (words.length > 0) {
    // смотрим есть ли что-то в массиве слов и не совпадает ли выбранное слово с последним использованным
    
    text.textContent = words[randomIndex]; // здесь обновляем текст на странице, !НЕ РАБОТАЕТ В ВСКОДЕ!

    if (usedWords <= 0) { console.log('WORDS: ' + words) }; // логим массив слов если использованных ещё нет
    
    usedWords.push(words[randomIndex]); // копируем использованное слово в свой массив
    words.splice(randomIndex, 1) // удаляем использованное слово из массива слов
    console.log('USED: ' + usedWords) // логим использованные слова
    
    if (words.length > 0) { console.log('WORDS: ' + words) } // если слова ещё есть логим оставшиеся
    lastWord = usedWords[usedWords.length - 1] // декларируем последнее слово

  }
}

setInterval(() => updateText(), 1000); // повторяем обновление текста очень часто
// setTimeout(() => { clearInterval(timerId); }, 1000); 
   // откомментить чтобы остановить обновление через секунду после начала