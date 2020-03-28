/**
 *
 * @param {Array} array
 */
function quickSort(array) {
  let less = [];
  let pivotList = [];
  let more = [];

  if (array.length <= 1) {
    return array;
  } else {
    let pivot = array[0];
    for (let value of array) {
      if (value < pivot) {
        less.push(value);
      } else if (value > pivot) {
        more.push(value);
      } else {
        pivotList.push(value);
      }
    }
  }

  less = quickSort(less);
  more = quickSort(more);

  return [].concat(less, pivotList, more);
}
