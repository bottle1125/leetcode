/*
给定一个有序数组，你需要原地删除其中的重复内容，使每个元素只出现一次,并返回新的长度。

不要另外定义一个数组，您必须通过用 O(1) 额外内存原地修改输入的数组来做到这一点。
*/
var removeDuplicates = function(nums) {
    for(var i=1; i<nums.length; ) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }

    console.log(nums);
};

removeDuplicates([1,1,2, 4, 4, 5, 6, 7])