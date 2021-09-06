<!-- Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109 -->





function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a,b) => a-b);
    let result: number[][] = [];
    
    for(let i = 0; i < nums.length-3; i++) {
        if(i !== 0 && nums[i] == nums[i-1]) continue;
        for(let j = i+1; j < nums.length-2; j++) {
            if(j !== i+1 && nums[j] == nums[j-1]) continue;
            let p1 = j+1;
            let p2 = nums.length-1;
            while(p1 < p2) {
                let sum = nums[i] + nums[j] + nums[p1] + nums[p2];
                 
                if(sum < target) {
                    p1++;
                } else if(sum > target){
                    p2--;
                } else {
                    result.push([nums[i],nums[j],nums[p1],nums[p2]]);
                    p1++;
                    p2--;
                    while(p1 < p2 && nums[p1] == nums[p1-1]) p1++;
                    while(p1 < p2 && nums[p2] == nums[p2+1]) p2--;
                }
            }
        }
    }
    return result;
};
