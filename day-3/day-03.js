/*
Author: Sheila Alfaro

Complete the getSecondLargest function in the editor below. getSecondLargest has the following parameters:

    -> int nums[n]: an array of integers
    -> int: the second largest number in nums

    [consider this solution]
      let firstLargestNum = 0;
      let secondLargestNum = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstLargestNum) {
          secondLargestNum = firstLargestNum;
          firstLargestNum = nums[i];
        }
        if (nums[i] > secondLargestNum && nums[i] < firstLargestNum) {
          secondLargestNum = nums[i];
        }
      }
      return secondLargestNum;
*/

function getSecondLargest(nums) {
  let tmp;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[x] > nums[i]) {
        tmp = nums[x];
        nums[x] = nums[i];
        nums[i] = tmp;
      }
    }
  }
  return nums.find((el) => el < nums[0]);
}
