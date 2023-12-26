package codeEveryDay;

public class recursion {
    public static void main (String [] args){
        int number = 3;
        int rs = giaithua(number);
        System.out.println(rs);

    }
    public static int giaithua(int n){
        if (n == 0){
            return 1;
        }
        return n * giaithua(n-1);
    }
}
