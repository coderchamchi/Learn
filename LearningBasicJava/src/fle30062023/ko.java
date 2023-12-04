//package fle30062023;
//
//import java.util.ArrayList;
//import java.util.HashSet;
//import java.util.Scanner;
//
//public class ko {
//    public static void main(String[] args)
//    {
//        ArrayList<Integer> numbers = new ArrayList<>();
//        for (int i = 0; i <= 10; i++)
//        {
//            numbers.add(i);
//        }
//        System.out.println(numbers);
//        Scanner sc = new Scanner(System.in);
//        int a = sc.nextInt();
//        try
//        {
//            System.out.println(numbers.indexOf(a)); // chỗ này ko thể in ra cái dưới catch được đâu vì né indexof mà
//                                                        // không tìm ra vị trí thì hắn đều trả về -1
//        }
//        catch (Exception exception)
//        {
//            System.out.println("it's not in here");
//
//        }
//    }
//}
//
