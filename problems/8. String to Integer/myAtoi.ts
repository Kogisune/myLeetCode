/** 
 * 字符串遍历方法
 * 已通过
 */
function myAtoi(s: string): number {
    let c: string = '';
    let c_next: string = '';

    let res = ''
    const dict = ['+', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    s = s.trim();
    for (let i: number = 0; i < s.length; i++) {
        c = s[i];
        c_next = s[i + 1];

        if (dict.indexOf(c) < 0) break;
        else {
            res += c;

            if (['+', '-'].indexOf(c_next) >= 0) { break }
        }
    }

    if (res == '-' || res == '+') return 0;
    else {
        const result: number = Number(res);
        if (result < -2147483648) return -2147483648;
        else if (result > 2147483647) return 2147483647
        else return result;
    }
};

/** 
 * 正则匹配方法 
 * 未通过
 */
// function myAtoi(s: string): number {
//     const matches: any = s.trim().match(/^[\d\s\-\+]{1}?\.?\d+/);
//     const res: number = matches ? Number(matches['0']) : 0
//     if (res < -2147483648) return -2147483648;
//     else if (res > 2147483647) return 2147483647
//     else return res;
// };

// 测试用例
const test1 = "   - 42";
const test2 = "-4193 with words";
const test3 = "words and 987";
const test4 = "   -12";
const test5 = "-91283472332";
const test6 = "3.14159";
const test7 = "456+123";

console.log(myAtoi('-91283472332'));

export default {};