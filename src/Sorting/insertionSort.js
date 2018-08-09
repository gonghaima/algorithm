export const InsertionSort = data => {
  for (let i = 0; i < data.length; i++) {
    const currentElement = data[i];
    let subIndex;
    for (let j = i - 1; j > -1 && data[j] > currentElement; j--) {
      data[j + 1] = data[j];
      subIndex=j;
    }
    data[subIndex] = currentElement;
  }
  return data;
}