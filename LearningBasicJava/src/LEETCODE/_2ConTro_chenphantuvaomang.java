package LEETCODE;

public class _2ConTro_chenphantuvaomang {
    public static void main(String[] args){
        int[] n1 = {6,5,4,0,0,0};
        int[] n2 = {1,2,3};
        merge(n1,3,n2,3);
        for(int i: n1){
            System.out.println(i);
        }
        System.out.println("done");
    }
    public static void merge(int[] n1, int m, int[] n2, int n){
        int i = m-1;
        int j = n-1;
        int k = m+n-1;
        while(k >= 0){
            if(j < 0){
                n1[k] = n1[i];
                i--;
            }
            else if (i < 0){
                n1[k] = n2[j];
                j--;
            }
            else if(n1[i] > n2[j]){
                n1[k] = n1[i];
                i--;    // i-- là vì ở đây lấy ra được một th max rồi, trừ nó ra để lấy những số còn lại so sánh thôi
                        // nếu không trừ thì chắc chắn ra một chuỗi toàn là số n1[i]
            }
            else{
                n1[k] = n2[j];
                j--;
            }
            k--;
        }
    }
}
