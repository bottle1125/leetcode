/*
编写一个函数来查找字符串数组中最长的公共前缀字符串。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = '';
    var key = true;
    var j = 0;
    while(key) {
        if(!strs[0] || !strs[0][j]) {
            key = false;
            break;
        } 
        var tpl = strs[0][j];
        for(var i=0, max=strs.length; i<max; i++) {
            if(!strs[i] || strs[i].indexOf(tpl, j) !== j) {
                key = false;
                break;
            }
        }

        if(key) {
            result += tpl;
            j++;
        }
    }

    console.log(result);
};

longestCommonPrefix(["abab", "aba", ""]);