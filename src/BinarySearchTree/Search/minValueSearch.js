export const MinValueSearch = (node) => {
    if (node.left) {
        return MinValueSearch(node.left);
    } else {
        return node.value;
    }
}