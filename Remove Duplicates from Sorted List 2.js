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
    let nodePointer = head , previousNode=head; 
    let flag = false;
    
    if(head && head.next && head.val == head.next.val)
        flag= true

    while (nodePointer !== null && nodePointer.next !== null) {
          if( nodePointer.val == nodePointer.next.val  ) {
              let removed = nodePointer.val;
              while(nodePointer && removed == nodePointer.val  ) {
                  previousNode.next = nodePointer.next;
                  nodePointer =  nodePointer.next;
              }                      
               continue;
             }
            previousNode = nodePointer;
            nodePointer = nodePointer.next; 
         }
    
    if (flag)
        return head.next
    return head
};
