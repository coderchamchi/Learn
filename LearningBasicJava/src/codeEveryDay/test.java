package codeEveryDay;

import java.util.ArrayList;
import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Double> arrayList = new ArrayList();
        while (true) {
            System.out.print("nhap vao mot so");
            double input = scanner.nextDouble();
            arrayList.add(input);
//            scanner.nextLine();
            System.out.print("continue?");
            String option = scanner.nextLine();
            if (option.equals("N") || option.equals("n")) {
                break;
            }
        }
        System.out.println("array" + arrayList);
    }
}
