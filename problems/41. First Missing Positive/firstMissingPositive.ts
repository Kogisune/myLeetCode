function firstMissingPositive(nums: number[]): number {
    const n0 = nums[0];
    for (let i = 0; i < nums.length; i++) {
        
    }

    return 0

};



// ==================================
// test
//

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

const nums: number[] = [1, 2, 0]

console.log(firstMissingPositive(nums))
console.log('end')


export default {};
