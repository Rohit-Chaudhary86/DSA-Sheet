//  83. Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
       let current=head;
    while(current && current.next){
        if(current.val===current.next.val){
            let ToBeRemoved=current.next;
            current.next=ToBeRemoved.next
            ToBeRemoved.next=null;
            
        }else{
            current=current.next
        }
    }
    return head   
}