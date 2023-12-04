//package file29062023.java;
//
//import java.util.ArrayList;
//import java.util.HashSet;
//import java.util.Iterator;
//
//public class hashset {
//    public static void main(String[] args) {
////
////        HashSet<Integer> numbers = new HashSet<Integer>(); //cách thêm và xoá với hashset
////        for(int i = 0; i <= 10; i++) {
////            numbers.add(i);
////        }
////        System.out.println(numbers);
////
////        ArrayList<Integer> elementsToRemove = new ArrayList<Integer>();
////        for (int i : numbers) {
////            if (i <= 5) {
////                elementsToRemove.add(i);
////            }
////        }
////        System.out.println(numbers);
////        numbers.removeAll(elementsToRemove);
////
////        System.out.println(numbers);
//
//        HashSet<Integer> numbers = new HashSet<Integer>(); //cách dùng với iterator
//        for (int i = 0; i <= 10; i++) {
//            numbers.add(i);
//        }
//        System.out.println(numbers);
//
//        Iterator<Integer> iterator = numbers.iterator();//lặp qua và lấy các phần tử có trong numbers
//        while (iterator.hasNext()) {
//            int i = iterator.next();
//            if (i <= 5) {
//                iterator.remove();
//            }
//        }
//
//        System.out.println(numbers);
//
//
////        HashSet<String> cars = new HashSet<String>();
////        cars.add("Volvo");
////        cars.add("BMW");
////        cars.add("Ford");
////        cars.add("BMW");
////        cars.add("Mazda");
////        System.out.println(cars);
////        System.out.println(cars.contains("BMW"));
////        for(String i : cars){
////            System.out.println(i);
////        }
//    }
//}