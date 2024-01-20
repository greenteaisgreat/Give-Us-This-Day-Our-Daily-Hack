/*
Consider all the leaves of a binary tree, from left to right order, 
the values of those leaves form a leaf value sequence.

            3
          /   \
         5     1
        / \   / \
       6   2  9  8
          / \
         7   4

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:

    1       1
   / \     / \
  2   3   2   3

Input: root1 = [1, 2, 3], root2 = [1, 2, 3]
Output: true



Example 2:

    1           1
   / \         / \
  2   3       3   2

Input: root1 = [1, 2, 3], root2 = [1, 3, 2]
Output: false


Constraints:

    The number of nodes in each tree will be in the range [1, 200].
    Both of the given trees will have values in the range [0, 200].


*/

/**
 * 
 * @param {Number} val 
 * @param {null | BST} left
 * @param {null | BST} right
 * @returns {BST} //indicates the 'new' keyword will be used to return itself
 */
function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};


/**
 * 
 * @param {BST} root1 
 * @param {BST} root2
 * @returns {Boolean}
 */
function similarLeaf(root1, root2) {
    const root1Arr = [];
    const root2Arr = [];

    const findEndLeaf = (root, rootArr) => {
        if (!root) return;

        if (!root.left && !root.right) {
            rootArr.push(root.val);
        }

        findEndLeaf(root.left, rootArr);
        findEndLeaf(root.right, rootArr);
    }

    findEndLeaf(root1, root1Arr);
    findEndLeaf(root2, root2Arr);

    //compares arrays for strict equality by converting them to strings
    return JSON.stringify(root1Arr) === JSON.stringify(root2Arr);
}