let min_numb = 0;
function combinationSum(candidates: number[], target: number): number[][] {
    if (!min_numb) min_numb = candidates.sort((a, b) => { return a - b })[0]

    let _map = new Map();

    if (target < min_numb) return [];

    for (let n of candidates) {
        if (n > target) continue;
        else if (n == target) {
            _map.set(`${n}`, [n])
            continue
        } else {
            let new_target = target - n;
            let new_res = combinationSum(candidates, new_target);

            if (new_res.length) {
                for (let i in new_res) {
                    const sum = n + new_res[i].reduce((count, n) => { return count + n }, 0)
                    const _mArr = [...[n].concat(new_res[i])].sort()
                    const _mkey = _mArr.join('+')
                    if (sum == target && !_map.has(_mkey)) {
                        _map.set(_mkey, _mArr)
                    }
                }
            }
        }
    }

    return Array.from(_map.values())
};

// function isTwoDimensionalNumberArray(array: any): array is number[][] {
//     return Array.isArray(array) && array.every(
//         subArray => Array.isArray(subArray) && subArray.every(
//             element => typeof element === 'number'
//         )
//     );
// }

// function minMax(array: number[]): [number, number] {
//     return array.reduce(([min, max], value) => [
//         Math.min(min, value),
//         Math.max(max, value)
//     ], [0, 0]);
// }


// ==================================
// test
//

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
const target = 15

// 3 + combinationSum(candidates, 12)
//// 3 + (3 + combinationSum(candidates, 9))  // continue
//// 3 + (12 + combinationSum(candidates, 0))
//// 3 + (9 + combinationSum(candidates, 3))  // ok
//// 3 + (11 + combinationSum(candidates, 1))
//// 3 + (6 + combinationSum(candidates, 6))
//// 3 + (7 + combinationSum(candidates, 5))
//// 3 + (5 + combinationSum(candidates, 7))
//// 3 + (8 + combinationSum(candidates, 4))
//// 3 + (4 + combinationSum(candidates, 8))

////// 3 + (3 + (3 + combinationSum(candidates, 6)))
//////// 3 + (3 + (3 + (3 + combinationSum(candidates, 3))))  // ok

////// 3 + (3 + (6 + combinationSum(candidates, 3)))  // ok
////// 3 + (3 + (5 + combinationSum(candidates, 4)))
////// 3 + (3 + (4 + combinationSum(candidates, 5)))

// 12 + combinationSum(candidates, 3)

// 9 + combinationSum(candidates, 6)
// 6 + combinationSum(candidates, 9)

// 7 + combinationSum(candidates, 8)
// 8 + combinationSum(candidates, 7)

// 5 + combinationSum(candidates, 10)
// 11 + combinationSum(candidates, 4)

// 4 + combinationSum(candidates, 11)
//// 4 + (4 + combinationSum(candidates, 7))


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

// console.log(nextPermutation([3], [4, 3, 2, 1]))


console.log(combinationSum(candidates, target))
console.log('end')

export default {};