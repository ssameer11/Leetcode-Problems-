<!-- Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k. -->


function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    let bucket: {[key: number]: number} = {};
    let w = t+1;

    for(let i = 0; i < nums.length; i++) {
        let idx = Math.floor(nums[i]/w);
        if(bucket.hasOwnProperty(idx)) return true;
        else if(bucket.hasOwnProperty(idx+1) && Math.abs(nums[i] - bucket[idx+1]) < w) return true;
    else if(bucket.hasOwnProperty(idx-1) && Math.abs(nums[i] - bucket[idx-1]) < w) return true;
        bucket[idx] = nums[i];
        if(i >= k) {
            delete bucket[Math.floor(nums[i-k]/w)];
        }
    }
    return false;
};
