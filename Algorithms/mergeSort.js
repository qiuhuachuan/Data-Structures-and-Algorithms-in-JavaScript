/**
 *
 * @param {Array} array
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array; // 终止条件
  } else {
    let middle = Math.ceil(array.length / 2); // 找到一个中间分隔点
    let leftList = array.slice(0, middle); // 中间分隔点(不包含在内)左边的分到一组
    let rightList = array.slice(middle, array.length); // 中间分隔点(包含在内)右边的分到一组
    leftList = mergeSort(leftList); // 递归调用
    rightList = mergeSort(rightList); // 递归调用

    let result = [];
    while (leftList.length && rightList.length) {
      // 对左右的数组中的元素进行逐个比较、合并，产生局部有序的数组
      if (leftList[0] < rightList[0]) {
        result.push(leftList.shift());
      } else {
        result.push(rightList.shift());
      }
    }
    // 左右两个数组逐个元素比较后，会有某一个数组还有剩余的已经完成排序的元素，拼接即可
    if (leftList.length) {
      return result.concat(leftList);
    } else {
      return result.concat(rightList);
    }
  }
}
