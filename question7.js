/*
给定一个范围为 32 位 int 的整数，将其颠倒。
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString();
    var arr = str.split('');
    var symbol = true;
    if(arr[0] === '-') {
        symbol = false;
        arr = arr.slice(1, arr.length);
    } 
    var revert = arr.reverse();
    var number = parseFloat(revert.join(''));
    var result = symbol ? number : -number;
    if(result < -2147483648 || result > 2147483647) {
        result = 0;
    }
    console.log(result);
};

reverse(1534236469);