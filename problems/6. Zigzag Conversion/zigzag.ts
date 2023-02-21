function convert(s: string, numRows: number): string {
    let sArr: string[] = s.split("");
    let res: string = "";

    if (s.length == 1 || numRows == 1) {
        res = s;
        return res;
    }

    const container: any[] = [];
    for (let i: number = 0; i < numRows; i++) {
        const numbers: number[] = new Array();
        container.push(numbers);
    }

    /** 行ID */
    let row: number = 0;
    /** 列ID */
    let col: number = 0;

    for (let index in sArr) {
        const curChar = sArr[index];
        let remainder = Number(index) % (2 * (numRows - 1));

        if (remainder == 0) {
            if (index != "0") {
                row += 1;
                col -= 1;
            }
            container[0][row] = curChar;
            continue;
        } else {
            if (remainder < numRows) {
                col += 1;
                container[col][row] = curChar;
            } else {
                row += 1;
                col -= 1;
                container[col][row] = curChar;
            }
        }
    }

    for (let arr of container) {
        res += arr.join("");
    }

    return res;
}

console.log(convert('PAYPALISHIRING', 3))
console.log('PAHNAPLSIIGYIR')

export default {};