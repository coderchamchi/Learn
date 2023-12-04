package P4P.practicewithDI;

public class Main
{
    public static void main(String[] args)
    {
        mercesdes xe2 = new mercesdes();
        lamborghini xe3 = new lamborghini();
        tayduaf1 huynam = new tayduaf1(xe3);
        huynam.setCarr(new ferrari());
        huynam.getCarr().drive();
        huynam.getCarr().push();
        huynam.getCarr().stop();
//        tayduaf1 huyhoang = new tayduaf1(xe2);
//        huynam.getCarr().drive();
//        huynam.getCarr().stop();

    }
}
