package codeEveryDay;

import java.util.Scanner;

public class inversionString {
    public static void main(String[] args){
//        String string = "123456";
//        int lenstr = string.length();
//        StringBuilder stringBuilder = new StringBuilder();
//        for (int i = lenstr -1; i >= 0; i--){
//            stringBuilder.append(string.charAt(i));
//        }
//        System.out.println(stringBuilder);
        int num = 123456;
        reverseNumber(num);
    }
    public static void reverseNumber(int num){
        int b = 0;
        while(num>0){
            int surplus = num % 10;
            b = b * 10 + surplus;
            num = num/10;
        }
        System.out.println(b);
    }
}
