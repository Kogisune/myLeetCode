function removeElement(nums: number[], val: number): number {
    const len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};


// ==================================
// test
const testArr: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
const testVal: number = 2;
// const expectedNums = [0,1,4,0,3,_,_,_];
console.log(removeElement(testArr, testVal));

export default {};