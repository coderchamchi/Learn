package DataStructureAndAlgorithm_Basic;

public class number5_Linkedlist {
    public static class ListNode{
        int val;
        ListNode next;
        ListNode (int val){
            this.val=val;
        }
    }
    public static void main(String[] args){
        ListNode n1 = new ListNode(1);
        ListNode n2 = new ListNode(2);
        ListNode n3 = new ListNode(3);

        n1.next = n2; // n1 = n1 noi them n2
        n2.next = n3; // n2 = n2 noi them n3

        System.out.println("Linkedlist: ");
        ListNode pheap = n1;
        while (pheap != null){
            System.out.println(pheap.val + " ");
            pheap = pheap.next;
        }
    }
}
