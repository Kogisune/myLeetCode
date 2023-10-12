/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const ins_sudo = new Sudoku(board);
    let step0: SolveStep | null = null;
    let ins_step: SolveStep | null = null;

    // console.log('create link start')

    let _count = 0

    // 开始遍历
    for (let i = 0; i < board.length; i++) { // 循环列
        for (let j = 0; j < board.length; j++) { // 循环行

            if (board[i][j] !== '.') continue;

            const nowPosition: Position = { x: i, y: j }

            // 可填充的值
            const remineNums = ins_sudo.getRemainNums(nowPosition);
            if (remineNums.length == 0) {
                // ins_step?.undo();
                return console.error('生成步骤链表时发生错误！数独可能无解')
            }

            if (remineNums.length == 1) { // 必为下标0的值,不需要创建step
                // console.log('filled one');
                // console.log(nowPosition, ' ', remineNums[0]);
                // console.log('\n');

                ins_sudo.fillNum(nowPosition, remineNums[0])
                continue;
            }

            const numItem: NumItem = {
                _id: _count++,
                index: 0,
                position: nowPosition,
                allowList: remineNums,
            }

            let cur_step: SolveStep = new SolveStep(numItem, ins_sudo);

            // console.log('step ', _count);
            // console.log('{x: ', i, ', y: ', j, '}');
            // console.log(board[i][j]);

            if (step0 === null) {
                step0 = cur_step;
                ins_step = cur_step;
            } else if (ins_step) {
                let prev_step = ins_step
                prev_step.next = cur_step
                cur_step.prev = prev_step
                ins_step = cur_step
            }
        }
    }

    // console.log('create link end')
    console.log(_count);

    // console.log('\n');

    // console.log('solve start');

    let solveCount = 0
    let startStep: SolveStep | null = step0;

    while (startStep && !startStep?.isComplete) {
        // console.log('\n')
        // console.log('solve', solveCount)
        // console.log('\n')
        // if (solveCount > 999) break;
        startStep = startStep?.doFilling();
        solveCount += 1;
    }

    console.log(startStep?.isComplete ? '完成' : '失败')
    console.log('solve end')

    ins_sudo.printBoard();

    // debugger;
};

type SudoBoard = string[][];
type Position = {
    x: number,
    y: number
}
type NumItem = {
    _id: number,
    index: number,
    position: Position,
    allowList: string[],
}

class Sudoku {
    protected _board: SudoBoard = [];
    protected _source: SudoBoard = [];

    constructor(boardData: SudoBoard) {
        this._board = [...boardData];
        this._source = boardData
    }

    public printBoard() {
        console.log(this._board);
    }

    public static checkDuplicatesNum(container: string[]) {
        const _set = new Set(container);
        const _filter = container.filter(n => { return n != '.' });
        return _set.size === _filter.length;
    }

    public getRow(index: number) {
        return this._board[index];
    }
    public getRowSet(index: number) {
        return new Set(this.getRow(index))
    }

    public getCol(index: number) {
        return this._board.map(r => { return r[index] });
    }
    public getColSet(index: number) {
        return new Set(this.getCol(index));
    }

    public getBlock(index: number) {
        const baseX = Math.floor(index / 3) * 3;
        const baseY = (index % 3) * 3;

        return [
            ...this._board[baseX].slice(baseY, baseY + 3),
            ...this._board[baseX + 1].slice(baseY, baseY + 3),
            ...this._board[baseX + 2].slice(baseY, baseY + 3),
        ];
    }
    public getBlockSet(index: number) {
        return new Set(this.getBlock(index))
    }

    public getRemainNums(pos: Position): string[] {
        const exist = new Set([
            ...this.getRow(pos.x),
            ...this.getCol(pos.y),
            ...this.getBlock(this.pos2BlockIndex(pos)),
        ])
        let res: string[] = [];
        for (let i = 1; i <= 9; i++) {
            if (!exist.has(String(i))) res.push(String(i));
        }

        // if (!res || res.length <= 1) debugger;
        return res;
    }

    public pos2BlockIndex(pos: Position): number {
        return Math.floor(pos.x / 3) * 3 + Math.floor(pos.y / 3);
    }

