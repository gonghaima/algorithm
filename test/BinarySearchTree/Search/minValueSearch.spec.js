import test from 'ava';
import mockedBinarySearchTree from '../../../mock/mockBinarySearchTree';
import {MinValueSearch} from '../../../src/BinarySearchTree/Search/minValueSearch'

test('MinValueSearch should return the smallest value from a given binary tree', t => {
    const minData = MinValueSearch(mockedBinarySearchTree.root);
    t.is(minData, 1);
});