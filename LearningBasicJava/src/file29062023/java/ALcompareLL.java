//package file29062023.java;
//import java.util.ArrayList;
//import java.util.LinkedList;
//import java.util.List;
//public class ALcompareLL
//{
//    public static void main(String[] args) {
//            int numElements = 10000;
//
//            // Sử dụng ArrayList
//            List<Integer> arrayList = new ArrayList<>();
//
//            long startTime = System.nanoTime();
//
//            // Thêm phần tử vào đầu danh sách
//            for (int i = 0; i < numElements; i++) {
//                arrayList.add(0, i);
//            }
//
//            long endTime = System.nanoTime();
//            long arrayListInsertionTime = endTime - startTime;
//            System.out.println("Thời gian thêm vào đầu ArrayList: " + arrayListInsertionTime + " nanoseconds");
//
//            startTime = System.nanoTime();
//
//            // Xóa phần tử từ đầu danh sách
//            for (int i = 0; i < numElements; i++) {
//                arrayList.remove(0);
//            }
//
//            endTime = System.nanoTime();
//            long arrayListDeletionTime = endTime - startTime;
//            System.out.println("Thời gian xóa từ đầu ArrayList: " + arrayListDeletionTime + " nanoseconds");
//
//            System.out.println("---------------------------------------");
//
//            // Sử dụng LinkedList
//            List<Integer> linkedList = new LinkedList<>();
//
//            startTime = System.nanoTime();
//
//            // Thêm phần tử vào đầu danh sách
//            for (int i = 0; i < numElements; i++) {
//                linkedList.add(0, i);
//            }
//
//            endTime = System.nanoTime();
//            long linkedListInsertionTime = endTime - startTime;
//            System.out.println("Thời gian thêm vào đầu LinkedList: " + linkedListInsertionTime + " nanoseconds");
//
//            startTime = System.nanoTime();
//
//            // Xóa phần tử từ đầu danh sách
//            for (int i = 0; i < numElements; i++) {
//                linkedList.remove(0);
//            }
//
//            endTime = System.nanoTime();
//            long linkedListDeletionTime = endTime - startTime;
//            System.out.println("Thời gian xóa từ đầu LinkedList: " + linkedListDeletionTime + " nanoseconds");
//        }
//    }
//
//
