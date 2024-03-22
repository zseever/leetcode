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
var reverseList = function(head) {
    let prev = null
    let curNode = head
    
    while (curNode) {
        let temp = curNode.next
        curNode.next = prev
        prev = curNode
        curNode = temp       
    }
    
    return prev
    
    
};