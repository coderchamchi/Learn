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
            chenphantuvaomang(ai, n1, m); //ai là số được lấy từ từng phần tử trong mảng n2, n1 là mảng để đối chiếu so sánh
                m++; //sau khi chèn được thêm một th rồi là m tăng thêm 1 đơn vị
        }
    }
    private static void chenphantuvaomang(int x, int[] a, int m){
        boolean timduocK = false;
        for (int k = 0; k < m; k++){
            if(a[k] > x) {
                timduocK = true;
                // khi tìm được vị trí k thỏa mãn thì đẩy các số từ vị trí k đó về sau 1 đơn vị
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
