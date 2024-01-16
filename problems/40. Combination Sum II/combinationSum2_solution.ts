// Dec 20, 2023 8:29~9:02
function combinationSum2(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b)
    const answer: number[][] = []
    const stack: number[] = []

    const backtrack = (start = 0, sum = 0) => {
        if (sum === target) {
            answer.push([...stack])
            return
        }

        for (let i = start; i < nums.length; i++) {
            if (start < i && nums[i] === nums[i - 1]) continue // Skip duplicates

            if (target < sum + nums[i]) break // No need to proceed if sum exceeds target

            stack.push(nums[i])
            backtrack(i + 1, sum + nums[i])
            stack.pop()
        }
    }

    backtrack()
    return answer
}


export default {};