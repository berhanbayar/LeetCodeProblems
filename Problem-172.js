/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // tag: 数论
  
    // if (n === 0) return n;
  
    // 递归： f(n) = n / 5 + f(n / 5)
    // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));
    let count = 0;
    while (n >= 5) {
      count += Math.floor(n / 5);
      n = Math.floor(n / 5);
    }
    return count;
  };
  