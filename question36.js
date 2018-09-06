/**
 * @param {character[][]} board
 * @return {boolean}
 */


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


var isValid = function(i, j, k, board) {
    return isRowValid(k, board[i]) && isColValid(k, j, board) && isGridValid(k, i, j, board);
}
var isValidSudoku = function(board) {
    var rowLength = board.length;
    var colLength = board[0].length;
    for(var i = 0; i < rowLength; i++) {
        for(var j = 0; j < colLength; j++) {
            if(board[i][j] !== '.') {
                var k = board[i][j];
                board[i][j] = '.';
                if(isValid(i, j, k, board)) {
                    board[i][j] = k;
                    continue;
                }
                console.log('false');
                return false;
            }
        }
    }

    console.log('true');
    return true;
};

// isValidSudoku([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])

isValidSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]);