function combinationSum2(candidates: number[], target: number): number[][] {
    let res: number[][] = []

    function bt(i: number, nMap: any, sum: number) {
        if (nMap.has(i) || sum > target) return

        if (sum == target) {
            console.log(nMap)
            res.push(nMap.values());

            return;
        }

        for (let index = i; index < candidates.length; index++) {
            // console.log(i)
            // console.log(index)
            // console.log(res)

            nMap.set(i, candidates[index])
            // arr.push();

            let numbSum = Array.from(nMap.values()).reduce((s: number, n: any) => { return s + n }, 0)
            bt(index, nMap, numbSum)

            nMap.delete(i);
        }

    }

    bt(0, [], 0);

    return Array.from(res.values())
};

/**
 * 下一个更大的数组 
 * @param arr 
 * @param nums
 */
// function nextPermutation(arr: number[], nums: number[]) {
//     for (let arr_index in arr) {
//         let _index = arr.length - 1 - Number(arr_index);
//         let _numb = null

//         if (arr[_index] < nums[nums.length - 1]) {
//             _numb = nums[nums.indexOf(arr[_index]) + 1]
//             arr[_index] = _numb || 0
//             break
//         }

//         if (arr[_index] == nums[nums.length - 1]) {
//             _numb = nums[0];
//             arr[_index] = _numb || 0
//         }

//     }

//     return arr
// }


// ==================================
// test
//

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
const target = 15

console.log(combinationSum2(candidates, target))
console.log('end')


export default {};