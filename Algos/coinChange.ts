/*
You are given an integer array coins representing coins of different denominations and an 
integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of 
money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1


Example 2:

Input: coins = [2], amount = 3
Output: -1


Example 3:

Input: coins = [1], amount = 0
Output: 0


Constraints:

    1 <= coins.length <= 12
    1 <= coins[i] <= 231 - 1
    0 <= amount <= 104
*/

const coinChange = (coins: number[], amount: number): number => {
  const cache = {};

  const makeChange = (amount: number) => {
    if (cache[amount]) return cache[amount];
    if (!amount) return 0;

    let change = Number.MAX_VALUE;

    for (const coin of coins) {
      if (coin <= amount) {
        change = Math.min(change, makeChange(amount - coin) + 1);
      }
    }
    cache[amount] = change;
    return change;
  };
  const result = makeChange(amount);
  return result;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount));