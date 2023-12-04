package P4P;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class mainn
{

    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            String dateinput = sc.nextLine();
            String stringdate = dateinput.toString();
            String stringdate2 = String.valueOf(dateinput);
            System.out.println(stringdate);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate date = LocalDate.parse(stringdate, formatter);
            LocalDate date2 = LocalDate.parse(stringdate2, formatter);
            System.out.println("Parsed date: " + date);
            System.out.println("Parsed date: " + date2);


        }

        catch (Exception e){
            System.out.println(e.toString());
        }
        finally {
            String dateString = "2023-06-12";
            LocalDate date = LocalDate.parse(dateString);
            System.out.println("Parsed date: " + date);
        }
    }
}

//Kế thừa
//public class mainn
//{
//    public static void main(String [] args){
//        RMidiLondon rMidiLondon = new RMidiLondon
//                (1,"silver",1.2f,"Việt Nam","silver original",4f, 0.5f);
//        rMidiLondon.getinfoRMidiLondon();
//    }
//}

////Đóng gói
////public class mainn
////{
////    public static void main(String [] args){
////        abc abc = new abc();
////        abc.idd = 2 ;
////        abc.setId(2) ;
////        abc.color = "silver";
////        abc.price = 1f;
////        abc.print();
////
////    }
////}
//
////Đa hình
//public class mainn
//{
//    public static void main(String [] args){
//        RMidiVietnam rMidiVietnam = new RMidiVietnam(1,"silver",1.2f,"Việt Nam","silver original",4f, 0.5f);
//        rMidiVietnam.getinfoRMidiLondon();
//    }
//}
//
////public class mainn {
////    public static void main(String [] args){
////        jewelry jewelry = new jewelry("red", 4.5f, "Việt Nam", "silver");
////        jewelry.getinfo();
////    }
////}
