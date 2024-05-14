/*
In a gold mine grid of size m x n, each cell in this mine has an integer 
representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

    Every time you are located in a cell you will collect all the gold in that cell.
    From your position, you can walk one step to the left, right, up, or down.
    You can't visit the same cell more than once.
    Never visit a cell with 0 gold.
    You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24

Explanation:
[[0,6,0],
[5,8,7],
[0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.


Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28

Explanation:
[[1,0,7],
[2,0,6],
[3,4,5],
[0,3,0],
[9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.


Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 15
    0 <= grid[i][j] <= 100
    There are at most 25 cells containing gold.
*/
const getMaximumGold = (grid: number[][]): number => {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxGold = 0;

  const traversal = (row: number, col: number): number => {
    if (row < 0 || col < 0) return 0;
    if (row >= rows || col >= cols) return 0;
    if (!grid[row][col]) return 0;

    const currGold = grid[row][col];
    grid[row][col] = 0;

    const up = traversal(row + 1, col);
    const down = traversal(row - 1, col);
    const right = traversal(row, col + 1);
    const left = traversal(row, col - 1);

    grid[row][col] = currGold;
    return currGold + Math.max(up, down, left, right);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col]) {
        maxGold = Math.max(maxGold, traversal(row, col));
      }
    }
  }
  return maxGold;
};

const grid = [
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
];

console.log(getMaximumGold(grid));
