//package file01072023;
//
//import java.io.File;
//import java.io.FileWriter;
//import java.io.IOException;
//
//public class JavaFiles
//{
//    public static void main(String[] args)
//    {
//        try
//        {
//            File myObj = new File("D:\\INTERN_TMA\\sourecode_Java\\Folder4File\\huynam.txt");
//            if (myObj.createNewFile())
//            {
//                System.out.println("File created: " + myObj.getName());
//                FileWriter myWriter = new FileWriter("D:\\INTERN_TMA\\sourecode_Java\\Folder4File\\huynam.txt");
//                myWriter.write("write in new file, which is created by java Files");
//                myWriter.close();
//                System.out.println("Successfully wrote to the file.");
//                System.out.println("Tên file: " + myObj.getName());
//                System.out.println("Thư mục: " + myObj.getParent());
//                System.out.println("Thư mục: " + myObj.getPath());
//            } else
//            {
//                System.out.println("File already exists.");
//            }
//        }
//        catch (IOException e)
//        {
//            System.out.println("An error occurred.");
//            e.printStackTrace();
//        }
//    }
//}
//
