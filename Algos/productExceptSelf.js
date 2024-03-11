/*
Given an integer array 'nums', return an array answer such that answer[i] 
is equal to the product of all the elements of 'nums' except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit 
in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using 
the division operation.

 
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

/**
 * @param {Number[]} nums
 * @returns {Number[]}
 */
const productExceptSelf = (nums) => {
  const result = Array(nums.length).fill(1);
  const curr = Array(2).fill(1);

  //i starts at 1 so we can start checking pairs
  for (let i = 1; i < nums.length; i++) {
    curr[0] *= nums[i - 1];
    curr[1] *= nums[nums.length - i];

    result[i] *= curr[0];
    result[nums.length - i - 1] *= curr[1];
  }

  return result;
};

const arr = [1, 2, 3, 4];

productExceptSelf(arr);
