package DataStructureAndAlgorithm_Basic;

public class number3_String {
    public static void main(String[] args){
    String string = "hello world"; //doi voi string trong java thi khong the nao sua string duoc
    String output = "";
    StringBuilder stringBuilder = new StringBuilder("Ket qua: ");

    for (int i = 0;i < string.length();i++){
        System.out.println(string.charAt(i));//charAt de in tung phan tu theo so index i
        if(i%2 == 0){
            output = output + string.charAt(i);
        }
    }
    System.out.println(stringBuilder.append(output));
    }
}
