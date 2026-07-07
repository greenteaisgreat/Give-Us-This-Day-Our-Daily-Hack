/*
Given a string text, you want to use the characters of text 
to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the 
maximum number of instances that can be formed.


Example 1:

Input: text = "nlaebolko"
Output: 1

Example 2:

Input: text = "loonbalxballpoon"
Output: 2

Example 3:

Input: text = "leetcode"
Output: 0

*/

function maxNumberOfBalloons(text: string): number {
  const balloonObj: Record<string, number> = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (const letter of text) {
    if (letter in balloonObj) {
      balloonObj[letter]++;
    }
  }

  return Math.min(
    balloonObj.b,
    balloonObj.a,
    Math.floor(balloonObj.l / 2),
    Math.floor(balloonObj.o / 2),
    balloonObj.n,
  );
}

const text = "loonbalxballpoon";

console.log(maxNumberOfBalloons(text));
