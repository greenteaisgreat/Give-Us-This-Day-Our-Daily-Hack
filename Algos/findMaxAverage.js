/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value 
and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 
Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75



Example 2:

Input: nums = [5], k = 1
Output: 5.00000

 
Constraints:

    n == nums.length
    1 <= k <= n <= 105
    -104 <= nums[i] <= 104
*/

/**
 * @param {Number[]} nums
 * @param {Number} k
 * @returns {Number}
 */
const findMaxAverage = (nums, k) => {
    let sum = 0;
    let max = 0;

    //get the average of the first k elements in nums
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    //assign max to the initial average
    max = sum / k;

    //gets the averages of all k contiguous numbers, leaving out the 
    //earliest element:
    //1st iteration: sum(2) += nums[i](50) - nums[i - k](1) === 51
    //2nd iteration: sum(51) += nums[i](3) - nums[i - k](12) === 42
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum /k);
    }

    return max;
}

const nums = [1,12,-5,-6,50,3];
const k = 4;

console.log(findMaxAverage(nums, k));