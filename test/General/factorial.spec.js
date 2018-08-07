import test from '../../node_modules/ava';
import {factorial} from '../../src/General/factorial';

test('factorial function should return n! multilply result', t=>{
    const actual = factorial(4);
    t.is(actual,24);
});