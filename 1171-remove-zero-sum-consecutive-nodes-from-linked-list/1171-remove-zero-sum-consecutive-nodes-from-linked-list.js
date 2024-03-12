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
var removeZeroSumSublists = function(head) {
    let front = new ListNode(0, head)
    let current = front
    let prefixSum = 0
    let prefixSumToNode = new Map()
    prefixSumToNode.set(0,front)
    
    while (current) {
        prefixSum += current.val
        prefixSumToNode.set(prefixSum, current)
        current = current.next
    }
    
    prefixSum = 0
    current = front
    
    while (current) {
        prefixSum += current.val
        current.next = prefixSumToNode.get(prefixSum).next
        current = current.next
    }
 
    return front.next    
}
    
    
//     let front = new ListNode(0)
//     front.next = head
//     let start = front
//     while (start) {
//         let prefixSum = 0
//         let end = start.next
        
//         while (end) {
//             prefixSum += end.val
//             if (prefixSum === 0) {
//                 start.next = end.next
//             }
//             end = end.next
//         }
        
//         start = start.next
//     }
//     return front.next
// };