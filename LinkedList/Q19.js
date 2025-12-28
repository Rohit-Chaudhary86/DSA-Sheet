// Q  19. Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    // move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // if fast is null, remove head
    if (fast === null) {
        return head.next;
    }

    // move both pointers
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // delete node
    slow.next = slow.next.next;

    return head;
};
