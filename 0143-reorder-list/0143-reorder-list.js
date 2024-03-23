/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // fast and slow to determine halfway point
    // reverse second half
    // with the two lists, insert the reversed lists nodes in at every other value starting after index 0
    let fast = head
    let slow = head
    let temp
    let prev = null
    
    while (fast && fast.next) {
        if (!fast.next.next) {
            fast = fast.next
        } else {
            fast = fast.next.next  
            slow = slow.next
        }
    }
    
    let mid = slow.next
    slow.next = null
    
    while (mid) {
        temp = mid.next
        mid.next = prev
        prev = mid
        mid = temp
    }
    
    let counter = 1
    let curr = head
    let newNode = curr
    curr = curr.next
    
    while (prev || curr) {
        if (counter % 2 !== 0 || !curr) {
            newNode.next = prev
            newNode = newNode.next
            prev = prev.next
            counter++
        } else {
            newNode.next = curr
            newNode = newNode.next
            curr = curr.next
            counter++
        }
    }
    return newNode
};