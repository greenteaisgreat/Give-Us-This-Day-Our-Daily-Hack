/*
Given an array of integers heights representing the histogram's 
bar height where the width of each bar is 1, return the area of 
the largest rectangle in the histogram.


Example 1:

Input: heights = [2,1,5,6,2,3]
Output: 10

Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.


Example 2:

Input: heights = [2,4]
Output: 4

Constraints:

    1 <= heights.length <= 105
    0 <= heights[i] <= 104
*/
const largestRectangleArea = (heights: number[]): number => {
  const stack: number[][] = [];
  let maxArea = 0;
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    let currArea = i;

    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [pos, area]: any = stack.pop();
      maxArea = Math.max(maxArea, (i - pos) * area);
      currArea = pos;
    }
    stack.push([currArea, heights[i]]);
  }
  return maxArea;
};

const heights = [2, 1, 5, 6, 2, 3];

console.log(largestRectangleArea(heights));
