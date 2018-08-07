export const InsertionSort = (a) => {
    let arrData = [...a];
    let sortedData = [];
    for (let i = arrData.length; i > 0; i--) {
        //   for (let j = 1; j < i; j++) {
        //     if (arrData[j - 1] > arrData[j]) {
        //       const temp = arrData[j - 1];
        //       arrData[j - 1] = arrData[j];
        //       arrData[j] = temp;
        //     }
        //   }
        if (sortedData.length === 0) {
            sortedData.push(arrData[0]);
        } else {
            for (let x = sortedData.length - 1; x >= 0; x--) {
                if (arrData[i] < sortedData[x]) {
                    // for (let y = sortedData.length; y < x; y--) {
                    //     sortedData[y+1] = sortedData[y];
                    // }
                    sortedData[x + 1] = sortedData[x];
                } else {
                    sortedData[x + 1] = arrData[i];
                }
                sortedData[x] = arrData[i];
            }
        }
    }
    return arrData;
}