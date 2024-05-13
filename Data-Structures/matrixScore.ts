/*
You are given an m x n binary matrix grid.

A move consists of choosing any row or column and toggling each 
value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, 
and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).


Example 1:

Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39

Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39


Example 2:

Input: grid = [[0]]
Output: 1


Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 20
    grid[i][j] is either 0 or 1.
*/
const matrixScore = (grid: number[][]): number => {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxScore = Math.pow(2, cols - 1) * rows;

  for (let col = 1; col < cols; col++) {
    let curr = 0;
    for (let row = 0; row < rows; row++) {
      curr += grid[row][0] === grid[row][col] ? 1 : 0;
    }
    maxScore += Math.max(curr, rows - curr) * Math.pow(2, cols - 1 - col);
  }
  return maxScore;
};

const grid = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];

console.log(matrixScore(grid));
