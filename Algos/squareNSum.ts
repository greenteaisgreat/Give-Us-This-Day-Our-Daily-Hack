/*
Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.
*/

const squareNSum = (list: number[]): number => {
  let ans = 0;

  for (const num of list) {
    ans += num ** 2;
  }

  return ans;
};

const nums = [1, 2, 3];

console.log(squareNSum(nums));
