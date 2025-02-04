function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(null);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }

    return dummy.next;
}
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
