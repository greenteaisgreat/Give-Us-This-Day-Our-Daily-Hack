/*
Create an algorithm that returns the Fibonacci sequence when its 
numeric position is entered as an argument

Extra credit: try to solve it in O(n) time complexity!
*/

// O(2^n) time complexity
const fib = (n) => {
  if (n <= 1) return n === 1 ? 1 : 0;

  return fib(n - 1) + fib(n - 2);
}

console.time('fib')
console.log(fib(30))
console.timeEnd('fib')

// O(n) time complexity
const fibTail = (n, a = 0, b = 1) => {
  if (n <= 1) return n === 1 ? b : a;

  return fibTail(n - 1, b, a + b);
}

console.time('fibTail');
console.log(fibTail(300));
console.timeEnd('fibTail');
