package LEETCODE;

import java.util.Arrays;

public class _2ConTro_xoaphantutrongmang {
    public static void main(String[] args){
        int[] nums = {1,2,3,4,5,4,8};
        Arrays.sort(nums);
        int lennums = nums.length;
        int x = 4;
        int k = 0;
        for (int i = 0; i < lennums; i++){
            if (nums[i] != x){
                nums[k] = nums[i];
                k++;
            }
        }
        for(int i = 0; i < k; i++){
            System.out.println(nums[i]);
        }
        System.out.println("Check VAR!");
        for(int i=0; i<lennums;i++){
            System.out.println(nums[i]);
        }
    }
}
