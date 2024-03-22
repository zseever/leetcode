/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    let prev
    let temp
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    prev = slow
    slow = slow.next
    prev.next = null
    
    while (slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    
    fast = head
    slow = prev
    
    while (slow) {
        if (fast.val !== slow.val) return false
        
        slow = slow.next
        fast = fast.next
    }
    
    return true
    
//     let val = ''
//     let curNode = head
    
//     while (curNode) {
//         val += curNode.val
//         curNode = curNode.next
//     }
//     let half1 = val.slice(0, Math.floor(val.length/2))
//     let half2 = val.slice(Math.ceil(val.length/2), val.length).split('').reverse().join('')
    
//     return half1 === half2
};