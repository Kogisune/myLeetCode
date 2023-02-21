class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let count: number = 1;
    let curNode: ListNode | null = head;
    let nextNode: ListNode | null = head.next;
    let prevNode: ListNode | null = null;
    while (nextNode) {
        // 交换 Node
        if (count % 2) {
            // count为奇数时 交换顺序
            if (!prevNode) { head = nextNode; }
            else { prevNode.next = nextNode }
            prevNode = nextNode;
            (<ListNode>curNode).next = nextNode.next;
            prevNode.next = curNode;
            nextNode = (<ListNode>curNode).next
        } else {
            // 往后偏移  
            if (prevNode) prevNode = prevNode.next;
            curNode = (<ListNode>curNode).next;
            nextNode = nextNode.next;
        }

        count += 1;
        // if (count > 50) { debugger };
    }
    return head;
};

// ==================================
// test

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

const test = [1, 2, 3, 4, 5, 6, 7];
const testLink = createLink(test);

console.log(testLink);
swapPairs(testLink);

export default {}