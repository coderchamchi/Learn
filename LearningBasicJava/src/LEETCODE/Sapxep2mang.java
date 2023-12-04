package LEETCODE;

public class Sapxep2mang {
    public static void main(String[] args){
        int[] nums1 = {2,3,4,5,0,0,0};
        int[] nums2 = {3,0,6};
        merge(nums1,4,nums2);
        int x = 0;
        for (int i : nums1){
            System.out.println("So thu "+ x +" la: "+i);
            x++;
        }
    }
    private static void merge(int[] n1, int m, int[] n2){
        for(int ai : n2)
        {
            chenphantuvaomang(ai, n1, m);
                m++;
        }
    }
    private static void chenphantuvaomang(int x, int[] a, int m){
        boolean timduocK = false;
        for (int k = 0; k < m; k++){
            if(a[k] > x) {
                timduocK = true;
                for (int i = m - 1; i >= k; i--) {
                    a[i + 1] = a[i];
                }
                a[k]=x;
                break;
            }
        }
        if (timduocK == false){
            a[m] = x;
        }
    }

}
