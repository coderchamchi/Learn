package DataStructureAndAlgorithm_Basic;

import java.util.HashMap;
import java.util.Map;

public class number9_Map { // gia tri theo kieu key_value, value co the giong nhung ma key thi khong!
    public static void main(String[] args){
        Map<Integer, String> map = new HashMap<>();
        map.put(1,"one");
        map.put(2,"two");
        map.put(3,"three");
        map.put(1,"one");
        System.out.println(map.size());
        for (var i : map.entrySet()){// phai .entrySet la vi map khong phai la mot iterable method (phuong thuc lap lai), nen phai dung entryset de tra ve thanh set
            System.out.println(i.getKey() + " : " + i.getValue());
        }
    }
}
