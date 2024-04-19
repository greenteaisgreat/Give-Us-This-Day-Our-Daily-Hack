/*
Given the head of a singly linked list, reverse the list, 
and return the reversed list.


Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Example 2:

Input: head = [1,2]
Output: [2,1]


Example 3:

Input: head = []
Output: []



Constraints:


    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 4000


Follow up: A linked list can be reversed either iteratively or recursively. 
Could you implement both?
*/

//Definition for singly-linked list.
function ListNode(val: Number | null, next: typeof ListNode | null): void {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head: typeof ListNode): typeof ListNode | null {
  if (!head) return null;

  let current = head;
  let prev = null;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

//recursive approach
function recursiveReverse(head: typeof ListNode): typeof ListNode | null {
  if (head === null || head.next === null) return head;

  const recurse = recursiveReverse(head.next);

  head.next.next = head;
  head.next = null;

  return recurse;
}

const a = new ListNode("A");
const b = new ListNode("B");
const c = new ListNode("C");
const d = new ListNode("D");

a.next = b;
b.next = c;
c.next = d;

// console.log(reverseList(a));
console.log(recursiveReverse(a));
