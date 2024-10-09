/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(nums: number[], target: number): number[] {

    for (let i = 0; i < nums.length; i++) { // loop mengecek semua element array

        for (let j = i + 1; j < nums.length; j++) { // loop mengecek element setelah element ke-i

            if (nums[i] + nums[j] === target) { // jika element ke-i + element ke-(j) = target
                return [i, j] // return array [i, j] = artinya element i + elemtn j = target
            }
        }
    }

    return [] // jika tidak ditemukan elemetn ke-i + element ke-j = target, maka return array kosong []
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([1,2,3,4,5], 2))