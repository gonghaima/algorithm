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