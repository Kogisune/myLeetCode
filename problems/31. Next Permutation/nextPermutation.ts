/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const numslen = nums.length;
    let numset = Array.from(new Set(nums));
    let numtmp: number[] = [];

    // 从最后一位开始往前位移
    for (let i = 0; i < numslen - 1; i++) {
        if (!nums.length) {
            nums.sort();
        };

        let n = nums.pop();
        if (typeof n !== 'number') break;

        // 如果没有比当前值更大的， 继续位移
        let n_next = hasLagerNum(n, numtmp);
        if (i == 0 || n_next === null) {
            numtmp.push(n)
            continue;
        }

        nums.push(n_next);


        // 移除已换的那个数

        // 把剩下的排序后合并到原数组
        nums.concat(numtmp.sort())
    }

};

function hasLagerNum(num: number, arr: number[]): number | null {
    for (let n of arr) {
        if (n > num) return n
    }
    return null;
}


// ==================================
// test
const nums: number[] = [1, 2, 3];
// const expected = [1,3,2];

console.log(nextPermutation(nums));

// export default {};