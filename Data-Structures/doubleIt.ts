/*
You are given the head of a non-empty linked list representing 
a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it.


Example 1:

Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given 
linked list which represents the number 189. Hence, 
the returned linked list represents the number 189 * 2 = 378.


Example 2:

Input: head = [9,9,9]
Output: [1,9,9,8]
Explanation: The figure above corresponds to the given 
linked list which represents the number 999. Hence, 
the returned linked list reprersents the number 999 * 2 = 1998. 


Constraints:

    The number of nodes in the list is in the range [1, 104]
    0 <= Node.val <= 9
    The input is generated such that the list represents a number 
    that does not have leading zeros, except the number 0 itself.
*/

type ListNode = {
  val: number;
  next: ListNode;
};

function ListNode(val, next): void {
  this.val = val;
  this.next = null;
}

function doubleIt(head: ListNode): ListNode {
  const carry = double(head);
  if (carry > 0) head = new ListNode(carry, head);
  return head;
}

function double(head: ListNode): number {
  if (!head) return 0;
  const doubleVal = head.val * 2 + double(head.next);
  head.val = doubleVal % 10;
  return Math.floor(doubleVal / 10);
}
