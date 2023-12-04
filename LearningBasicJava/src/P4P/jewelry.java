package P4P;

public class jewelry
{
    String color;
    float price;
    String madein;
    String materials;
    public jewelry(String color, float price, String madein, String materials){
        this.color=color;
        this.price=price;
        this.madein=madein;
        this.materials=materials;
    }
    public void getinfo(){
        System.out.println("color: "+ color);
        System.out.println("price: "+ price + "triệu");
        System.out.println("made in: "+ madein);
        System.out.println("materials: "+ materials);
    }
}
