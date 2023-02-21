function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const length = nums1.length + nums2.length;
    const max = length % 2 ? 1 : 2;
    for (let i: number = 0; i < length; i++) {
        if (nums1.length + nums2.length <= max) break;
        if (i % 2) {
            const num_end1 = nums1.slice(0).pop();
            const num_end2 = nums2.slice(0).pop();
            if (num_end1 == undefined) {
                nums2 = nums2.slice(0, -1);
            } else if (num_end2 == undefined) {
                nums1 = nums1.slice(0, -1);
            } else {
                if (num_end1 > num_end2) {
                    nums1 = nums1.slice(0, -1);
                } else {
                    nums2 = nums2.slice(0, -1);
                }
            }
        } else {
            if (nums1[0] == undefined) {
                nums2 = nums2.slice(1);
            } else if (nums2[0] == undefined) {
                nums1 = nums1.slice(1);
            } else {
                if (nums1[0] > nums2[0]) {
                    nums2 = nums2.slice(1);
                } else {
                    nums1 = nums1.slice(1);
                }
            }
        }
    }

    let arr_new: number[] = [];
    arr_new = arr_new.concat(nums1, nums2).sort();
    if (arr_new.length > 2) arr_new = arr_new.slice(1, -1);
    if (arr_new.length > 1) {
        return (arr_new[0] + arr_new[1]) / 2;
    } else {
        return arr_new[0];
    }
};

// const test_nums1: number[] = [];
// const test_nums2: number[] = [1];

// const test_nums1 = [1, 3];
// const test_nums2 = [2];

// const test_nums1 = [1, 2];
// const test_nums2 = [3, 4];

const test_nums1 = [-2, -1];
const test_nums2 = [3];

// const test_nums1 = [1, 1, 2];
// const test_nums2 = [2, 2, 3, 4, 5, 6];

console.log(findMedianSortedArrays(test_nums1, test_nums2));

export default {};