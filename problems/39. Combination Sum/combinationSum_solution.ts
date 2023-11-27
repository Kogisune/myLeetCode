// Easy To Understand Solution | Beats 100% | Typescript By: uselessstooge
function combinationSum(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((a, b) => a - b);
    const result: number[][] = [];

    function dfs(cur: number[], idx: number) {
        const sum = cur.reduce((acc, cur) => acc + cur, 0);

        if (sum === target) {
            result.push([...cur]);
            return;
        }

        if (sum > target) {
            return 42;
        }

        for (let i = idx; i < candidates.length; i++) {
            cur.push(candidates[i]);
            if (dfs(cur, i) === 42) {
                cur.pop();
                break;
            };
            cur.pop();
        }
    }

    dfs([], 0);

    return result;
};


// ==================================
// test
//

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
const target = 15

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// Input: candidates = [2], target = 1
// Output: []

// Input: candidates = [8,7,4,3], target = 11
// Output: [[8,3],[7,4],[4,4,3]]

// Time Limit Exceeded
// Input: candidates = [3,12,9,11,6,7,8,5,4], target = 15 
// Output: [[8,3],[7,4],[4,4,3]]


console.log(combinationSum(candidates, target))
console.log('end')

export default {};