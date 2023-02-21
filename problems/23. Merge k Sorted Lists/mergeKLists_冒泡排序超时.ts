class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 拼起来 冒泡排序
    if (lists.length == 0) return null;

    // 先把数组中的 link接起来
    let newLink: ListNode | null = null;
    let curLink: ListNode | null = null;
    // let count = 0; // 链表总长度
    lists.forEach((link) => {
        if (!newLink) newLink = link;
        if (curLink) curLink.next = link;
        while (link) {
            link = link.next;
            // count += 1;
            if (link && link.next == null) {
                curLink = link;
            }
        }
    })

    if (newLink) {
        let curItem: ListNode | null = newLink;
        let nextItem: ListNode | null = null;
        let prevItem: ListNode | null = null;

        let flag = true;

        while (flag) {
            curItem = newLink;
            nextItem = (<ListNode>curItem).next;

            while (curItem) {
                if (nextItem && nextItem.val < (<ListNode>curItem).val) {
                    if (!prevItem) { newLink = nextItem; }
                    else { prevItem.next = nextItem }
                    prevItem = nextItem;
                    (<ListNode>curItem).next = nextItem.next;
                    nextItem.next = curItem;
                    break;
                } else {
                    prevItem = curItem;
                    nextItem = (<ListNode>nextItem)?.next;
                    curItem = (<ListNode>curItem).next;
                }

                if (nextItem == null) flag = false;
            }
        }
    }

    return newLink;
};


// ===============================================================
// test
// 
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

const lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
// const lists = [[], [-1, 5, 11], [], [6, 10]];
const links: any = [];

lists.forEach((item, index) => {
    let curLink = createLink(item);
    links.push(curLink);
});

console.log(mergeKLists(links));

console.log('done');
console.log('end');

export default {} 