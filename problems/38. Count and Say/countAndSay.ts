
function countAndSay(n: number): string {
    console.log(n)
    let res = '1';
    for (let i = 1; i < n; i++) {
        res = sayNumb(res)
    }

    return res;
};

function sayNumb(numb: string): string {
    console.log(numb)
    let res = '';
    if (numb == '1') {
        res = '11';
    } else {
        let prev_numb: string | null = null;
        let prev_count: number = 1;
        for (let i in numb.split('')) {
            let cur_number = numb[i];

            if (cur_number != numb[Number(i) + 1]) {
                prev_numb = cur_number;
                res = res + prev_count + prev_numb
                prev_count = 1
            } else {
                prev_count += 1;
            }

            prev_numb = cur_number;
        }
    }

    console.log('res:', res);
    return res;
}


// ==================================
// test
//

// Input: n = 1
// Output: "1"

// Input: n = 4
// Output: "1211"

let n = 6;

// countAndSay(n)

export default {};