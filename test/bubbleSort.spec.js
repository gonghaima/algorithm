import test from 'ava';
import { InsertionSort } from '../src/Sorting/insertionSort';

test('binary search rule should return the position of a given item', t => {
  const data = [2, 3, 4, 6, 7, 9, 10, 5, 1, 8];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = InsertionSort(data);
  t.deepEqual(actual, expectedResult);
});