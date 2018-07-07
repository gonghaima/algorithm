export const BinarySearch = ([...data], searchItem) => {
  let left = 0;
  let right = data.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (searchItem > data[mid]) {
      left = mid + 1;
    } else if (searchItem < data[mid]) {
      right = mid - 1;
    } else if (searchItem = data[mid]) {
      return mid;
    }
  }
  return -1;
}