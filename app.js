
// import functions and grab DOM elements

import { add, subtract, multiply, divide } from './utils.js';

const addEl1 = document.getElementById ('add-num1');
const addEl2 = document.getElementById ('add-num2');
const subEl1 = document.getElementById ('sub-num1');
const subEl2 = document.getElementById ('sub-num2');
const addButton = document.getElementById ('add-button');
const addAnswer = document.getElementById ('add-answer');
const subButton = document.getElementById ('sub-button');
const subAnswer = document.getElementById ('sub-answer');

//

addButton.addEventListener('click', () => {
    const x = Number(addEl1.value);
    const y = Number(addEl2.value);
    const result = add(x, y);
    addAnswer.textContent = result;
});

subButton.addEventListener('click', () => {
    const x = Number(subEl1.value);
    const y = Number(subEl2.value);
    const result = subtract(x, y);
    subAnswer.textContent = result;
});
