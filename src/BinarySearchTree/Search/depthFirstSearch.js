// export const DepthFirstSearch = (node)=>{
//     if(node){
//         console.log(node.value);
//         DepthFirstSearch(node.left);
//         DepthFirstSearch(node.right);
//     }
// }

export const DepthFirstSearch = (node, searchVal) => {
    if (node) {
        if (node.value !== searchVal) {
            return DepthFirstSearch(node.left, searchVal) || DepthFirstSearch(node.right, searchVal);
        } else {
            return true;
        }
    }
    return false;
}