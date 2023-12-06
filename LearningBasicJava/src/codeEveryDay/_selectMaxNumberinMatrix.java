package codeEveryDay;

import java.util.Scanner;

public class _selectMaxNumberinMatrix {
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        System.out.print("Bạn muốn nhập bao nhiêu hàng cho ma trận cần tìm: ");
        int row = scanner.nextInt();
        System.out.print("Bạn muốn nhập bao nhiêu cột cho ma trận cần tìm: ");
        int column = scanner.nextInt();
        int[][] matrix = new int[row][column];

        getinputMatrix(matrix, row, column);
    }

    /**
     * Hàm này để nhận và in ra các giá trị mà người dùng nhập và tìm ra những giá trị lớn nhất trong ma trận
     * @param matrix ma trận mà giá trị lớn nhất cần tìm
     * @param m số hàng
     * @param n số cột
     */
    public static void getinputMatrix(int[][] matrix, int m, int n){
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < m; i++){
            for (int j = 0; j< n; j++){
                int valRow = i+1;
                int valColumn = j+1;
                System.out.println("Nhập số thứ " + valColumn + " cho hàng thứ " + valRow);
                matrix[i][j]= scanner.nextInt();
            }
        }

        printMatrix(matrix);
        getmaxInMatrix(matrix, m, n);
    }

    /**
     *  Hàm để tìm ra giá trị lớn nhất và dòng có giá trị lớn nhất trong một ma trận
     * @param matrix là ma trận cần tìm
     */
    public static void getmaxInMatrix(int[][] matrix, int m, int n){
        StringBuilder stringBuildermaxNumber = new StringBuilder("Gia tri lon nhat trong ma tran bang: ");
        StringBuilder stringBuildermaxRow = new StringBuilder("Hang co gia tri lon nhat trong ma tran la: ");

        int maxNumber = 0;
        int maxRow = 0;

        for (int i = 0; i < m; i++){
            int valRowAccumulation = 0;
            for (int j = 0; j< n; j++){
                if (matrix[i][j] > maxNumber){
                    maxNumber = matrix[i][j];
                }
                valRowAccumulation = valRowAccumulation + matrix[i][j];
            }
            if (valRowAccumulation > maxRow){
                maxRow = i+1;
            }
        }

        System.out.println(stringBuildermaxNumber.append(maxNumber));
        System.out.println(stringBuildermaxRow.append(maxRow));

    }

    /**
     * Hàm để in ra ma trận
     * @param matrix ma trận cần in
     */
    public static void printMatrix(int[][] matrix){

        for (int[] array : matrix){
            for (int i : array){
                System.out.print(i + " ");
            }
            System.out.println();
        }

    }
}
