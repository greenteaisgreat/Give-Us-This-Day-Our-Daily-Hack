/*
Create a singly Linked List that includes two methods:
  1.) add
  2.) delete
*/

function LL() {
  this.head = null;
  this.length = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

LL.prototype.add = function(val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    return this.length++;
  }

  while (!curr.next) {
    curr = curr.next;
  }

  curr = newNode;
  return this.length++;
}

const list = new LL();

list.add(5);
console.log(list);