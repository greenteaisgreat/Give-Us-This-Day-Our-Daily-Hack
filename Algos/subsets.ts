/*
Given an integer array nums of unique elements, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.


Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

    1 <= nums.length <= 10
    -10 <= nums[i] <= 10
    All the numbers of nums are unique.
*/
const subsets = (nums: number[]): number[][] => {
  if (!nums.length) return [[]];

  const firstEl = nums[0];
  const remainingEl = nums.slice(1);

  const combsWithoutFirst = subsets(remainingEl);
  const combsWithFirst: number[][] = [];

  combsWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });

  return [...combsWithoutFirst, ...combsWithFirst];
};

const nums = [1, 2, 3];
console.log(subsets(nums));
