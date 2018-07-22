/** Currently only returns the max of left or right,
 * but not considering anywhere in the middle.
 * Is there a case that middle could be the longest?
 * */
// export const Height = (node) => {
//     if (!node) return 0;
//     const valLeft =  Height(node.left);
//     const valRight =  Height(node.left);
//     return Math.max(valLeft, valRight)+1;
// }

// export const Height = (node, rightLvl) => {
//     if (!node) return rightLvl;
//     rightLvl+=1;
//     return Height(node.right, rightLvl);
// }

// export const Height = (node, rightLvl, leftLvl) => {
//     if (!node) return rightLvl;
//     rightLvl+=1;
//     return Height(node.right, rightLvl);
// }


/** working copy start - only considering left and right */
const HeightR = (node, rightLvl) => {
    if (!node) return rightLvl;
    rightLvl += 1;
    return HeightR(node.right, rightLvl);
}

const HeightL = (node, leftLvl) => {
    if (!node) return leftLvl;
    leftLvl += 1;
    return HeightL(node.left, leftLvl);
}

export const Height = (node) => {
    const rLvl = HeightR(node, 0);
    const lLvl = HeightL(node, 0);
    return Math.max(lLvl, rLvl);
}
/** working copy end - only considering left and right */


/** Not working - start */
// export const Height = (node, currentLvl) => {
//     if (node) { } else {
//         return currentLvl;
//     };
//     let exist = true;
//     while (exist) {
//         currentLvl++;
//         return Math.max(Height(node.left, currentLvl), Height(node.right, currentLvl));
//     }
//     return currentLvl;
// }
/** Not working - end */

