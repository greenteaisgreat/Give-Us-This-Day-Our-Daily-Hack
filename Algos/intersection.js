/*
Construct a function labeled "intersection" that compares input arrays 
and returns a new array with elements found in all of the inputs 

ex.)  
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

output should be [5, 15]
*/

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

const intersection = (...arr) => {
	return arr.reduce((arr1, arr2) => {
		const newArr = [];
		arr1.forEach(num => {
			if (arr2.includes(num)) {
				newArr.push(num);
			}
		});
		return newArr;
	});
}

console.log(intersection(arr1, arr2, arr3));