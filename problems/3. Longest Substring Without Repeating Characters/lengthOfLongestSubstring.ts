function lengthOfLongestSubstring(s: string): number {
    let res: number = 0;
    let cur_res: string = '';

    for (let _char of s) {
        const c_index = cur_res.indexOf(_char);

        cur_res += _char;
        if (c_index >= 0) {
            cur_res = cur_res.slice(c_index + 1);
        }

        if (res < cur_res.length) res = cur_res.length;
    }

    return res;
};


// const str = 'abcabcbb';
// const str = 'pwwkew';
const str = 'add';

console.log(lengthOfLongestSubstring(str));

export default {};