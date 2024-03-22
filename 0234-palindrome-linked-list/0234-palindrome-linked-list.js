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
    let val = ''
    let curNode = head
    
    while (curNode) {
        val += curNode.val
        curNode = curNode.next
    }
    let half1 = val.slice(0, Math.floor(val.length/2))
    let half2 = val.slice(Math.ceil(val.length/2), val.length).split('').reverse().join('')
    
    return half1 === half2
};