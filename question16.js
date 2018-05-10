/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = nums[0] + nums[1] + nums[2];
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            for(var k=j+1; k<nums.length; k++) {
                var sum = nums[i] + nums[j] + nums[k];
                
                if(Math.abs(result - target) > Math.abs(sum - target)) {
                    result = sum;
                }
            }
        }
    }

    return result;
};