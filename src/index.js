/** Binary search */
import { BinarySearch } from './binarySearch';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const BinarySearchResult = BinarySearch(data, 8);
console.log(`BinarySearchResult - index of the given value: ${BinarySearchResult}`);

/** Bubble sort */
const dataBubleSort = [1, 8, 2, 9, 3, 4, 6, 7, 5, 10];
import { BubbleSort } from './Sorting/babbleSort';
const BableSortResult = BubbleSort(dataBubleSort);
console.log(`BableSortResult: ${BableSortResult}`);

/** Insertion sort */
const dataInsertion = [1, 8, 2, 9, 3, 4, 6, 7, 5, 10];
import { InsertionSort } from './Sorting/InsertionSort';
const InsertionSortResult = InsertionSort(dataInsertion);
console.log(`InsertionSortResult: ${InsertionSortResult}`);


/** Binary search tree */
import BinarySearchTree from "./BinarySearchTree/Creation/binarySearchTree";
import mockedBinarySearchTree from "../mock/mockBinarySearchTree";

console.log(`Binary tree has been created: ${mockedBinarySearchTree}`);

/** Binary tree depth search */
import { DepthFirstSearch } from "./BinarySearchTree/Search/depthFirstSearch";
const searchVal = 14;
const searchVal1 = 5;
let exists = DepthFirstSearch(mockedBinarySearchTree.root, searchVal);
let exists1 = DepthFirstSearch(mockedBinarySearchTree.root, searchVal1);

console.log(`The value ${searchVal} is in the binary tree: ${exists}`);
console.log(`The value ${searchVal1} is in the binary tree: ${exists1}`);

/** Binary tree min value search */
import { MinValueSearch } from "./BinarySearchTree/Search/minValueSearch";
const minVal = MinValueSearch(mockedBinarySearchTree.root);
console.log(`The min value in the tree is: ${minVal}`);

/** Binary tree height */
import { Height } from './BinarySearchTree/Search/height';
const ht = Height(mockedBinarySearchTree.root, 0);
console.log(`The height in the tree is: ${ht}`);
