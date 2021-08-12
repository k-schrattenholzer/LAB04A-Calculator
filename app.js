
import { add, subtract, multiply, divide } from './utils.js';

const addEl1 = document.getElementById ('add-num1');
const addEl2 = document.getElementById ('add-num2');
const subEl1 = document.getElementById ('sub-num1');
const subEl2 = document.getElementById ('sub-num2');
const multEl1 = document.getElementById ('mult-num1');
const multEl2 = document.getElementById ('mult-num2');
const divEl1 = document.getElementById ('div-num1');
const divEl2 = document.getElementById ('div-num2');
const addButton = document.getElementById ('add-button');
const addAnswer = document.getElementById ('add-answer');
const subButton = document.getElementById ('sub-button');
const subAnswer = document.getElementById ('sub-answer');
const multAnswer = document.getElementById ('mult-answer');
const multButton = document.getElementById ('mult-button');
const divButton = document.getElementById ('div-button');
const divAnswer = document.getElementById ('div-answer');

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
multButton.addEventListener('click', () => {
    const x = Number(multEl1.value);
    const y = Number(multEl2.value);
    const result = multiply(x, y);
    multAnswer.textContent = result;
});
divButton.addEventListener('click', () => {
    const x = Number(divEl1.value);
    const y = Number(divEl2.value);
    const result = divide(x, y);
    divAnswer.textContent = result;
});
