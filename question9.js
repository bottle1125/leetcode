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