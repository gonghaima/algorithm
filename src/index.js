/** Binary search */
import { BinarySearch } from './binarySearch';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const BinarySearchResult = BinarySearch(data, 8);
console.log(`BinarySearchResult - index of the given value: ${BinarySearchResult}`);

/** Bubble sort */
const dataBubleSort = [1, 8, 2, 9, 3, 4, 6, 7, 5, 10];
import { BubbleSort } from './babbleSort';
const BableSortResult = BubbleSort(dataBubleSort);
console.log(`BableSortResult: ${BableSortResult}`);


/** Binary search tree */
import BinarySearchTree from "./BinarySearchTree/Creation/binarySearchTree";
var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
console.log(`Binary tree has been created: ${bst}`);

/** Binary tree depth search */
import { DepthFirstSearch } from "./BinarySearchTree/Search/depthFirstSearch";
const searchVal = 14; 
const searchVal1 = 5; 
let exists = DepthFirstSearch(bst.root, searchVal);
let exists1 = DepthFirstSearch(bst.root, searchVal1);


console.log(`The value ${searchVal} is in the binary tree: ${exists}`);
console.log(`The value ${searchVal1} is in the binary tree: ${exists1}`);
