/*
Given an array of integers arr, return true if the number of 
occurrences of each value in the array is unique or false otherwise. 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


Example 2:

Input: arr = [1,2]
Output: false


Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true


Constraints:

    1 <= arr.length <= 1000
    -1000 <= arr[i] <= 1000
*/
/**
 * 
 * @param {Number[]} arr
 * @returns {Boolean}
 */
const uniqueOccurrences = (arr) => {
<<<<<<< HEAD
    const freqObj = {};

    arr.forEach(num => freqObj[num] ? freqObj[num]++ : freqObj[num] = 1);

    const findUniqueOccurrences = (num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num);

    return Object.values(freqObj).every(findUniqueOccurrences);
=======
    
>>>>>>> b1298665eba4eb060d9c180644170f0db230e798
};