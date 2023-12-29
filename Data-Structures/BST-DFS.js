/*
Perform a depth-first search (DFS) on a binary search tree; include the three main variations of a DFS:
1.) Pre-order
2.) In-order
3.) Post-order
*/

function BST(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const a = new BST('a');
const b = new BST('b');
const c = new BST('c');
const d = new BST('d');
const e = new BST('e');
const f = new BST('f');

/*
          a
         / \
        b   c
       / \   \
      d   e   f
*/

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


BST.prototype.depthFirstPre = function(root) {
  root(this.val);
  if (this.left) this.left.depthFirstPre(root);
  if (this.right) this.right. depthFirstPre(root);
}

BST.prototype.depthFirstIn = function(root) {
  if (this.left) this.left.depthFirstIn(root);
  root(this.val);
  if (this.right) this.right. depthFirstIn(root);
}

BST.prototype.depthFirstPost = function(root) {
  if (this.left) this.left.depthFirstIn(root);
  if (this.right) this.right. depthFirstIn(root);
  root(this.val);
}

a.depthFirstPre(console.log);
a.depthFirstIn(console.log);
a.depthFirstPost(console.log);
