function isPalindrome(x: number): boolean {
    if (x < 0) return false
    else if (x < 10) return true
    else {
        const s = String(x)

        // const s1 = s.slice(0, len);
        // const s2 = s.slice(-(Number(len))).split('').reverse().join('');

        // console.log('s1:', s1);
        // console.log('s2:', s2);

        // return s.slice(0, len) == s.slice(-(Number(len))).split('').reverse().join('');

        for (let i in s.split('')) {
            let index = Number(i);
            if (s[index] != s.slice(-(index + 1))[0]) {
                return false;
            }
        }
        return true
    }
};

console.log(isPalindrome(1233331));

export default {};