/** 
 * 暴力双循环
 * 会超时
 */
// function maxArea(height: number[]): number {
//     let res: number = 0;
//     height.forEach((h, index) => {
//         for (let width: number = 1; width + index < height.length; width++) {
//             const area = width * Math.min(h, height[width + index]);
//             if (area > res) res = area;
//         }
//     })
//     return res;
// };

/**
 * 双向指针
 * 
 */
function maxArea(height: number[]): number {
    interface area_point {
        x: number,
        y: number
    }

    let res: number = 0;

    const maxObj: area_point[] = [
        { x: 0, y: height[0] },
        { x: height.length - 1, y: height.slice(-1)[0] },
    ];

    while (maxObj[0]['x'] < maxObj[1]['x']) {
        const area = (maxObj[1]['x'] - maxObj[0]['x']) * Math.min(maxObj[1]['y'], maxObj[0]['y'])
        res = Math.max(res, area);

        if (maxObj[0]['y'] < maxObj[1]['y']) {
            maxObj[0]['x'] += 1
            maxObj[0]['y'] = height[maxObj[0]['x']];
        } else {
            maxObj[1]['x'] -= 1
            maxObj[1]['y'] = height[maxObj[1]['x']];
        }
    }

    return res;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49

console.log(maxArea(height));

export default {};