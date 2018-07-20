import test from 'ava';
import mockedBinarySearchTree from '../../../mock/mockBinarySearchTree';
import {MaxValueSearch} from '../../../src/BinarySearchTree/Search/maxValueSearch'

test('MaxValueSearch should return the smallest value from a given binary tree', t => {
    const maxData = MaxValueSearch(mockedBinarySearchTree.root);
    t.is(maxData, 5);
});