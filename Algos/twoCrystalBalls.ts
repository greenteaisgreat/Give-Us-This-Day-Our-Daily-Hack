/*
Given two crystal balls that will break if dropped from high enough distance, 
determine the exact spot in which it will break in the most optimized way.
*/

const twoCrystalBalls = (breaks: boolean[]): boolean | number => {
	const jumps = Math.floor(Math.sqrt(breaks.length));
	let i = jumps;
	console.log(arr);

	for (; i < breaks.length; i += jumps) {
		if (breaks[i]) break;
	}

	i -= jumps;

	for (let j = 0; j < jumps && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			console.log(i, j);
			return i;
		}
	}

	return -1;
};

// test case; randomly fills a boolean array
const arr = Array(20).fill(false);
const idx = Math.floor(Math.random() * 20);

for (let i = idx; i < 20; i++) {
	arr[i] = true;
}

console.log(twoCrystalBalls(arr));
