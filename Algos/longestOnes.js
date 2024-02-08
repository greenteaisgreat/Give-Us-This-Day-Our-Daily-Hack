/*
Given a binary array nums and an integer k, return the maximum number of 
consecutive 1's in the array if you can flip at most k 0's.

 
Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6

Explanation: [1,1,1,0,0,*1*,1,1,1,1,*1*]
The longest subarray has asterisks on the 0's changed to 1's



Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10

Explanation: [0,0,1,1,*1*,*1*,1,1,1,*1*,1,1,0,0,0,1,1,1,1]
The longest subarray has asterisks on the 0's changed to 1's


Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
    0 <= k <= nums.length
*/

/**
 * @param {Number[]} nums
 * @param {Number} k
 * @returns {Number}
 */
const longestOnes = (nums, k) => {
    let window = 0;
    let i = 0;

    for (; i < nums.length; i++) {
        if (!nums[i]) k--;

        if (k < 0) {
            if (!nums[window]) k++;
            window++;
        }
    }

    return i - window;
}

const nums = [1,1,1,0,0,0,1,1,1,1,0];

console.log(longestOnes(nums, 2));