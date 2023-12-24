/*
Create an algorithm that returns the Fibonacci sequence when its 
numeric position is entered as an argument

Extra credit: try to solve it in O(n) time complexity!
*/

// O(2^n) time complexity
const fibonacci = (n) => {
  if (n <= 1) return n === 1 ? 1 : 0;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

// O(n) time complexity
const tailFib = (n, a = 0, b = 1) => {
  if (n <= 1) return n === 0 ? a : b;

  return tailFib(n - 1, b, a + b);
}
