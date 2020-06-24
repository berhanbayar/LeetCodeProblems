/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let res = 0

 while (num) {
   if (num % 2 === 0) {
     num /= 2
   } else {
     num -= 1
   }
   res += 1
 }
 return res
};
