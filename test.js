
import { add, subtract, multiply, divide } from './utils.js' ;

test('add should take in 5 and 2 and return 7', (expect) => {
    const expected = 7;
    const actual = add(5, 2);
    expect.equal(actual, expected);
});

test('sub should take in 6 and 2 and return 4', (expect) => {
    const expected = 4;
    const actual = subtract(6, 2);
    expect.equal(actual, expected);
});

test('multiply should take in 5 and 10 and return 500', (expect) => {
    const expected = 500;
    const actual = multiply(5, 10);
    expect.equal(actual, expected);
});

test('div should take in 210 and 3 return 70', (expect) => {
    const expected = 70;
    const actual = divide(210, 3);
    expect.equal(actual, expected);
});
