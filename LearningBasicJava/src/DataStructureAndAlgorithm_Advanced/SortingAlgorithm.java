package DataStructureAndAlgorithm_Advanced;

public class SortingAlgorithm {
    public static void main(String[] args){
        int[] myArray = {1, 2, 3, 4, 6, 5};
        int[] insertionSortArr = {6, 5, 3, 1, 8, 7, 2, 4};
        int[] selectionSortArr = {15, 64, 12, 22, 11};
//        printArray(myArray); // in ra mảng hiện tại
//        bubbleSort(myArray); // in ra mảng sau khi sắp xếp nổi bọt
//        printArray(insertionSortArr);
//        insertionSort(insertionSortArr);
        printArray(selectionSortArr);
        selectionSort(selectionSortArr);
    }


    /**
     * In mảng ra màn hình
     * @param x mảng cần in
     */
    public static void printArray(int[] x){
        int len = x.length;
        for (int i = 0; i < len; i++){
            System.out.print(x[i] + " ");
        }
        System.out.println();
    }

    /**
     * Sắp xếp mảng theo kiểu sắp xếp nổi bọt
     * @param x mảng được sắp xếp
     */
    public static void bubbleSort(int[] x ){
        int len = x.length;
        for (int i = 0; i < len; i++){
            boolean isSorted = true;
            for (int j = 0; j < len - 1 - i; j++){
                // len - 1 - i là vì:
                // -1 là vì ta đang so sánh x[j] và x[j + 1] nên không -1 bị out of ....
                // sau mỗi vòng lặp ta lấy ra được 1 th max rồi nên sẽ là j + 1 < len - i
                // ==> j + 1 < len - i <==> j < len - i - 1
                if(x[j] > x[j + 1]){
                    isSorted = false;
                    int temp = x[j];
                    x[j] = x[j + 1];
                    x[j + 1] = temp;
                }
            }
            printArray(x);
            if (isSorted){
                break;
            }
        }

    }

    /**
     * Sắp xếp mảng theo kiểu chèn
     * @param x mảng được sắp xếp
     */
    public static void insertionSort(int[] x){
        int len = x.length;
        for (int i = 1; i < len; i++){ // i = 0 coi nhu day da duoc sap xep roi nen bat dau tu i = 1 luon
            int temp = x[i]; // Nhấc quân bài lên
            int j = i -1;
            while (j >= 0 && temp < x[j]){
                // So sánh quân bài được nhấc so với các con bài còn lại
                x[j+1] = x[j];
                j--;
                //printArray(x);// doan nay in de hieu ro follow code
            }
            x[j + 1] = temp;    //Chèn quân bài vào đúng vị trí cuối cùng ( j-- ) trong mảng mà vẫn lớn hơn quân bài được nhấc,
                                //Chỗ này muốn biết vì sao phải x[ j + 1 ] = temp thì in ra follow code là biết, giải thích dài, lười!
        }
        printArray(x);
    }

    /**
     * Sắp xếp mảng theo kiểu chọn
     * @param x mảng được sắp xếp
     */
    public static void selectionSort(int[] x){
        int len = x.length;
        for (int i = 0; i< len; i++){

            int minpos = i;
            // Tìm ra vị trí minpos bé nhất
            for (int j = i + 1; j < len; j++){
                if (x[j] < x[minpos]){
                    // chỗ này khá đặc biệt, thử đổi thành x[j] < x[minpos] đi xem ra 0 nhé?
                    // nếu thấy vẫn ra thì thử đổi số đầu tiên trong mảng 1 phải là số lớn nhất sẽ thấy sự khác biệt
                    minpos  = j;
                }
            }
            // Hoán vị giữa x[i] với giá trị minpos cuối cùng được tìm ra
            if (minpos != i){
                int temp = x[minpos];
                x[minpos] = x[i];
                x[i] = temp;
            }
        }
        printArray(x);
    }
}
