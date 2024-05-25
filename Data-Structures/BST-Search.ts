/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return 
the subtree rooted with that node. If such a node does not exist, return null.


Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]


Example 2:

Input: root = [4,2,7,1,3], val = 5
Output: []



Constraints:

    The number of nodes in the tree is in the range [1, 5000].
    1 <= Node.val <= 107
    root is a binary search tree.
    1 <= val <= 107
*/

function TreeNode(
  val: Number,
  left: typeof TreeNode | null,
  right: typeof TreeNode | null
): void {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function searchBST(
  root: typeof TreeNode | null,
  val: Number
): typeof TreeNode | null {
  if (!root) return null;
  if (val === root.val) return root;

  if (val < root.val) {
    return val === root.val ? root : searchBST(root.left, val);
  } else return val === root.val ? root : searchBST(root.right, val);
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);

four.left = two;
four.right = five;
two.left = one;
two.right = three;
five.right = six;

console.log(searchBST(four, 8));
