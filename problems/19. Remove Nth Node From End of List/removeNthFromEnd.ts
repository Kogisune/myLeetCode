class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return head;

    let count: number = 1;
    let node: ListNode | null = head;

    while (node && node.next != null) {
        count += 1;
        node = node.next;
    }

    let prev = null;
    let targetIndex = count - n;
    for (let i = 0; i <= targetIndex; i++) {
        if (!i) {
            node = head;
        } else {
            prev = node
            node = node ? node.next : null
        }
    }

    if (node) {
        if (prev && node.next) {
            prev.next = node.next
        } else if (!prev) {
            head = node.next;
        } else if (!node.next) {
            prev.next = null
        }
    }

    return head;
};



function test_removeNthFromEnd() {


    let result: ListNode[] = [];

    // let test = [1, 2, 3, 4, 5];
    let test = [1, 2];
    let node: any = null;

    // 生成链表
    for (let v of test) {
        let linkNode = new ListNode();
        linkNode.val = v;
        result.push(linkNode);

        if (node && !node.next) {
            node.next = linkNode;
        }
        node = linkNode;
    }

    // console.log(result);

    console.log(removeNthFromEnd(result[0], 1));
}

export default {};