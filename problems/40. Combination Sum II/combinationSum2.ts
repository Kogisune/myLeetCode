function combinationSum2(candidates: number[], target: number): number[][] {
    let res: number[][] = []

    function bt(i: number, nMap: any, sum: number) {
        if (i in [...nMap.keys()] || sum > target) return

        if (sum == target) {
            res.push([...nMap.values()]);
            return;
        }

        for (let index = i; index < candidates.length; index++) {
            if (sum + candidates[index] > target) continue;

            nMap.set(i, candidates[index])

            let numbSum = [...nMap.values()].reduce((s: number, n: any) => { return s + n }, 0)
            bt(index, nMap, numbSum)

            nMap.delete(i);
        }
    }

    bt(0, new Map(), 0);

    return res;
};


// ==================================
// test
//

const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
const target = 15

console.log(combinationSum2(candidates, target))
console.log('end')


export default {};