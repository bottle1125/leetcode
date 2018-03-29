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