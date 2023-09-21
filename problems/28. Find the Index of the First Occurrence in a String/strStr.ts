function strStr(haystack: string, needle: string): number {
    // return haystack.indexOf(needle);

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.slice(i, i + needle.length) == needle) {
            return i;
        }
    }
    return -1;
};

// ==================================
// test
const haystack: string = "leetcode";
const needle: string = "leeto";
// const needle: string = "code";
// const expected = -1;
console.log(strStr(haystack, needle));

export default {};