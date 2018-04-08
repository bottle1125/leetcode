/*
数数并说序列是一个整数序列，第二项起每一项的值为对前一项的计数，其前五项如下：
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作 "一个一" 即 11。
11 被读作  "两个一" 即 21。
21 被读作  "一个二 和 一个一" 即 1211。

给一个正整数 n ，输出数数并说序列的第 n 项。

注意：该整数序列的每项都输出为字符串。
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return '1';
    }
    if(n === 2) {
        return '11';
    }
    var value = countAndSay(n - 1);
    var arr = value.split('');

    var result = [];
    var num = 1;
    for(var i=1; i<arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            result.push(num, arr[i - 1]);
            num = 1;
        }
        else {
            num++;
        }
    }
    result.push(num, arr[arr.length - 1])

    return result.join('');
};

console.log(countAndSay(6));