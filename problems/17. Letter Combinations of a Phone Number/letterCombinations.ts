function letterCombinations(digits: string): string[] {
    if(digits == ''){
        return [];
    }

    if(digits.length == 1){
        return keyboard[Number(digits[0])];
    }

    const input: any[] = [];
    for (let n of digits) {
        input.push(keyboard[Number(n)])
    }

    return deepMerge('', input);
};

function deepMerge(head: string, arr: any[]): string[] {
    const current = arr[0];
    let res: string[] = [];

    for (let c of current) {
        if (arr.length > 1) {
            res = res.concat(deepMerge(head + c, arr.slice(1)));
        } else {
            res.push(head + c);
        }
    }

    return res;
}

const keyboard = [
    [], [],
    ['a', 'b', 'c'], ['d', 'e', 'f'],
    ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z'],
];

console.log(letterCombinations('8'));

export default {};