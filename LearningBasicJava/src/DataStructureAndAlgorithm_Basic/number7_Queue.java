package DataStructureAndAlgorithm_Basic;

import java.util.LinkedList;
import java.util.Queue;

public class number7_Queue { //Hang doi, Queue nguoc lai so voi Stack, vao truoc ra truoc, sau ra sau
    public static void main(String[] args){
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        while (!queue.isEmpty()){
            System.out.println("Xoa tung phan tu theo thu tu: " + queue.peek());
            //.peek de lay phan tu duoc them sau cung, cuoi cung trong stack
            queue.remove(); //Lay phan tu cuoi cung va day phan tu do ra khoi Stack
        }
    }
}
