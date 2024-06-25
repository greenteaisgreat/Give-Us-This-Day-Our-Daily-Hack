/*
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree 
such that every key of the original BST is changed to the original key plus 
the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.


Example 1:

Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


Example 2:

Input: root = [0,null,1]
Output: [1,null,1]


Constraints:

    The number of nodes in the tree is in the range [1, 100].
    0 <= Node.val <= 100
    All the values in the tree are unique.
*/
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const bstToGst = (root: TreeNode): TreeNode => {
  let nodeSum = 0;

  const inOrderTraversal = (node: TreeNode): void => {
    if (!node) return;
    if (node.right) inOrderTraversal(node.right);
    nodeSum += node.val;
    node.val = nodeSum;
    if (node.left) inOrderTraversal(node.left);
  };

  inOrderTraversal(root);
  return root;
};

const root = arrayToTree([
  4,
  1,
  6,
  0,
  2,
  5,
  7,
  null,
  null,
  null,
  3,
  null,
  null,
  null,
  8,
]);
console.log(bstToGst(root));

// converts array to tree; Leetcode probably does something like this under the hood
function arrayToTree(arr: (number | null)[]): TreeNode {
  const root: TreeNode = { val: arr[0]!, left: null, right: null };
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift()!;
    if (arr[i] !== null) {
      current.left = { val: arr[i]!, left: null, right: null };
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = { val: arr[i]!, left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

function treeToArray(root: TreeNode): (number | null)[] {
  if (!root) return [];
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      result.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
