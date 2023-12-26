package LEETCODE;

public class FindNumberswithEvenNumberofDigits {
    public static void main(String[] args){

        StringBuilder stringBuilder = new StringBuilder();
        int[] numsinput = {1,22,44,333};
        System.out.println(findnumber(numsinput));
    }
    public static int findnumber(int[] nums){
        int biendem = 0;
        for (int i: nums){
            if (isChan(i))
            {
                biendem++;
            }
        }
        return biendem;
    }

    public static boolean isChan(int number) {
        int count = 0;
        while(number != 0){
            number = number/10;
            count++;
        }
        if (count %2 ==0){
            return true;
        }
        return false;

    }
}





