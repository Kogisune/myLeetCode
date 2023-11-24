function combinationSum(candidates: number[], target: number): number[][] {
    let res: string[] = [];
    let candidates_sort = [...candidates].sort((a, b) => { return a - b })
    let min_numb = candidates_sort[0]
    let max_numb = candidates_sort[candidates_sort.length - 1]
    let max_solve_len = Math.floor(target / min_numb);
    let solve_arr = ('#' + min_numb).repeat(max_solve_len).split('#').slice(1, max_solve_len + 1).map(n => { return Number(n) });

    let count = 1

    while (solve_arr.length > 0) {
        console.log('while 1')
        let flag = true
        while (flag) {
            console.log('while 2')
            console.log('solve_arr', solve_arr)

            let solve_arr_sum = solve_arr.reduce((accumulator, n) => { return accumulator + n }, 0);

            if (solve_arr_sum == target) {
                let sort_arr = [...solve_arr].sort().join('#')
                if (res.indexOf(sort_arr) < 0) {
                    console.log('add res', sort_arr)
                    res.push(sort_arr)
                }
            }

            if (solve_arr.filter(n => { return n == max_numb }).length == solve_arr.length) {
                flag = false;
            }

            solve_arr = nextPermutation(solve_arr, candidates_sort);
            count += 1

            if (count > 9999) {
                console.log('time out !!!')
                break
            }
        }

        solve_arr.pop();

    }

    return res.map(r => {
        return r.split('#').map(n => { return Number(n) });
    })
};

function nextPermutation(arr: number[], nums: number[]) {
    let nums_max = nums[nums.length - 1];

    for (let arr_index in arr) {
        let _index = arr.length - 1 - Number(arr_index);
        let _numb = null

        if (arr[_index] < nums_max) {
            _numb = nums[nums.indexOf(arr[_index]) + 1]
            arr[_index] = _numb || 0
            break
        }

        if (arr[_index] == nums_max) {
            _numb = nums[0];
            arr[_index] = _numb || 0
        }

    }

    for (let n of arr) {
        if (!n) debugger;
    }

    return arr
}


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

// console.log(nextPermutation([3], [4, 3, 2, 1]))

console.log(combinationSum(candidates, target))
console.log('end')

export default {};