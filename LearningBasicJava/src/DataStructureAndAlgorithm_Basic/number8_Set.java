package DataStructureAndAlgorithm_Basic;

import java.util.HashSet;
import java.util.Set;

public class number8_Set {//la mot tap hop ma khong co phan tu nao giong nhau het
    public static void main(String[] args){
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(1);// se khong add duoc vi phan tu duoc them nay giong voi phan tu duoc them au tien roi
        for (int i : set){
            System.out.println(i);
        }
    }
}
