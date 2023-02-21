function longestCommonPrefix(strs: string[]): string {
    // check empty
    if (strs.indexOf('') >= 0) return '';
    if (strs.length == 1) return strs[0];

    let flag: boolean = false;
    let index: number = 0;
    const clip = strs.slice(1, strs.length);

    for (let c of strs[0]) {
        for (let str of clip) {
            if (c == str[index]) continue;
            else {
                flag = true;
                break;
            }
        }
        if (flag) break;
        index += 1;
    }
    console.log('output:')
    return strs[0].slice(0, index);
};

// let strs = ["dog", "racecar", "car"];
let strs = ["flower", "flower", "flower", "flower"];

console.log(longestCommonPrefix(strs));

export default {};