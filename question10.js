/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 长度最长为1000。
*/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var r = s.split('').reverse().join('');
    var i = 0;

    var result = [];
    var str = '';
    for(i=0; i<s.length; i++) {
        if(r[i] === s[i]) {
            str += r[i];
        }
        else {
            result.push(str);
            str = '';
        }
    }

    console.log(result);
};

longestPalindrome('babcd');