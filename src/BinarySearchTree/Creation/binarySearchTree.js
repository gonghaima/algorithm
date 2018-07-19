// export const BinarySearchTree = () => {
//     let root;
//     const push = function(params) {
//         let root = this.root;
//         console.log(`still workiing`);

//     }
// }

import { Node } from "./node";
export default class BinarySearchTree {
    push(val) {
        let root = this.root;
        if (!root) {
            this.root = new Node(val);
            console.log('add root');
            return;
        }
        let currentNode = root;
        let newNode = new Node(val);

        while (currentNode) {
            if (val < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // depthFirstSearch(node) {
    //     if (node) {
    //         console.log(node.value);
    //         depthFirstSearch(node.left);
    //         depthFirstSearch(node.right);
    //     }
    // }

    // depthFirstSearch(node) {
    //     if(!node){
    //         depthFirstSearch(this.root);
    //     }
    //     if (node) {
    //         console.log(node.value);
    //         depthFirstSearch(node.left);
    //         depthFirstSearch(node.right);
    //     }
    // }
}