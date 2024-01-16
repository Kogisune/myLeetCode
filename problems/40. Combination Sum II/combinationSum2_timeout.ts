function combinationSum2(candidates: number[], target: number): number[][] {
    let res = new Set()
    candidates = candidates.sort((a, b) => { return a - b });

    function dfs(nMap: any, idx: number) {
        let sum = [...nMap.values()].reduce((s: number, n: any) => { return s + n }, 0)

        if (sum == target) {
            let newRes = [...nMap.values()]
            console.log('new:', newRes)
            console.log(nMap.keys())
            // console.log('\n')

            res.add(newRes.join('-'));
            return;
        }

        if (sum > target) return -1;

        for (let i = idx; i < candidates.length; i++) {
            if (nMap.has(i)) { continue }
            nMap.set(i, candidates[i]);

            let next = dfs(nMap, i);

            if (next === -1) {
                nMap.delete(i);
                break;
            }

            nMap.delete(i);
        }
    }

    dfs(new Map(), 0);

    let strRes: any = [...res.values()]

    return strRes.map((v: string) => {
        return v.split('-').map((n: string) => { return Number(n) });
    });
};


// ==================================
// test
//

// const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
// const target = 15

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2(candidates, target))
console.log('end')


export default {}; 