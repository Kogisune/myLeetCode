class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 用数组转换
    if (lists.length == 0) return null;
    let container: number[] = [];
    lists.forEach((link) => {
        let count = 0;
        while (link) {
            container.push(link.val);
            link = link.next;
            count += 1;
        }
    })
    return container.length > 0 ? createLink(xier(container)) : null;
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

// 希尔排序算法
function xier(arr: number[] = []) {
    var interval = Math.floor(arr.length / 2);//分组间隔设置
    while (interval > 0) {
        for (var i = 0; i < arr.length; i++) {
            var n = i;
            while (arr[n] < arr[n - interval] && n > 0) {
                var temp = arr[n];
                arr[n] = arr[n - interval];
                arr[n - interval] = temp;
                n = n - interval;
            }
        }
        interval = Math.floor(interval / 2);
    }
    return arr;
}

// test
// const lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
const lists = [[], [-1, 5, 11], [], [6, 10]];
const links: any = [];

lists.forEach((item, index) => {
    let curLink = createLink(item);
    links.push(curLink);
});

console.log(mergeKLists(links));

console.log('done');
console.log('end');

export default {} 