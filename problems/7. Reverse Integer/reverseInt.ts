
function reverse(x: number): number {
    const absX: number = Math.abs(x);
    const minusSign: boolean = x < 0;

    let res = Number(String(absX).split('').reverse().join(''));

    if (res > 2147483648) return 0;
    else if (minusSign) {
        return Number(`-${res}`)
    } else {
        return res;
    }
};


// console.log(reverse(-1234567890));
console.log(reverse(1534236469));

export default {};