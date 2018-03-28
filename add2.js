/*
给定两个非空链表来代表两个非负数，位数按照逆序方式存储，它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var nodeHead = new ListNode(null);
    var p = nodeHead;
    var carry = 0;

    var addNode = function(source, target) {
        source.next = target;
    }

    while(l1 || l2 || carry) {
        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        addNode(p, new ListNode(sum % 10));
        p = p.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    };

    console.log(nodeHead.next);

};

var l1 = {
    val: 7,
    next: {
        val: 4,
        next: null
    }
};

var l2 = {
    val: 5,
    next: {
        val: 2,
        next: null
    }
};

addTwoNumbers(l1, l2);