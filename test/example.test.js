
import { add } from '../utils.js' ;

test('add should take in 5 and 2 and return 7', (expect) => {
    const expected = 7;
    const actual = add(5, 2);
    expect.equal(actual, expected);
});
