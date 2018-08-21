import test from "ava";
import { InsertionSort } from "../src/Sorting/insertionSort";

test("InsertionSort should sort an array", t => {
  const data = [2, 3, 4, 6, 7, 9, 10, 5, 1, 8];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = InsertionSort(data);

  for (let index = 0; index < actual.length; index++) {
    const actualElement = actual[index];
    const expectedElement = expectedResult[index];
    t.deepEqual(actualElement, expectedElement);
  }
});
