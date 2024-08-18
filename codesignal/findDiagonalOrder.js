/*
Given an m x n matrix mat, return an array of all the elements 
of the array in a diagonal order.


Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]


Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]


Constraints:
    m == mat.length
    n == mat[i].length
    1 <= m, n <= 104
    1 <= m * n <= 104
    -105 <= mat[i][j] <= 105
*/

const findDiagonalOrder = (mat) => {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = [...Array(rows + cols - 1)].map((x) => []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 === 0) {
        result[row + col].unshift(mat[row][col]);
      } else result[row + col].push(mat[row][col]);
    }
  }
  return result.flat();
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findDiagonalOrder(mat));
