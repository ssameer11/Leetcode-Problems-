<!-- Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105 -->


function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => (a-b));
    let result: number[][] = [];
    for(let i = 0; i < nums.length-2; i++) {
        let num1 = nums[i];
        if(num1 == nums[i-1]) continue;

        let p1 = i+1;
        let p2 = nums.length-1;
        let target = 0 - num1;
        let seen: {[key: number]: boolean} = {};
        while(p1 < p2) {
            let num2 = nums[p1];
            let num3 = nums[p2];
            if(num2 + num3 == target && (!seen[num2] || !seen[num3])) {
                result.push([num1,num2,num3]);
                seen[num2] = true;
                seen[num3] = true;
            }
            if(num2 + num3 <= target) {
                p1++
            } else {
                p2--;
            }
        }
    }
    return result;
};
