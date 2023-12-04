package DI_IOC;

public class Main
{
    public static void main(String[] args)
    {
        DongCoTrungQuoc dongCoTrungQuoc = new DongCoTrungQuoc();
        DongcoMy dongCoMy = new DongcoMy();
        Xemay xemay = new Xemay(dongCoTrungQuoc);
        xemay.getdongco().NoMay();
        DongCoXeTang dongCoXeTang = new DongCoXeTang();
        xetang xetang = new xetang(dongCoXeTang);
        xetang.getdongco().NoMay();
    }
}
