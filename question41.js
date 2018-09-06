var compareNumbers = function(a, b) {
    return a - b;
}

var firstMissingPositive = function(nums) {
    var minNum = '';
    var sortNums = nums.sort(compareNumbers);
    if(sortNums[0] > 1 || !sortNums.length) {
        return 1;
    }

    for(var i = 1; i < sortNums.length; i++) {
        if(sortNums[i] > sortNums[i - 1] + 1) {
            if(sortNums[i - 1] + 1 > 0) {
                minNum = sortNums[i - 1] + 1;
                break;
            }
            else if(sortNums[i] > 1) {
                minNum = 1;
                break;
            }
        }
    }

    if(minNum === '') {
        minNum = Math.max(...nums) >= 0 ? Math.max(...nums) + 1 : 1;
    } 

    console.log(minNum);
};

firstMissingPositive([-1000, 2, -9])