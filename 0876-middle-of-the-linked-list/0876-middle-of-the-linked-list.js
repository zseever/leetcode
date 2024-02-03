/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node = head
    let length = 1
    while (node.next) {
        length++
        node = node.next
    }
    let midpoint = (length % 2 === 0) ? length/2 + 1 : Math.ceil(length/2)
    let curNode = 1
    node = head
    while (node.next) {
        if (curNode === midpoint) {
            break
        }
        node = node.next
        curNode++
        
    }
    return node
};