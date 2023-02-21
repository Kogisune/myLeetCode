function intToRoman(num: number): string {
    const dict = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    const replace_dict = {
        'DCCCC': 'CM',
        'CCCC': 'CD',
        'LXXXX': 'XC',
        'XXXX': 'XL',
        'VIIII': 'IX',
        'IIII': 'IV',
    }

    let res: string = '';

    Object.entries(dict).map(([key, value], index) => {
        while (num >= value) {
            num -= value;
            res += key;
        }
    })

    Object.entries(replace_dict).map(([find, key], index) => {
        res = res.replace(find, key);
    })

    return res;
};

console.log(intToRoman(1919));

export default {};