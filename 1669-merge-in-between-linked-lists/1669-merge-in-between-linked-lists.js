/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // variable to store the node that comes before "a" = a-1 node
    // variable to store the node that comes after "b" = b.next
    // set a-1 node.next = list2 head node
    // set list2 tail node.next = b.next 
    // also need a counter to keep track of which node we are at (head node being 0 index)
    // 
    let counter = 0;
    let prevNode;
    let postNode;
    let curNode = list1
    while (counter < b+1) {
        if (counter === a-1) {
            prevNode = curNode
        } else if (counter === b) {
            postNode = curNode.next
        }        
        curNode = curNode.next
        counter++
    }
    prevNode.next = list2
    curNode = list2
    while (curNode.next) {
        curNode = curNode.next
    }
    curNode.next = postNode
    return list1
};