// function generateParenthesis(n: number): string[] {
//     // 有问题，会漏掉下级拆分的一些情况
//     let res: string[] = ['()'];
//     if (n == 1) return res;

//     for (let i: number = 1; i < n; i++) {
//         res = recursion(res, i);
//     }
//     console.log(res)
//     return res;
// };

function recursion(arr: string[], lv: number) {
    let res: string[] = [];
    for (let p of arr) {
        res.push(`(${p})`)
        res.push(`()${p}`)
        res.push(`${p}()`)
        if (lv - 3 >= 2) {
            const deepParenthesis = generateParenthesis(lv - 3);
            deepParenthesis.forEach(item => {
                res.push(`()${p}`)
                res.push(`${p}()`)
            })
        }
    }
    return [...new Set(res)].sort();
}


function generateParenthesis(n: number): string[] {
    const ans: string[] = []

    const track = (s: string, l: number, r: number) => {
        
        if (s.length === 2 * n) {
            console.log('push' + s)
            ans.push(s)
            return
        }

        console.log(s)
        if (l < n) track(s + '(', l + 1, r)
        if (r < l) track(s + ')', l, r + 1)
    }

    track('', 0, 0)

    return ans
}


// test
// let n: number = 1
// ["()"]
// let n:number = 2
// ["(())","()()"]
// let n:number = 3
// ["((()))","(()())","(())()","()(())","()()()"]
// let n: number = 4
// ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())",
// "(()())()","(())(())","(())()()",
// "()((()))","()(()())","()(())()","()()(())","()()()()"]

// let n: number = 5
// ["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()","((()(())))","((()()()))","((()())())","((()()))()","((())(()))","((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))","(()(())())","(()(()))()","(()()(()))","(()()()())",
// "(()()())()","(()())(())","(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()",
// "()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())","()(()())()","()(())(())","()(())()()","()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"]

let n: number = 5
console.log(generateParenthesis(n));

export default {};