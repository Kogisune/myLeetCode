function removeDuplicates(nums: number[]): number {
    let count: number = 0;

    nums.forEach((n, i) => {
        if (nums.indexOf(nums[i]) < i) {
            nums.splice(i - count, 1)
            count += 1;
        }
    })

    return count;
};


// ==================================
// test
const testArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const testArr = [1, 1, 2];
console.log(removeDuplicates(testArr));

export default {};