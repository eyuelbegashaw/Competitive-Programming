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
     let nodePointer = head , previousNode = null, next;
     while(nodePointer) {
       next = nodePointer.next;
       nodePointer.next = previousNode;
       previousNode = nodePointer;
       nodePointer= next

     }
    return previousNode
         
};
