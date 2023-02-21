
function isValid(s: string): boolean {
    if (s.length % 2 == 1) return false;

    const maxTimes = s.length / 2;
    for (let i = 0; i <= maxTimes; i++) {
        if(s == '') break;
        s = s.replace(/\(\)|\[\]|\{\}/gm, '');
    }

    return !s.length;
};

function test_isValid() {
    let test: string = "()[]{}";
    console.log(isValid(test));
}

test_isValid();


export default {};