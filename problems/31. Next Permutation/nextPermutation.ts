/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const numslen = nums.length;
    if (numslen === 1) {
        return;
    } else if (numslen === 2) {
        nums.reverse();
    } else {
        let numtmp: number[] = [];
        // 从最后一位开始往前位移
        for (let i = 0; i <= numslen - 1; i++) {
            let n = nums.pop();
            if (typeof n !== 'number') break;

            // 取值
            let n_next: number | null = null;
            numtmp.sort((a, b) => { return a - b });
            for (let n_tmp of numtmp) {
                if (n_tmp > n) {
                    n_next = n_tmp;
                    break;
                }
            }

            numtmp.push(n);

            if (n_next === null) {
                // 如果没有比当前值更大的， 继续位移
                continue;
            } else {
                nums.push(n_next); // 进位的值

                // 从 numtmp 移除已进位的数 一次
                for (let i in numtmp) {
                    if (numtmp[i] === n_next) {
                        numtmp.splice(Number(i), 1);
                        break;
                    }
                }

                break; // 跳出循环
            }
        }

        // 把剩下的排序后合并到原数组
        numtmp.sort((a, b) => { return a - b })
        for (let n_tmp of numtmp) {
            nums.push(n_tmp);
        }
    }
};


// ==================================
// test
const nums: number[] = [11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2, 16, 24, 25, 2, 20, 12, 9, 20, 19];
// Explanation = "[11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,19,9,20]";

nextPermutation(nums);

console.log(nums);

export default {};