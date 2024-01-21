/*

Given the root of a binary tree, the level of its root is 1, 
the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values 
of nodes at level x is maximal.

 

Example 1:

            1
           / \
          7   0
         / \
        7  -8

Input: root = [1,7,0,7,-8,null,null]
Output: 2

Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.


Constraints:

    The number of nodes in the tree is in the range [1, 104].
    -105 <= Node.val <= 105

*/

/**
 * @param {Number} val
 * @param {null | BST} left
 * @param {null | BST} right
 * @returns {BST}
 */
function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};


/**
 * maxLevelSum
 * @param {BST} root
 * @returns {Number}
 * 
 * dfs
 * @param {root} node
 * @param {Number} level
 * @returns {undefined}
 */
function maxLevelSum(root) {
    const levelSums = [];

    const dfs = (node, level) => {
        if (!node) return;

        //utilizes array indices to represent BST levels while tallying up the
        //current node's value on each level; if levelSums at that index is undefined,
        //the nullish coalescing operator (??) is used to assign it to 0 initially
        levelSums[level] = (levelSums[level] ?? 0) + node.val;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    //returns the index in levelSums that has the highest number and adds 1 to the value; this is 
    //due to the root in BST's starting at 1, but us needing to start at a level of 0 for dfs() to
    //account for the starting index value in an array
    return levelSums.indexOf(Math.max(...levelSums)) + 1;
};

const one = new BST(1);
const seven = new BST(7);
const zero = new BST(0);
const ten = new BST(10);
const twenty = new BST(20);

/*
     1
    / \
   7   0
  / \
 10  20

*/

one.left = seven;
one.right = zero;
seven.left = ten;
seven.right = twenty;


console.log(maxLevelSum(one));