/*
Create a singly Linked List that includes eight methods:
  1.) push
  2.) pop
  3.) shift
  4.) unshift
  5.) get
  6.) set
  7.) insert
  8.) remove
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
    this.tail.next = newNode;
    this.tail = newNode;
  }

  return this.length++;
}

LL.prototype.pop = function() {
  if (!this.head) throw new Error('The list is empty');

  //we don't use 'this.tail' at first, as we need to cycle through the list from the head
  let curr = this.head;
  let newTail = curr;

  while (curr.next) {
    newTail = curr;
    curr = curr.next;
  }

  //this is where the actual changes are made, AFTER we've cycled through the list
  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if (this.length <= 0) {
    this.head = null;
    this.tail = null;
  }

  return curr;
}

const test = new LL();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);
test.pop();
test.pop();
test.pop();
test.pop();
test.pop();
console.log(test);