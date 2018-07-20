export const MaxValueSearch = (node) => {
    if (node.right) {
        return MaxValueSearch(node.right);
    } else {
        return node.value;
    }
}