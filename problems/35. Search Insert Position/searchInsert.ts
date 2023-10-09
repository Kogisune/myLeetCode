function searchInsert(nums: number[], target: number): number {
    for (let i in nums) {
        if (nums[i] === target || nums[i] > target) {
            return Number(i)
        }
    }
    return nums.length;
};

// ==================================
// test
//
// const nums: number[] = [1, 3, 5, 6];
// const target: number = 5
// outpust: 2;

const nums: number[] = [1, 3, 5, 6];
const target: number = 5
// outpust: 2;


console.log(searchInsert(nums, target));

export default {};