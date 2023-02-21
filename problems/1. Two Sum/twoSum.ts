function twoSum(nums: number[], target: number): number[] {
    let res: Array<number> = [];
    let flag: boolean = false;

    for (let i: number = 0; i < nums.length; i++) {

        const curNum: number = nums[i];
        const _nums = nums.slice(i + 1, nums.length);

        for (let j in _nums) {
            if (nums[i] + _nums[j] == target) {
                res = [i, i + Number(j) + 1]
                flag = true;
                break;
            }
        }

        if (flag) break;
    }

    return res;
};


// ==================================
// test 已通过 5% 5%
const test = [2, 7, 11, 15];

// test end
// ==================================

export default { twoSum };