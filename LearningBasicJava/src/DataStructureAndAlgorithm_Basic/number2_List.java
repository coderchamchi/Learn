package DataStructureAndAlgorithm_Basic;

import java.util.ArrayList;
import java.util.List;

public class number2_List {
    public static void main(String[] args){
        List<Integer> mylist = new ArrayList<>();
        //Integer la kieu class nguyen thuy dai dien cho int
        // List<Integer> thi List o day chi la interface thoi con Arraylist<>() moi la class
        mylist.add(1);
        mylist.add(2);
        mylist.add(3);
        mylist.add(4);
        //System.out.println(mylist); //vi day la mang dong nen khong can phai Arrays.toString(mylist)
        for (int i = 0; i< mylist.size(); i++){
            System.out.println(mylist.get(i)); //doi voi mang dong thi phai dung get chu khong dung mylist[i] nhu man tinh
        }
    }

}
