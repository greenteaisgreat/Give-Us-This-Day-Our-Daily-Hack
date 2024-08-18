/*
Given an m x n matrix, return true if the matrix is Toeplitz. 
Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to 
bottom-right has the same elements.


Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.


Example 2:

Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.


Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 20
    0 <= matrix[i][j] <= 99
Follow up:

    What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
    What if the matrix is so large that you can only load up a partial row into the memory at once?
*/

<<<<<<< HEAD
const isToeplitzMatrix = matrix => {
	const rows = matrix.length;
	const cols = matrix[0].length;

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (matrix[row - 1][col - 1] !== matrix[row][col]) {
				return false;
			}
		}
	}
	return true;
};
=======
const isToeplitzMatrix = (matrix) => {};
>>>>>>> ac8fa561b96663301f38b58b486b212f72d50ea5
