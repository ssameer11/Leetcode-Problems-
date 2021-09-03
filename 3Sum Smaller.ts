<!-- Description
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example
Example1

Input:  nums = [-2,0,1,3], target = 2
Output: 2
Explanation:
Because there are two triplets which sums are less than 2:
[-2, 0, 1]
[-2, 0, 3]
Example2

Input: nums = [-2,0,-1,3], target = 2
Output: 3
Explanation:
Because there are three triplets which sums are less than 2:
[-2, 0, -1]
[-2, 0, 3]
[-2, -1, 3] -->




threeSumSmaller(nums: number[], target: number): number {
    nums = nums.sort((a,b) => a-b);
    let count = 0;
    for(let i = 0; i < nums.length-2; i++) {
        let p1 = i+1;
        let p2 = nums.length-1;
        while(p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2];
            if(sum < target) {
                count += p2-p1;
                p1++
            } else {
                p2--;
            }
        }
    }
    return count;
  }
