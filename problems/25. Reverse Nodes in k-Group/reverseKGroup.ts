class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let node: ListNode | null = head;
    let container: number[] = [];
    while (node) {
        container.push(node.val);
        node = node.next;
    }

    let tmpArr: number[][] = [];
    while (container.length >= k) {
        tmpArr.push(container.splice(0, k).reverse());
    }
    if (container.length > 0) {
        tmpArr.push(container);
    }

    console.log(tmpArr);

    return createLink(tmpArr.flat());
};

// 生成链表
function createLink(arr: number[]): ListNode | null {
    if (arr.length < 1) return null;

    let link: ListNode | null = null;
    let curNode: ListNode | null = null;
    for (let i = 0; i < arr.length; i++) {
        const node = new ListNode();
        node.val = arr[i];
        if (i == 0) {
            curNode = node;
            link = curNode;
        } else if (i && curNode) {
            curNode.next = node;
            curNode = node;
        } else {
            throw new Error('创建链表失败');
        }
    }
    return link ? link : null;
}


// ==================================
// test

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
const testArr = [1, 2, 3];
const testK = 3;

const testLink = createLink(testArr);
console.log(reverseKGroup(testLink, testK));

export default {};