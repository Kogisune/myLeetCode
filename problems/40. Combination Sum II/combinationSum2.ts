let min_numb = 0;
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((a, b) => { return a - b });

    let res: number[][] = [];

    function dfs(nMap: any, idx: number) {
        let sum = [...nMap.values()].reduce((s: number, n: any) => { return s + n }, 0)
    }


    // for (let n of candidates) {
    //     if (n > target) continue;
    //     else if (n == target) {
    //         _map.set(`${n}`, [n])
    //         continue
    //     } else {
    //         let new_target = target - n;
    //         let new_res = combinationSum(candidates, new_target);

    //         if (new_res.length) {
    //             for (let i in new_res) {
    //                 const sum = n + new_res[i].reduce((count, n) => { return count + n }, 0)
    //                 const _mArr = [...[n].concat(new_res[i])].sort()
    //                 const _mkey = _mArr.join('+')
    //                 if (sum == target && !_map.has(_mkey)) {
    //                     _map.set(_mkey, _mArr)
    //                 }
    //             }
    //         }
    //     }
    // }

    return res;
};


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