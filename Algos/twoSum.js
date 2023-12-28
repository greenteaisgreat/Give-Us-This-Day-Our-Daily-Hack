/*
Create a twoSum algorithm that returns true or false if any two
elements' values sum to the passed in target value

Extra credit: try to solve it in O(n) time complexity!
*/

const myArr = [1, 2, 3, 4, 5];

// O(n^2)
const twoSumNaive = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

console.time('twoSumNaive');
console.log(twoSumNaive(myArr, 19));
console.timeEnd('twoSumNaive');


// O(n) time complexity
const twoSumFast = (arr, target) => {
  const cache = {};

  for (const index in arr) {
    const targetSum = target - arr[index];
    if (cache[targetSum]) return true;
    cache[arr[index]] = index;
  }
  return false;
}

console.time('twoSumFast');
console.log(twoSumFast(myArr, 19));
console.timeEnd('twoSumFast');

// O(n) time complexity; Set() and Map() both have O(1) innate time complexities, but due to
// the for...of loop, this will evaluate to O(n)
const twoSumSet = (arr, target) => {
  const cache = new Set();

  for (const num of arr) {
    const targetSum = target - num;
    if (cache.has(targetSum)) return true;
    cache.add(num);
  }
  return false;
}

console.time('twoSumSet');
console.log(twoSumSet(myArr, 19));
console.timeEnd('twoSumSet');