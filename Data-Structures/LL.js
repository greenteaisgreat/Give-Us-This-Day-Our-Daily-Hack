/*
Create a singly Linked List that includes two methods:
  1.) add
  2.) delete
*/

function LL() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

LL.prototype.push = function(val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  }

  else {
    this.tail.next = newNode; //assignment to the end of the actual LL
    this.tail = newNode; //assignment to the separate tail property that indicates the last value
  }

  return ++this.length;
}

LL.prototype.pop

const test = new LL();

test.push(1);
test.push(2);
test.push(3);
test.push(4);
console.log(test);