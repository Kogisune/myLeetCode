function combinationSum2(candidates: number[], target: number): number[][] {


    return []
};

/**
 * 下一个更大的数组 
 * @param arr 
 * @param nums
 */
function nextPermutation(arr: number[], nums: number[]) {
    for (let arr_index in arr) {
        let _index = arr.length - 1 - Number(arr_index);
        let _numb = null

        if (arr[_index] < nums[nums.length - 1]) {
            _numb = nums[nums.indexOf(arr[_index]) + 1]
            arr[_index] = _numb || 0
            break
        }

        if (arr[_index] == nums[nums.length - 1]) {
            _numb = nums[0];
            arr[_index] = _numb || 0
        }

    }

    return arr
}

export default {};