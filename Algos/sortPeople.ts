/*
You are given an array of strings names, and an array heights that consists
 of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.


Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


Constraints:

    n == names.length == heights.length
    1 <= n <= 103
    1 <= names[i].length <= 20
    1 <= heights[i] <= 105
    names[i] consists of lower and upper case Engconsole.log()lish letters.
    All the values of heights are distinct.
*/
const sortPeople = (names: string[], heights: number[]): string[] => {
	const people: [string, number][] = [];

	for (let i = 0; i < names.length; i++) {
		people.push([names[i], heights[i]]);
	}
	people.sort((a: [string, number], b: [string, number]) => b[1] - a[1]);

	return people.map(person => person[0]);
};
const names = ['Alice', 'Bob', 'Bob'];
const heights = [155, 185, 150];

console.log(sortPeople(names, heights));
