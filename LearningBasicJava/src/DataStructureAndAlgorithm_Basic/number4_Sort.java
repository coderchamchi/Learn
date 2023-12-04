package DataStructureAndAlgorithm_Basic;

import java.util.*;

public class number4_Sort {
    public static void main(String[] args){
//        int[] nums = {1,4,3,2};
//        Arrays.sort(nums); //sort nay la cua arrays define
//        for(int i: nums){
//            System.out.println(i);
//        }
//        System.exit(0);

        List<Integer> list = new ArrayList<>(List.of(1,4,3,2));
        //thay vi phai list.add() thi su dung method is defined List.of cua interface List SP luon cho nhanh
        Collections.sort(list); //sort nay la cua arrays define
        System.out.println(list);
    }
}
