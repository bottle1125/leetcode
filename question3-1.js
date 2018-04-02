/*
给定一个字符串，找出不含有重复字符的 最长子串 的长度。

示例：

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var sLen = s.length;
    var end = sLen;
    var result = sLen;
    var max = 0;
    var slides = s.substr(start, end);
    var map = [];
    var mStart = -1;
    var mEnd = -1;

    var isRepeat = function(arr) {
        var obj = {};
        var key = false;
        var len = arr.length;

        for(var i=0; i < arr.length; i++) { 
            //存在重复值
            if(obj[arr[i]]) {
                let sIndex = arr.indexOf(arr[i]) + start;
                let eIndex = i + start;
                map.push(sIndex);
                map.push(eIndex);
                mStart = sIndex;
                mEnd = eIndex;
                key = true;

                break;
            }; 

            obj[arr[i]] = true; 
        } 
        return key; 
    };

    var ifContainRepeat = function(start, end) {
        var key = false;
        for(var i=0; i<map.length; i+=2) {
            if(start <= map[i] && end > map[i+1]) {
                mStart = map[i];
                mEnd = map[i+1];
                key = true;
                break;
            }
        }

        return key;
    }

    do {
        var obj = {};
        if(!ifContainRepeat(start, end) && !isRepeat(slides)) {
            if(end - start >= result) {
                break;
            }
            if(end - start > max && end - start > result) {
                max = end - start;
            }
        }
        if(end < sLen) {
            start = mStart >= 0 ? mStart + 1 : start + 1;
            end++;
        }
        else {
            start = 0;
            end = --result;
        }
        slides = s.substr(start, end);
    }while(slides.length > 1);

    console.log(end - start,start, end);
};

lengthOfLongestSubstring("qwertyuiopqwertyuiop");