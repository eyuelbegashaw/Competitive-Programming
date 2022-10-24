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
    let nodePointer = head , next;
    
    while(nodePointer && nodePointer.next) {
         while (nodePointer.next && nodePointer.val == nodePointer.next.val)  
            nodePointer.next = nodePointer.next.next || null;
        
        nodePointer = nodePointer.next;
    }

    return head
    
};
