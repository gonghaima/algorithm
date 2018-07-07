import test from 'ava';
import {BinarySearch} from '../src/binarySearch';


test('binary search rule should return the position of a given item', t => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = BinarySearch(data, 8);
  t.is(actual, 7);
});