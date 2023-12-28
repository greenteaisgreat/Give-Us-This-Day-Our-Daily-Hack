/*
Create a twoSum algorithm that returns true or false if any two
element's values sum to the passed in target value

Extra credit: try to solve it in O(n) time complexity!
*/

//O(n^2) time complexity
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

//O(n) time complexity
const twoSumFast = (arr, target) => {
  const cache = {};

  for (const index in arr) {
    const targetSum = target - arr[index];

    if (cache[targetSum]) return true;

    cache[arr[index]] = index;
  }

  return false;
}
