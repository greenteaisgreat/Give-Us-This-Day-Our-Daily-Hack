/*
Given an input string 'str', reverse the order of the words.

A word is defined as a sequence of non-space characters. 
The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that 'str' may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: str = "the sky is blue"
Output: "blue is sky the"


Example 2:

Input: str = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.


Example 3:

Input: str = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Constraints:

    1 <= str.length <= 104
    str contains English letters (upper-case and lower-case), digits, and spaces ' '.
    There is at least one word in str.

*/

/**
 * 
 * @param {String} str
 * @returns {String}
 */
const reverseWords = (str) => {
    return str.split(' ')
    .filter(word => word !== '')
    .reverse()
    .join(' ');
};

const str = 'the sky is blue';
const newStr = '   hi there    world  !!  ';

console.log(reverseWords(str));
console.log(reverseWords(newStr));