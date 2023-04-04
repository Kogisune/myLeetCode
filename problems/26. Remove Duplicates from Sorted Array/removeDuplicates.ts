function removeDuplicates(nums: number[]): number {
    const len: number = nums.length;
    let i: number = 0;
    while (i < len) {
        let sliceEnd = nums.slice(i + 1, nums.length)
        if (sliceEnd.indexOf(nums[i]) >= 0) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    console.log(nums);

    return len;
};


// ==================================
// test
const testArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const expectedNums = [0,1,2,3,4,_,_,_,_,_];
console.log(removeDuplicates(testArr));

export default {};