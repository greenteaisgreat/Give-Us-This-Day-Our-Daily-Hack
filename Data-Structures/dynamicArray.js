/*
Design a Dynamic Array (aka a resizable array) class, such as an ArrayList in Java or a vector in C++.

Your DynamicArray class should support the following operations:

    DynamicArray(int capacity) will initialize an empty array with a capacity of capacity, where capacity > 0.
    int get(int i) will return the element at index i. Assume that index i is valid.
    void set(int i, int n) will set the element at index i to n. Assume that index i is valid.
    void pushback(int n) will push the element n to the end of the array.
    int popback() will pop and return the element at the end of the array. Assume that the array is non-empty.
    void resize() will double the capacity of the array.
    int getSize() will return the number of elements in the array.
    int getCapacity() will return the capacity of the array.

If we call void pushback(int n) but the array is full, we should resize the array first.

Example 1:

Input:
["Array", 1, "getSize", "getCapacity"]

Output:
[null, 0, 1]

Example 2:

Input:
["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"]

Output:
[null, null, 1, null, 2]

Example 3:

Input:
["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, 
"getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]

Output:
[null, 0, 1, null, 1, 1, null, 2, 2, 2, null, 3, 3, 1, 2]

Note:

The index i provided to get(int i) and set(int i) is guranteed to be greater than or equal to 0 and less than the number of elements in the array.

*/

class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.array = Array.from(Array(capacity)); //Initializes an array with 'capacity' undefined positions
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.array[i];
  }

	/**
	 * @param {number} i
	 * @param {number} n
	 * @returns {void}
	 */
  set(i, n) {
   this.array[i] = n;
   return;
  }

	/**
	 * @param {number} n
	 * @returns {void}
	 */
  pushback(n) {
   if (!this.array.includes(undefined)) {
    this.resize(); //NOT this.array.resize(); this.array is already in resize()
		this.array[this.getSize()] = n; //pushes the value onto the first available open spot after resize
		return;
  }
  this.array[this.getSize()] = n;
  return;
}

  /**
   * @returns {number}
   */
  popback() {
		const popped = this.array[this.getSize() - 1];
		this.array[this.getSize() - 1] = undefined;
		return popped;
  }

  /**
   * @returns {void}
   */
  resize() {
    this.array.push(...Array(this.array.length));
    return;
  }

	/**
	 * @returns {number}
	 */
	getSize() {
		let count = 0;
		this.array.forEach(num => Number.isInteger(num) ? count++ : null); //checks for 0's to not be falsy
		return count;
	}

	/**
	 * @returns {number}
	 */
	getCapacity() {
		return this.array.length;
	}
}

const test = new DynamicArray(4);
test.pushback(1)
test.set(0, 0);
test.pushback(2);
console.log(test)
console.log(test.get(0));