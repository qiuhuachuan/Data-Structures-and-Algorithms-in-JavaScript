/**
 *
 * @param {Array} array
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let middle = Math.ceil(array.length / 2);
    let leftList = array.slice(0, middle);
    let rightList = array.slice(middle, array.length);
    leftList = mergeSort(leftList);
    rightList = mergeSort(rightList);
    let result = [];
    while (leftList.length && rightList.length) {
      if (leftList[0] < rightList[0]) {
        result.push(leftList.shift());
      } else {
        result.push(rightList.shift());
      }
    }

    if (leftList.length) {
      return result.concat(leftList);
    } else {
      return result.concat(rightList);
    }
  }
}
