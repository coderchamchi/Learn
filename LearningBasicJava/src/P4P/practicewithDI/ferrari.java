package P4P.practicewithDI;

public class ferrari implements car{
    @Override
    public void drive()
    {
        System.out.println("Đang lái ferrari!");
    }
    @Override
    public void stop(){
        System.out.println("Đã dừng lái ferrari!");
    }
    @Override
    public void push(){
        System.out.println("Đã tăng tốc !");
    }
}
