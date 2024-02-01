package codeEveryDay;

import java.util.Scanner;

public class Distinguish_NguyenAm_PhuAm {
    public static void main(String[] args) {

        System.out.println("Chương trình bắt đầu.");

        while (true) {

            System.out.println("Nhập vào để tôi check cho nào!");

            Scanner scanner = new Scanner(System.in);
            String rs = scanner.next().toUpperCase();
            boolean check = checkVar(rs);

            if (!check){
                System.out.println("Nhập lại đi, nhập sai định dạng rồi, nhập z rồi ai check được?");
            }
            else {
                System.out.println("Chương trình kết thúc.");
                break;
            }
        }
    }


    public static boolean checkVar (String s){
        char c = s.charAt(0);
        StringBuilder stringBuilder = new StringBuilder("ký tự bạn vừa nhập là: " + c + ".");
        StringBuilder stringBuilderTrue = new StringBuilder(" Vậy nên nó là nguyên âm nhé ^^");
        StringBuilder stringBuilderFalse = new StringBuilder(" Vậy nên nó là phụ âm nhé ^^");
        if (c >= 'A' && c <= 'Z') {
            switch (c) {
                case 'U', 'E', 'O', 'A', 'I' -> System.out.println(stringBuilder.append(stringBuilderTrue));
                default -> System.out.println(stringBuilder.append(stringBuilderFalse));
            }
            return true;
        }
        else {
            return false;
        }
    }
}


