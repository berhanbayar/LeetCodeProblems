/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false
        
            const dfs = (node, num) => {
            num += node.val
            if (!node.left && !node.right) return num === sum
        
            if (node.left) {
                const check = dfs(node.left, num)
                if (check) return true
            }
            if (node.right) {
                const check = dfs(node.right, num)
                if (check) return true
            }
            return false
            }
            return dfs(root, 0) 
};
