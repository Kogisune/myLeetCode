function romanToInt(s: string): number {
    const dict: Record<string, number> = {
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

    let source: string = s;
    let res = 0;

    Object.entries(replace_dict).map(([key, value], index) => {
        source = source.replace(value, key);
    })

    for (let c of source) {
        res += dict[c];
    }

    return res;
};

console.log(romanToInt('MCMXCIV'))

export default {};