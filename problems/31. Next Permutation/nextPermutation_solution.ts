// mutative!
function swapValuesByIndex(array: number[], index1: number, index2: number) {
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}

// mutative! 
function reversePartOfArray(array: number[], startIndex: number, endIndex: number) {
    while (startIndex < endIndex) {
        swapValuesByIndex(array, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

function findLastIndexWhere(array: number[], callbackFn: any) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (callbackFn(array[i], i)) return i;
    }
}

// mutative!
function nextPermutation(nums: number[]): void {
    // step 1: find the last digit that decreases from the one after it
    const firstIndex = findLastIndexWhere(nums, (num: number, i: number) => nums[i + 1] !== undefined && num < nums[i + 1]);

    // step 1a: if the whole array is monotonically increasing from end to beginning, reverse the entire array
    if (firstIndex === undefined) {
        reversePartOfArray(nums, 0, nums.length - 1);
        return;
    }

    // step 2: find the last digit that is larger than our "pivot" digit
    const secondIndex: number = findLastIndexWhere(nums, (num: number, i: number) => num > nums[firstIndex]) || -1;

    // step 3: swap those digits
    swapValuesByIndex(nums, firstIndex, secondIndex);

    // step 4: reverse the part of the number after the swapped one
    reversePartOfArray(nums, firstIndex + 1, nums.length - 1);
};

// time complexity: O(n + n + n) = O(n)
// space complexity: O(1)

export default {};