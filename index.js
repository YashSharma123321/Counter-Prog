const counter = document.getElementById('count');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const reset = document.getElementById('reset');
const container = document.querySelector('.container');


let count = 0;

inc.addEventListener('click',() =>{
  count++;
  counter.textContent = count;
  updateCounterColor();
})

dec.addEventListener('click',() =>{
  count--;
  counter.textContent = count;
  updateCounterColor();
})

reset.addEventListener('click',() =>{
  count = 0;
  counter.textContent = count;
  updateCounterColor();
})

function updateCounterColor() {
  if (count > 0) {
    counter.style.color = 'green';
    container.style.backgroundColor = '#e0ffe0'; // light green
  } else if (count < 0) {
    counter.style.color = 'red';
    container.style.backgroundColor = '#ffe0e0'; // light red
  } else {
    counter.style.color = 'black';
    container.style.backgroundColor = 'white'; // neutral
  }
}
