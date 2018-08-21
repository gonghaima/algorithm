export const InsertionSort = data => {
  const lg = data.length;
  for (let i = 0; i < data.length; i++) {
    const currentElement = data[i];
    let subIndex;
    for (let j = i - 1; j > -1 && data[j] > currentElement; j--) {
      data[j + 1] = data[j];
      subIndex = j;
    }
    if (data.length <= lg) data[subIndex] = currentElement;
  }
  // console.log(`Lllllllennth --- ${data.length}----`);
  // console.log(`data result ---${data}----`);
  
  return data;
};
