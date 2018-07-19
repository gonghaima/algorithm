import test from 'ava';
import { DepthFirstSearch } from '../../../src/BinarySearchTree/Search/depthFirstSearch';

/** Binary search tree */
import BinarySearchTree from '../../../src/BinarySearchTree/Creation/binarySearchTree'
var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);

test('depth first search should return true if a value exists in a tree', t=>{
    const exists = DepthFirstSearch(bst.root, 4);
    t.is(exists, true);
});

test('depth first search should return false if a value does not exist in a tree', t=>{
    const exists = DepthFirstSearch(bst.root, 14);
    t.is(exists, false);
});