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
var deleteDuplicates = function(head) {
    if (!head) {
        return head
    }
    let node = head
    
    // console.log(node)
    // console.log(node.val)
    // console.log(node.next)
    // console.log(node.next.val)
    // console.log(node.next.next)
    // console.log(node.next.next.val)
    // console.log(node.next.next.next)
    
    while (node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head
};