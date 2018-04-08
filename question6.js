/*
给定一个排序数组和一个目标值，如果在数组中找到目标值则返回索引。如果没有，返回到它将会被按顺序插入的位置。

你可以假设在数组中无重复元素。
*/

var searchInsert = function(nums, target) {
    if(target === 0) {
        return 0;
    }
    var index = nums.indexOf(target);
    
    if(index > -1) {
        return index;
    }
    else {
        if(target < nums[0]) {
            return 0;
        }
        for(var i=0; i<nums.length; i++) {
            if(target > nums[i] && target < nums[i+1]) {
                index = i + 1;
                break;
            }
        }

        if(index === -1) {
            index = nums.length;
        }
        return index;
    }
};

console.log(searchInsert([1,3,5,6], 2))