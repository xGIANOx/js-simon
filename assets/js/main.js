let timeLeft = 30;
const elem = document.querySelector('.timer');
const timerId = setInterval(countdown, 1000);

const ul_element = document.querySelector('ul')




function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        
    }
}

for (let i = 0; i < 7; i++) {
    const random_num = Math.floor(Math.random() * 100) + 1;
    console.log(random_num);
    const li_element = `<li>${random_num}</li>`;
    ul_element.innerHTML += li_element
  }


    


function doSomething() {
    document.querySelector('main').innerHTML = '';
}