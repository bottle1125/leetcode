var removeElement = function(nums, val) {
    for(var i=0; i<nums.length; ) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }

    console.log(nums);
};

removeElement([1,2,3,4,3], 3);