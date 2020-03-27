/**
 *
 * @param {Array} array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minValue = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (minValue > array[j]) {
        minValue = array[j];
        minIndex = j;
      }
    }
    if (i != minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}
