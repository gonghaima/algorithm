export const InsertionSort = (data) => {
    for(var i = 0; i < data.length; i++) {
      var temp = data[i];
      var j = i - 1;
      while (j >= 0 && data[j] > temp) {
        data[j + 1] = data[j];
        j--;
      }
      data[j + 1] = temp;
    }
    return data;
  }