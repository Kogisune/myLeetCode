function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        const row = board[i];
        const rowSet = new Set(row);
        if (rowSet.size != row.filter(n => { return n != '.'; }).length + 1)
            return false;

        const col = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i]];
        const colSet = new Set(col);
        if (colSet.size != col.filter(n => { return n != '.'; }).length + 1)
            return false;

        const baseX = Math.floor(i / 3) * 3;
        const baseY = (i % 3) * 3;
        const block = [
            board[baseX][baseY], board[baseX][baseY + 1], board[baseX][baseY + 2],
            board[baseX + 1][baseY], board[baseX + 1][baseY + 1], board[baseX + 1][baseY + 2],
            board[baseX + 2][baseY], board[baseX + 2][baseY + 1], board[baseX + 2][baseY + 2],
        ]
        const blockSet = new Set(block);
        if (blockSet.size != block.filter(n => { return n != '.'; }).length + 1)
            return false;
    }

    return true;
};


// ==================================
// test
//
const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// outpust: true;

console.log(isValidSudoku(board));

export default {};