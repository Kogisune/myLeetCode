function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start: number, remain: number) {
        if (remain === 0) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remain) break;
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtrack(i + 1, remain - candidates[i]);
            path.pop();
        }
    }

    backtrack(0, target);
    return res;
}


// ==================================
// test
//

// const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
// const target = 15

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2(candidates, target))
console.log('end')


export default {}; 