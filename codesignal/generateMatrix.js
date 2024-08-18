/*
Given a positive integer n, generate an n x n matrix filled 
with elements from 1 to n2 in spiral order.


Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]


Example 2:

Input: n = 1
Output: [[1]]

Constraints:
    1 <= n <= 20
*/

<<<<<<< HEAD
const generateMatrix = (n) => {
  const result = [...Array(n)].map((x) => []);
  const half = Math.ceil(n / 2);
  let counter = 0;
  let first = 0;
  let last = n - 1;

  for (let i = 0; i < half; i++) {
    for (let j = first; j <= last; j++) {
      result[first][j] = ++counter;
    }
    for (let j = first + 1; j <= last; j++) {
      result[j][last] = ++counter;
    }
    for (let j = last - 1; j >= first; j--) {
      result[last][j] = ++counter;
    }
    for (let j = last - 1; j >= first + 1; j--) {
      result[j][first] = ++counter;
    }
    first++;
    last--;
  }
  return result;
};

console.log(generateMatrix(3));
=======
const generateMatrix = (n) => {};
>>>>>>> ac8fa561b96663301f38b58b486b212f72d50ea5
