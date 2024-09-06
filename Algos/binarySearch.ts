/*
Create an algorithm that implements a basic binary search
on a given array. A binary search is one that halves the data
set in an object (array) until it finds the desired value. The 
run-time for these algorithms are typically logarithmic, O(log n)
*/

const binarySearch = (arr: number[], target: number): boolean => {
	let low = 0;
	let high = arr.length;

	while (low < high) {
		const mid = Math.floor(low + (high - low) / 2);
		const temp = arr[mid];

		if (temp === target) return true;
		else if (target > temp) low = mid + 1;
		else high = mid;
	}
	return false;
};

const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 5));
