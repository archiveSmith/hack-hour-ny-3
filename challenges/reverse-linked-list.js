/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {

    var currentTail = head;
    var length = 1;

    while (currentTail.next) {
        currentTail = currentTail.next;
        length++;
    }


    var currentHead = head;
    var currentHeadVal = head.value;
    for (var i = 0; i < Math.floor(length/2); i++) {
        var currentTail = head;
        var count = 1;
        while(count < length - i) {
            currentTail = currentTail.next;
            count++;
        }
        currentHead.value = currentTail.value;
        currentTail.value = currentHeadVal;
        currentHead = currentHead.next;
        currentHeadVal = currentHead.value;
    }

    return head;
}


var list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

console.log(list);
console.log(reverseLinkedList(list));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
