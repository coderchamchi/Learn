package DataStructureAndAlgorithm_Advanced;

public class BubbleSort {
    public static void main(String[] args){
        int[] myArray = {99, 88, 55, 77, 1, 66};

        printArray(myArray); // in ra mảng hiện tại
        bubblesort(myArray); // in ra mảng sau khi sắp xếp nổi bọt
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
     * Sắp xếp mảng theo kiểu Bubble sort
     * @param x mảng được sắp xếp
     */
    public static void bubblesort(int[] x ){
        int len = x.length;

        for (int i = 0; i < len; i++){
            for (int j = 0; j < len - 1 - i; j++){
                if(x[j] > x[j + 1]){
                    int temp = x[j];
                    x[j] = x[j + 1];
                    x[j + 1] = temp;
                }
            }
        }
        printArray(x);
    }
}
