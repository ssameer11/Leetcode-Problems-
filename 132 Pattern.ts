<!-- Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

 

Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 

Constraints:

n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109 -->








function find132pattern(nums: number[]): boolean {
    let n = nums.length;
    let min: number[] = new Array(n);
    min[0] = nums[0];
    for(let i = 1; i < n; i++) {
        min[i] = Math.min(min[i-1],nums[i-1]);
    }
    
    let stack: number[] = [];
    stack.push(nums[n-1]);
    for(let i = n-2; i > 0; i--) {
        while(stack.length !== 0 && stack[stack.length-1] <= min[i]) {
            stack.pop();
        }
        if(stack.length !== 0 && stack[stack.length-1] < nums[i]) return true;
        stack.push(nums[i])
    }
    return false;
};
