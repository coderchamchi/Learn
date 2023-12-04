package DataStructureAndAlgorithm_Basic;

import java.util.Stack;

public class number6_Stack { //stack la ngan xep_ vao cuoi ra dau ~ last in first out
    public static void main(String[] args){
        Stack<Integer> stack = new Stack<>();
        stack.add(1);
        stack.add(2);
        stack.add(3);
        while (!stack.empty()){
            System.out.println("Xoa tung phan tu theo thu tu: " + stack.peek());
            //.peek de lay phan tu duoc them sau cung, cuoi cung trong stack
            stack.pop(); //Lay phan tu cuoi cung va day phan tu do ra khoi Stack
        }
    }
}
