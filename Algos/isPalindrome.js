/*
Create an algorithm that returns true or false if the passed in
argument is a palindrome
*/

const pal = (string) => {
  if (typeof string !== 'string') throw new Error('Please enter a valid string');

  const newStr = string.replace(/[\W]/gi, '').toLowerCase().split('').reverse().join('');
  
  return string.replace(/[\W]/gi, '').toLowerCase() === newStr ? true : false;
}


const palRecursive = (string) => {
  if (typeof string !== 'string') throw new Error('Please enter a valid string');
  
  const newStr = string.replace(/[\W]/gi, '').toLowerCase();


  if (newStr.length <= 1) return true;
  if (newStr.at(0) !== newStr.at(-1)) return false;

  return palRecursive(newStr.slice(1, -1));
}

console.log(palRecursive('A man a plan a canal panama'));
console.log(pal('ra c eC A R'));