/**
 *                 3
            2.   	      4
       1.  null.       null.  5
 */
import BinarySearchTree from '../../src/BinarySearchTree/Creation/binarySearchTree';
import test from '../../node_modules/ava';
import {DepthFirstSearch} from "../../src/BinarySearchTree/Search/depthFirstSearch";

test('binary tree should allocate value into correct position', t => {
    var bst = new BinarySearchTree();
    bst.push(3);
    bst.push(2);
    bst.push(4);
    bst.push(1);
    bst.push(5);
    t.is(bst.root.value, 3);
    t.is(bst.root.left.left.value, 1);
});

test('DepthFirstSearch should log all values first', t => {
    var bst = new BinarySearchTree();
    bst.push(3);
    bst.push(2);
    bst.push(4);
    bst.push(1);
    bst.push(5);
    const result = DepthFirstSearch(bst.root, 3);
    const result1 = DepthFirstSearch(bst.root, 9);
    const result2 = DepthFirstSearch(bst.root, 5);
    t.is(result, true);
    t.is(result1, false);
    t.is(result2, true);
});