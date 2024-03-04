/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    while(headA) {
        set.add(headA);
        headA = headA.next;
    }
    while(headB) {
        if(set.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
    // let seen = {}
    // let curNode = headA
    // console.log(headA)
    // console.log(headB)
    // while (curNode) {
    //     seen[curNode.val] = curNode
    //     curNode = curNode.next
    // }
    // curNode = headB
    // while (curNode) {
    //     if (seen[curNode.val] === curNode) {
    //         return curNode
    //     }
    //     curNode = curNode.next
    // }
    // return null
};