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
var deleteMiddle = function(head) {
    if (!head.next) return null
    let slowNode = head
    let fastNode = head
    let prevSlow = {val: null, next: head}
    
    while (fastNode && fastNode.next) {
        prevSlow = slowNode
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    }
    
    prevSlow.next = slowNode.next
    
    return head
};