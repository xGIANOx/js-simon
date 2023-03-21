let timeLeft = 30;
const elem = document.querySelector('.timer');
const timerId = setInterval(countdown, 1000);
const form_element = document.querySelector('form');

const ul_element = document.querySelector('ul')

for (let i = 0; i < 7; i++) {
  random_num = Math.floor(Math.random() * 100) + 1;
  console.log(random_num);
  const li_element = `<li>${random_num}</li>`;
  ul_element.innerHTML += li_element;
}

form_element.style.display = 'none';

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    hide_numbers();
    form_element.style.display = 'grid';
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function hide_numbers() {
    document.querySelector('.timer_section').innerHTML = '';
}

function checkGuesses() {
  

    const userGuesses = [];
    for (let i = 1; i <= 7; i++) {
      const userNum = parseInt(document.getElementById(`num${i}`).value);
      userGuesses.push(userNum);
    }
  
    const randomNums = Array.from(ul_element.children).map(li => parseInt(li.innerText));
  
    let correctGuesses = 0;
    for (let i = 0; i < 7; i++) {
      if (randomNums[i] === userGuesses[i]) {
        correctGuesses++;
      }
    }

    const winEl = document.querySelector('.win')
   

    const pointsEl = document.querySelector('.points')
    
   
    if (correctGuesses === 7) {
        winEl.innerHTML += `Congratulations! You guessed all 7 numbers correctly!`;
    } else {
        pointsEl.innerHTML += `You guessed ${correctGuesses} out of 7 numbers correctly.`;
    }
  }