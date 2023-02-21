/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null;
    else if (!list1) return list2;
    else if (!list2) return list1;

    let head: ListNode;
    if (list1.val <= list2.val) {
        head = list1;
        list1 = list1.next;

    } else {
        head = list2;
        list2 = list2.next;
    }

    let node: any = head;
    while (list1 != null || list2 != null) {
        let value: number;
        if (list1 && list2) {
            if (list1.val > list2.val) {
                value = list2.val;
                list2 = list2.next;
            } else {
                value = list1.val;
                list1 = list1.next;
            }
        } else if (list1 == null && list2) {
            value = list2.val;
            list2 = list2.next;
        } else if (list2 == null && list1) {
            value = list1.val;
            list1 = list1.next;
        } else {
            value = 0
        }

        node.next = new ListNode(value);
        node = node.next;
    }

    return head;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

let node: any = null;
let result: any = [[], []];

// 生成链表
for (let v of list1) {
    let linkNode = new ListNode();
    linkNode.val = v;
    result[0].push(linkNode);

    if (node && !node.next) {
        node.next = linkNode;
    }
    node = linkNode;
}
node = null;
for (let v of list2) {
    let linkNode = new ListNode();
    linkNode.val = v;
    result[1].push(linkNode);

    if (node && !node.next) {
        node.next = linkNode;
    }
    node = linkNode;
}
// console.log(result);

let head1 = result[0][0];
let head2 = result[1][0];
console.log(mergeTwoLists(head1, head2));


export default {};