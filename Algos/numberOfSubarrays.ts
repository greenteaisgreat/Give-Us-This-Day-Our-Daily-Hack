/*
Given an array of integers nums and an integer k. 
A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.


Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].


Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16


Constraints:

    1 <= nums.length <= 50000
    1 <= nums[i] <= 10^5
    1 <= k <= nums.length
*/

const numberOfSubarrays = (nums: number[], k: number): number => {
  const map = new Map();
  let sum = 0;
  let totalNice = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] % 2;
    const target = sum - k;

    if (map.has(target)) {
      totalNice += map.get(target);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return totalNice;
};

const arr = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
console.log(numberOfSubarrays(arr, 2));
