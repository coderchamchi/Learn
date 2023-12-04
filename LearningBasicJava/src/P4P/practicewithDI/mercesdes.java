package P4P.practicewithDI;

public class mercesdes implements car
{
    @Override
    public void drive(){
        System.out.println("Đang lái mercesdes");
    }
    @Override
    public void stop()
    {
        System.out.println("Đã dừng lái mercesdes");
    }
    @Override
    public void push(){
        System.out.println("Đã tăng tốc !");
    }
}
