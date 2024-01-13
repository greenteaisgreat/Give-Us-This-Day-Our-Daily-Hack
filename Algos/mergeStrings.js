/*
You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.

Return the merged string.

Example:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */

const mergeStrings = function(word1, word2) {
  let newStr = '';
  const longest = word1.length > word2.length ? word1 : word2;
  
  for (let i = 0; i < longest.length; i++) {
  	if (!word1[i] || !word2[i]) {
    	word1[i] ? newStr += word1[i] : newStr += word2[i];
    }
    else {
    	newStr += word1[i] += word2[i];
    }
  }
  
  return newStr;
};

const word1 = 'howdy';
const word2 = 'pardner';

console.log(mergeStrings(word1, word2));