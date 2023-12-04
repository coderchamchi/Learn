//package file29062023.java;
//
//import java.util.ArrayList;
//import java.util.LinkedList;
//
//public class LinkedListt {
//    public static void main(String[] args) {
//        // Sử dụng ArrayList
//        ArrayList<Integer> arrayList = new ArrayList<>();
//
//        // Thời gian thêm và xóa ở cuối danh sách
//        long startTime = System.nanoTime();
//        for (int i = 0; i < 100000; i++) {
//            arrayList.add(i);
//        }
//        long endTime = System.nanoTime();
//        long durationArrayListAdd = endTime - startTime;
//
//        startTime = System.nanoTime();
//        for (int i = 99999; i >= 0; i--) {
//            arrayList.remove(i);
//        }
//        endTime = System.nanoTime();
//        long durationArrayListRemove = endTime - startTime;
//
//        // Sử dụng LinkedList
//        LinkedList<Integer> linkedList = new LinkedList<>();
//
//        // Thời gian thêm và xóa ở cuối danh sách
//        startTime = System.nanoTime();
//        for (int i = 0; i < 100000; i++) {
//            linkedList.add(i);
//        }
//        endTime = System.nanoTime();
//        long durationLinkedListAdd = endTime - startTime;
//
//        startTime = System.nanoTime();
//        for (int i = 99999; i >= 0; i--) {
//            linkedList.remove(i);
//        }
//        endTime = System.nanoTime();
//        long durationLinkedListRemove = endTime - startTime;
//
//        // In kết quả
//        System.out.println("Thời gian thêm 100,000 phần tử ở cuối danh sách:");
//        System.out.println("ArrayList: " + durationArrayListAdd + " nanoseconds");
//        System.out.println("LinkedList: " + durationLinkedListAdd + " nanoseconds");
//
//        System.out.println("Thời gian xóa 100,000 phần tử ở cuối danh sách:");
//        System.out.println("ArrayList: " + durationArrayListRemove + " nanoseconds");
//        System.out.println("LinkedList: " + durationLinkedListRemove + " nanoseconds");
//    }
//}
