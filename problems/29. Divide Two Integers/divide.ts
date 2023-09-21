function divide(dividend: number, divisor: number): number {
    // TODO: 位运算实现
    // dividend.toString(2);
    // return Math.floor(dividend / divisor);

    let res: number = 0;
    if (
        divisor === 0  // 除数不能为0
        || dividend < divisor  // 被除数小于除数
    ) {
        return 0;
    }

    // 有无负号
    const hasNegativeSign: boolean = Math.abs(dividend) + Math.abs(divisor) != Math.abs(dividend + divisor)
        ? true
        : false;

    // 算位数
    let bit_sum: number = 0;
    let bit_first_count: number = 0;
    while (bit_sum <= dividend) {   //获取dividend位数
        bit_sum <<= 1;
        ++bit_first_count;
    }


    return hasNegativeSign ? 0 - res : res;
};

// ==================================
// test
const dividend: number = 10;
const divisor: number = 3;
// const expected = 3;

console.log(divide(dividend, divisor));

export default {};