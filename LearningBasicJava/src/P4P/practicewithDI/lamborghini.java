package P4P.practicewithDI;

public class lamborghini implements car
{
    @Override
    public void drive()
    {
        System.out.println("Đang lái lambor chất lừ!");
    }
    @Override
    public void stop(){
        System.out.println("Đã dừng lái lambor!");
    }
    @Override
    public void push(){
        System.out.println("Đã tăng tốc !");
    }
}
