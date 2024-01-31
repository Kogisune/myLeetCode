let min_numb = 0;
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((a, b) => { return a - b });
    let nMap = new Map();
    let res: number[][] = [];

    let set = new Set();

    function dfs(idx: number, sum: number) {
        let current_str = [...nMap.values()].join('+')
        if (sum === target && !set.has(current_str)) {
            res.push([...nMap.values()])
            return
        }

        for (let i = idx; i < candidates.length; i++) {
            if (idx < i && candidates[i] === candidates[i - 1]) continue;

            if (target < sum + candidates[i]) break;

            nMap.set(i, candidates[i])
            dfs(i + 1, sum + candidates[i])
            nMap.delete(i)
        }
    }

    dfs(0, 0)

    return res;
};


// ==================================
// test
//

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
const target = 15

// const candidates = [10, 1, 2, 7, 6, 1, 5]
// const target = 8

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2(candidates, target))
console.log('end')


export default {}; 