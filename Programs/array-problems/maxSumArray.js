function maxSumArray(nums) {
  let res = nums[0];
  let maxEnding = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEnding = Math.max(maxEnding + nums[i], nums[i]);
    res = Math.max(res, maxEnding);
  }
  return res;
}
const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSumArray(arr));

// step 1 

// [2,3,-8,7,-1,2,3] maxEnding = 2 , res = 2

// step 2 

// [2,3,-8,7,-1,2,3] maxEnding = Math.max(2 + 3,3) => 5, res = Math.max(2,5) => 5

// step 3 

// maxEnding = (-3,-8) => -3 , res = (5,-3) => 5

// step 4 
// maxEnding =(-3 + 7,7) => 7 , res = (5,7) => 7

// step 5 maxEnding = (7 -1 , -1) => 6 , res = (7,6) => 7

// step 6 maxEnding = (6 + 2,2) => 8, res => 8
// step 7 maxEnding = (8 + 3,3) => 11, res => 11
