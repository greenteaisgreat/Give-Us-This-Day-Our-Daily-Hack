/*
You are given an integer array height of length n. There are n vertical lines 
drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the 
container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:



     | | _____________________| |_________
     | |  5     5     5     5 | | 5     5 | |  == 30
     | |    | |         | |   | |         | |
     | |    | |   | |   | |   | |   | |   | |
| |  | |    | |   | |   | |   | |   | |   | |
| |  | |    | |   | |   | |   | |   | |   | |
----------------------------------------------

Input: height = [2,6,4,3,4,6,3,5]
Output: 30
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (space under the horizontal line) the container can contain is 49.


Example 2:

Input: height = [1,1]
Output: 1

 
Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104
*/

/**
 * 
 * @param {number[]} height 
 * @returns {number}
 */

//Brute Force Method
const maxArea = (height) => {
    let maxWater = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let currWater = Math.min(height[i], height[j]) * (j - i);

            maxWater = Math.max(maxWater, currWater);
        }
    }
    return maxWater;
}



const maxAreaFast = (height) => {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let currWater = Math.min(height[left], height[right]) * (right - left);

        maxWater = Math.max(maxWater, currWater);

        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}

const height = [2,6,4,3,4,6,3,5];

console.log(maxArea(height));
console.log(maxAreaFast(height));

console.time(maxArea(height));
console.timeEnd(maxArea(height));

console.time(maxAreaFast(height));
console.timeEnd(maxAreaFast(height));