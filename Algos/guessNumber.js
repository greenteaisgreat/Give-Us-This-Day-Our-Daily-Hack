/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked 
is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6

Example 2:

Input: n = 1, pick = 1
Output: 1

Example 3:

Input: n = 2, pick = 1
Output: 1

 

Constraints:

    1 <= n <= 231 - 1
    1 <= pick <= n
*/

/**
 * @param {number} num
 * @param {number} pick //feel free to change to test
 * @return {number}
 */
const guess = (num) => {
  return num === pick ? 0 : num < pick ? 1 : -1;
};

/**
 *
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let res = guess(mid);

    if (res === 0) return mid;
    if (res === -1) end = mid - 1;
    if (res === 1) start = mid + 1;
  }

  return start;
};

let num = 5;
let pick = 1234;
console.log(guessNumber(23));
