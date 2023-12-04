package DataStructureAndAlgorithm_Basic;

public class number1_Array {
    public static void main(String[] args){
        int[] nums = {1,2,3,4}; //khai bao mang tinh
//        System.out.println(Arrays.toString(nums)); //vi mang tinh nen phai .tostring thi moi in duoc con mang dong duoc SP nen 0 can
//        System.exit(0);
        for(int i = 0; i< nums.length;i++){
            nums[i] = i+2;
        }
        for (int i : nums){
        System.out.println(i);
        }
        System.exit(0);
        int[] nums2 = new int[3]; //khai bao mang dong
        for (int i : nums2){
            System.out.println(i);
        }
        System.out.println("do anything !!");
        for(int i = 0; i< nums2.length;i++){
            nums2[i] = i+1;
        }
        for (int i : nums2){
        System.out.println(i);}
    }
}
