/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

 * 注意：答案中不可以包含重复的三元组。
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var array = [];

    function compare(a, b) {
        return a - b;
    }
    nums.sort(compare);
 
    for(var i=0; i<nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            continue;
        }
           
        var len = nums.length;
        var j = i + 1;
        var k = len - 1;

        while(j < k) {
            if(k < len -1 && nums[k] == nums[k+1])  {  
                k--;  
                continue;  
            }
            if(j > i + 1 && nums[j] == nums[j-1])  {  
                j++;  
                continue;  
            }
            //如果当前三个数和较小，则j向后移动，使得总数增大  
            if(nums[j] + nums[k] + nums[i] < 0)  
            {  
                j++;  
            }  
            else  
            {  
                if(nums[j] + nums[k] + nums[i] > 0)  
                {  
                    k--;  
                }  
                else  
                {  
                    array.push([nums[i], nums[j], nums[k]]);
                    j++;  
                    k--;  
                }  

            }  
        }  
    }

    return array;

};
