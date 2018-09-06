/*
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var isSodokuValid = function(board) {
    var rowLength = board.length;
    var colLength = board[0].length;

    for(var i = 0; i < rowLength; i++) {
        for(var j = 0; j < colLength; j++) {
            if(board[i][j] === '.') {
                for(var k = 1; k < 10; k++) {
                    if(!isValid(i, j, k, board)) {
                        if(k === 9) return false;
                        continue;
                    }

                    board[i][j] = String(k);
                    // 判断剩余格子能否在填入该数的情况下也得到有效数，若不能，则置空，重新填入（回溯法）
                    if(!isSodokuValid(board)) {
                        board[i][j] = '.';
                        if(k === 9) return false;
                        continue;
                    };

                    break;
                }
            }
        }
    }

    return true;
}

var isValid = function(i, j, k, board) {
    return isRowValid(k, board[i]) && isColValid(k, j, board) && isGridValid(k, i, j, board);
}

// 判断是否已存在于行中
var isRowValid = function(k, datas) {
    k += '';
    if(datas.indexOf(k) > -1) {
        return false;
    }
    return true;
}

// 判断是否已存在于列中
var isColValid = function(k, j, board) {
    k += '';
    var colData = [];
    for(var v = 0; v < 9; v++) {
        if(board[v][j] !== '.') {
            colData.push(board[v][j]);
        }
    }

    if(colData.indexOf(k) > -1) {
        return false;
    }

    return true;
}

// 判断是否已存在于小宫格中
var isGridValid = function(k, i, j, board) {
    k += '';
    var gridData = [];

    for(var v = 3 * Math.floor(i / 3), u = v + 3; v < u; v++) {
        for(var m = 3 * Math.floor(j / 3),n = m + 3; m < n; m++) {
            if(board[v][m] !== '.') {
                gridData.push(board[v][m]);
            }
        }
    }

    if(gridData.indexOf(k) > -1) {
        return false;
    } 

    return true;
}
var solveSudoku = function(board) {
    isSodokuValid(board);

    console.log(board);
};

// solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])

solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]])