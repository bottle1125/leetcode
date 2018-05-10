/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

 
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numArray = digits.split('');
    const codeArray = [];
    
    numArray.forEach(num => {
        let codes = [];
        let codeStart = (+num - 2) * 3 + 97;
        if(+num > 7) {
            codeStart = codeStart + 1;
        }
        if(+num == 7 || +num == 9) {
            codes = [codeStart, codeStart + 1, codeStart + 2, codeStart + 3].map(item => {
                return String.fromCharCode(item);
            });
            console.log(codes);
        }
        else {
            codes = [codeStart, codeStart + 1, codeStart + 2].map(item => {
                return String.fromCharCode(item);
            });
        }
        codeArray.push(codes);
    });

    console.log(codeArray);
    
    const result = [];
    let len = digits.length;
    for(let i=0; i < len; i++) {
        result[i] = [];
        for(let j=0; j < codeArray[i].length; j++) {
            if(result[i - 1]) {
                result[i - 1].forEach(r => {
                    result[i].push(r + codeArray[i][j]);
                });
            }
            else {
                result[i].push(codeArray[i][j]);
            }
        }
    };
    
    console.log(result[result.length - 1]);
};

letterCombinations('7');