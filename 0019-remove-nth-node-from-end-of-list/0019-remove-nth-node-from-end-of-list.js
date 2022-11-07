/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curNode = head
    let listLen = 1
    while (curNode.next) {
        listLen++
        curNode = curNode.next
    }
    let nodeToRemove = listLen - n + 1
    let nodeCtr = 1
    curNode = head
    if (!curNode.next) {
        head = null
    } else if (nodeCtr === nodeToRemove) {
        curNode.val = curNode.next.val
        curNode.next = curNode.next.next
    } else {
        while (curNode.next) {
            if (nodeCtr + 1 === nodeToRemove) {
                curNode.next = curNode.next.next
                break
            } 
            curNode = curNode.next
            nodeCtr++   
        }        
    }

    return head
    
};