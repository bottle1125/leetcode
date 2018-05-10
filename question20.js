/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var left = ['(', '{', '['];
    var right = [')', '}', ']'];
    
    var array = [];
    
    for(var i = 0; i < s.length; i++) {
        var tpl = array[array.length - 1];
        var j = right.indexOf(s[i]);
        
        if(j > -1 && j === left.indexOf(tpl)) {
            array.pop();
            continue;
        }

        array.push(s[i]);
    }

    if(!array.length) {
        return true;
    }
    return false;
};