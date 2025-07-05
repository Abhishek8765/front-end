function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (map.has(comp)) {
      return [map.get(comp), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
const nums = [1, 2, 6, 8, 7, 1];
const target = 8;
console.log(twoSum(nums, target));