    public fillNum(pos: Position, num: string) {
        const remaineSet = new Set(this.getRemainNums(pos));

        if (remaineSet.has(num)) {
            this._board[pos.x][pos.y] = num;
            return true;
        }

        return false;
    }

    public resetNum(pos: Position) {
        this._board[pos.x][pos.y] = '.';
    }
}

class SolveStep {
    isComplete: boolean = false;

    sudoku: Sudoku;
    numItem: NumItem;

    prev: SolveStep | null;
    next: SolveStep | null;

    constructor(item: NumItem, sudoku: Sudoku) {
        this.sudoku = sudoku;
        this.numItem = item;
        this.prev = null;
        this.next = null;
    }

    public updateAllowList() {
        this.numItem.allowList = this.sudoku.getRemainNums(this.numItem.position);
    }

    /** 
     * 执行填充
     */
    public doFilling(): SolveStep | null {
        if (this.numItem._id == 43) debugger;

        // console.log('\n')
        // 尽量不用回调，太占内存了
        if (this.numItem.index >= this.numItem.allowList.length) return this.undo();

        const curAllowList = this.sudoku.getRemainNums(this.numItem.position);
        if (!curAllowList.length) return this.undo();

        const _value = this.numItem.allowList[this.numItem.index]
        // console.log(`No${this.numItem._id}`, this.numItem.index, _value);
        // console.log(this.numItem.position);

        // console.log('curAllowList ', curAllowList);
        // console.log('stepAllowList ', this.numItem.allowList);
        // console.log('\n')

        // console.log(this.numItem._id)
        // if (this.numItem._id >= 43) debugger


        if (curAllowList.indexOf(_value) < 0) {
            return this.offset().doFilling()
        }

        const res = this.sudoku.fillNum(this.numItem.position, _value);
        // console.log('fill ', _value)
        // console.log('\n')

        if (res) {
            if (this.next) {
                return this.next
            } else {
                this.isComplete = true;
                return this;
            }
        } else {
            // 失败时重试
            return this.offset().doFilling()
        }
    }

    /** numItem 偏移到下一个index */
    public offset() {
        this.numItem.index += 1;
        // console.log('offset', this.numItem.index)
        return this;
    }

    public undo() {
        if (!this.prev) {
            console.error('解题失败')
            return null;
        }
        this.numItem.index = 0;
        this.sudoku.resetNum(this.numItem.position);
        return this.prev ? this.prev.offset() : null;
    }

}



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
// outpust: [
//     ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
//     ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
//     ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
//     ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
//     ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
//     ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
//     ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
//     ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
//     ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
// ];

/**
| --    | --    | --    | --    | --    | --    | --    | --    | --    |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 0     | --    | --    | 1     | --    | --    | 2     | --    | --    |
| [0,0] | [0,1] | [0,2] | [0,3] | [0,4] | [0,5] | [0,6] | [0,7] | [0,8] |
| [1,0] | [1,1] | [1,2] | [1,3] | [1,4] | [1,5] | [1,6] | [1,7] | [1,8] |
| [2,0] | [2,1] | [2,2] | [2,3] | [2,4] | [2,5] | [2,6] | [2,7] | [2,8] |
| 3     | --    | --    | 4     | --    | --    | 5     | --    | --    |
| [3,0] | [3,1] | [3,2] | [3,3] | [3,4] | [3,5] | [3,6] | [3,7] | [3,8] |
| [4,0] | [4,1] | [4,2] | [4,3] | [4,4] | [4,5] | [4,6] | [4,7] | [4,8] |
| [5,0] | [5,1] | [5,2] | [5,3] | [5,4] | [5,5] | [5,6] | [5,7] | [5,8] |
| 6     | --    | --    | 7     | --    | --    | 8     | --    | --    |
| [6,0] | [6,1] | [6,2] | [6,3] | [6,4] | [6,5] | [6,6] | [6,7] | [6,8] |
| [7,0] | [7,1] | [7,2] | [7,3] | [7,4] | [7,5] | [7,6] | [7,7] | [7,8] |
| [8,0] | [8,1] | [8,2] | [8,3] | [8,4] | [8,5] | [8,6] | [8,7] | [8,8] |

0   y

x
*/


// console.log(board.map(r=>{return r[i]}));
let st = new Date().getTime();

solveSudoku(board);

let et = new Date().getTime()

// console.log(et - st);

export default {};