class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3: any = new ListNode(0, null);
    let listNodeItem: ListNode = l3;

    while (true) {
        let curNumb: number = 0;
        if (l1 && l1.val) curNumb += l1.val;
        if (l2 && l2.val) curNumb += l2.val;
        if (listNodeItem.val) curNumb += listNodeItem.val;

        if (curNumb > 9) {
            curNumb = curNumb % 10;
            listNodeItem.val = curNumb;
            listNodeItem.next = new ListNode(1, null);
        } else {
            listNodeItem.val = curNumb;
        }

        if (listNodeItem.next == null) {
            if ((l1 && l1.next != null) || (l2 && l2.next != null)) {
                listNodeItem.next = new ListNode(0, null)
            } else break;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        listNodeItem = listNodeItem.next;
    }
    return l3;
};


// ==================================
// test 通过  32%  49%
// test end
// ==================================

export default { addTwoNumbers };