/**
 *
 * @param {Array} array
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let minValue = array[i];
    let minIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (minValue < array[j]) {
        array[j + 1] = array[j];
        minIndex = j;
      }
    }
    array[minIndex] = minValue;
  }

  return array;
}
