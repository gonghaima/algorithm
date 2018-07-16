// export const BubbleSort = (a) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (var i = 0; i < a.length - 1; i++) {
//       if (a[i] > a[i + 1]) {
//         var temp = a[i];
//         a[i] = a[i + 1];
//         a[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return a;
// }

export const BubbleSort = (a) => {
  let arrData = [...a];
  for (let i = arrData.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arrData[j - 1] > arrData[j]) {
        const temp = arrData[j - 1];
        arrData[j - 1] = arrData[j];
        arrData[j] = temp;
      }
    }
  }
  return arrData;
}