/*
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]

Output: [1,3,12,0,0]



Example 2:

Input: nums = [0]

Output: [0]



Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1


*/


/**
 * 
 * @param {Number[]} nums
 * @returns {void} After invoking the function, 
 * check the array you passed as an argument to see if its been performed in-place
 */
const moveZeroes = (nums) => {
    let low = 0;
    let high = low + 1;
    
    while (high < nums.length) {
        if (nums[low]) { //when nums[low] is 0, this condition equates to falsy
            low++;
            high++
        }
        else {
            if (nums[high]) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
        }
        high++;
    }
}

const arr = [0, 1, 0, 2, 3, 0, 4];

//can see result when Quokka is used
moveZeroes(arr);
arr;