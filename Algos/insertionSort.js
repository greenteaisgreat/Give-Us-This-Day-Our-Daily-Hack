/*
Implement Insertion Sort and return intermediate states.

Insertion Sort is a simple sorting algorithm that builds the sorted list one element at a time, 
from left to right. It works by repeatedly taking an element from the unsorted portion and inserting 
it into its correct position in the sorted portion of the list.

Objective:

Given a list of key-value pairs, sort the list by key using Insertion Sort. Return a list of lists 
showing the state of the array after each insertion. If two key-value pairs have the same key, 
maintain their relative order in the sorted list.

Input:

    pairs - a list of key-value pairs, where each key-value has an integer key and a string value. (0 <= pairs.length <= 100).

Example 1:

Input:
pairs = [(5, "apple"), (2, "banana"), (9, "cherry")]

Output:
[[(5, "apple"), (2, "banana"), (9, "cherry")], 
 [(2, "banana"), (5, "apple"), (9, "cherry")], 
 [(2, "banana"), (5, "apple"), (9, "cherry")]]

Notice that the output shows the state of the array after each insertion. 
The last state is the final sorted array. There should be pairs.length states in total.

Example 2:

Input:
pairs = [(3, "cat"), (3, "bird"), (2, "dog")]

Output:
[[(3, "cat"), (3, "bird"), (2, "dog")], 
 [(3, "cat"), (3, "bird"), (2, "dog")],
 [(2, "dog"), (3, "cat"), (3, "bird")]]

In this example, you can observe that the pairs with key=3 ("cat" and "bird") maintain their relative order, 
illustrating the stability of the Insertion Sort algorithm. 
*/

class Pairs {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class Solution {
  insertionSort(pairs) {
    const n = pairs.length;
    const res = []; // To store the intermediate states of the array

    for (let i = 0; i < n; i++) {
        let j = i - 1;
        
        // Move elements that are greater than key one position ahead
        while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
            [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
            j -= 1;
        }

        // Clone and save the entire state of the array at this point
        res.push([...pairs]);
    }

    return res;
}
}
const pair1 = new Pairs(1, 'apple');
const pair2 = new Pairs(2, 'orange');
const pair3 = new Pairs(3, 'banana');

const arr = [pair3, pair2, pair1];
const sort = new Solution();

console.log(sort.insertionSort(arr));