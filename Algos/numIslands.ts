/*
Given an m x n 2D binary grid grid which represents a map of 
'1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. You may assume all four edges of 
the grid are all surrounded by water.


Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3


Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.
*/

const numIslands = (grid: string[][] | number[][]): number => {
  //convert from string to number for grid
  const newGrid = [...grid].map((subArr, i) =>
    subArr.map((num, i) => (subArr[i] = parseInt(num)))
  );

  const rows = newGrid.length;
  const cols = newGrid[0].length;
  let islands = 0;

  const traverse = (row: number, col: number): void => {
    //check boundaries
    if (row < 0 || col < 0) return;
    if (row >= rows || col >= cols) return;
    if (!newGrid[row][col]) return;

    //mark as visited
    newGrid[row][col] = 0;

    traverse(row + 1, col);
    traverse(row - 1, col);
    traverse(row, col + 1);
    traverse(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (newGrid[row][col]) {
        islands++;
        traverse(row, col);
      }
    }
  }
  return islands;
};

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
