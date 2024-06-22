/*
Given an array of integers nums and an integer k, 
return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.


Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2


Constraints:

    1 <= nums.length <= 2 * 104
    -1000 <= nums[i] <= 1000
    -107 <= k <= 107

*/

const subarraySum = (nums: number[], k: number): number => {
  const map = new Map();
  let sum = 0;
  let total = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const target = sum - k;

    if (map.has(target)) {
      total += map.get(target);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return total;
};

const arr = [1, 2, 3];
console.log(subarraySum(arr, 3));
