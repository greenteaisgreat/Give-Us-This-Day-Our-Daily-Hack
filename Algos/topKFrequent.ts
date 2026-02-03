/*
Given an integer array nums and an integer k, 
return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Example 2:

Input: nums = [7,7], k = 1

Output: [7]
*/

const topKFrequentElements = (nums: number[], k: number): number[] => {
  const numsCache: Record<number, number> = {};
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (!numsCache[n]) {
      numsCache[n] = 1;
    } else {
      numsCache[n]++;
    }
  }

  const sorted = Object.entries(numsCache).sort((a, b) => b[1] - a[1]);

  let i = 0;

  while (k > 0) {
    res.push(Number(sorted[i][0]));
    i++;
    k--;
  }
  return res;
};
