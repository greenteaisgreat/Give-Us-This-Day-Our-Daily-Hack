/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]

            3
           / \
          9   20
              / \
             15  7

Output: 3


Example 2:
Input: root = [1,null,2]

            1
           / \
              2

Output: 2


Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

/**
 * BST definition:
 * @param {Number} val
 * @param {null | BST} left
 * @param {null | BST} right
 * @returns {BST} //this indicates the 'new' keyword will be used and return an instance of BST
 */
function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/**
 * @param {BST} root
 * @returns {Number}
 */
function maxDepth(root) {
    
}
