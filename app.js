
// import functions and grab DOM elements

import { add } from './utils.js';

const addEl1 = document.getElementById ('add-num1');
const addEl2 = document.getElementById ('add-num2');
const addButton = document.getElementById ('add-button');
const addAnswer = document.getElementById ('add-answer');

//

addButton.addEventListener('click', () => {
    const x = Number(addEl1.value);
    const y = Number(addEl2.value);
    const result = add(x, y);
    addAnswer.textContent = result;
});
