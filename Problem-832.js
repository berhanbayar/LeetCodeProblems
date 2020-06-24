/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const results = []
     const invert = num => num === 0 ? 1 : 0
   
     for (const row of A) {
       let i = 0
       let j = row.length - 1
   
       while (i <= j) {
         const ni = row[i]
         row[i] = invert(row[j])
         row[j] = invert(ni)
         j -= 1
         i += 1
       }
       results.push(row)
     }
     return results   
   };
