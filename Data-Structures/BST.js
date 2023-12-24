/*
Create a binary search tree that includes four methods:
  1.) add
  2.) includes
  3.) min
  4.) max
*/

class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    const node = new BST(val);

    if (!this.val || this.val === val) {
      this.val = val;
      return val;
    }

    if (val < this.val) {
      return this.left ? this.left.add(val) : this.left = node;
    }

    else {
      return this.right ? this.right.add(val) : this.right = node;
    }
  }

  includes(val) {
    if (val === this.val) return true;

    if (val < this.val) {
      return this.left ? this.left.includes(val) : false;
    }

    else {
      return this.right ? this.right.includes(val) : false;
    }
  }

  min() {
    return this.left ? this.left.min() : this.val;
  }

  max() {
    return this.right ? this.right.max() : this.val;
  }
}

const Tree = new BST(10);

Tree.add(5);
Tree.add(15);
Tree.add(20);
Tree.add(5);
Tree.add(12);
Tree.add(1);
Tree.add(100);
Tree.add(98);


console.log(Tree.max());
console.log(Tree)