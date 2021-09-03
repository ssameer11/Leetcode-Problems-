<!-- Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104 -->




function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a,b) => a-b);
    let diff: number = Infinity;
    let finalSum = 0;
    for(let i = 0; i < nums.length-2; i++) {
        if(nums[i] == nums[i-1]) continue;
        let p1 = i+1;
        let p2 = nums.length-1;
        while(p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2];
            if(sum == target) return sum;
            if(Math.abs(sum-target) < diff) {
                diff = Math.abs(sum-target);
                finalSum = sum;
            }
            if(sum <= target) {
                p1++;
            } else {
                p2--;
            }
        }
    }
        return finalSum;
};
