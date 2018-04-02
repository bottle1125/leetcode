/*
给定一个整数数列，找出其中和为特定值的那两个数。

你可以假设每个输入都只会有一种答案，同样的元素不能被重用。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var len = nums.length;
    var start = 0;
    do {
        var startValue = nums[start];
        for(var i = start+1; i < len; i++) {
            if(startValue + nums[i] === target) {
                result.push(start, i);
                start++;
                break;
            }
        }
        start++;
    }while(start < len - 1);

    console.log(result);
};

twoSum([2, 4, 6, 7], 10);