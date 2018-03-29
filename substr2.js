var lengthOfLongestSubstring = function(s) {
    var result = '';
    var tempResult = '';
    for(var i=0; i<s.length; i++) {
        if(tempResult.indexOf(s[i]) === -1) {
            tempResult += s[i];
            if(tempResult.length > result.length) {
                result = tempResult;
            }
        }
        else {
            if(tempResult.length > result.length) {
                result = tempResult;
            }
            var index = tempResult.indexOf(s[i]);
            tempResult = tempResult.slice(index+1) + s[i];
        }
    }

    console.log(result);
}

lengthOfLongestSubstring('abcabcdd')