/*
Create a mergeSort algorithm
*/

const merge = (left, right) => {
  const mergeArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) mergeArr.push(left.shift());
    else mergeArr.push(right.shift());
  }

  return [...mergeArr, ...left, ...right];
}

// O(n log(n)) time complexity
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const arr = [4, 1, 9, 7, 5, 6];

console.log(mergeSort(arr));