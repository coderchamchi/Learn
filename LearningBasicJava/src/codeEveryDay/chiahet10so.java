package codeEveryDay;


import java.util.Scanner;

public class chiahet10so {
    public static StringBuilder stringBuilder = new StringBuilder();
    public static void main(String[] args)
    {
        System.out.println("nhap mot so:");
        Scanner scanner = new Scanner(System.in);
        int numIn = scanner.nextInt();
        for (int i = 10; i<= numIn; i++){
            division(i);
        }
        printStringbuilder(stringBuilder);
    }
    public static void printStringbuilder(StringBuilder stringBuilder){
        int len = stringBuilder.length();
        if (len == 0){
            System.out.println("nhap so to hon di");
        }
        System.out.println(stringBuilder);
    }

    public static void division(int i){
        int count = 0;
        for (int number = 1; number <= 10; number++) {
            if (i % number == 0) {
                count += 1;
            }
            if (count == 10) {
                stringBuilder.append(i).append(' ');
            }
        }
    }
}
