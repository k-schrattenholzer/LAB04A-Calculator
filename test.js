
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
