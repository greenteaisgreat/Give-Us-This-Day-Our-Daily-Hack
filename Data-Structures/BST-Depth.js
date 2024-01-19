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
    if (!root) return 0; //can return -1 if counting links rather than nodes

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

/*
solution's structure

         10
        /   \
       5     15
      / \    / \
     2   7  12  20
    /
   1
*/


const ten = new BST(10);
const five = new BST(5);
const two = new BST(2);
const one = new BST(1);
const seven = new BST(7);
const fifteen = new BST(15);
const twelve = new BST(12);
const twenty = new BST(20);

ten.left = five;
five.left = two;
five.right = seven;
two.left = one;

ten.right = fifteen;
fifteen.left = twelve;
fifteen.right = twenty;

console.log(maxDepth(ten));