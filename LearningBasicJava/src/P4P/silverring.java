package P4P;

public class silverring extends jewelry{
    float length;
    float thickness;
    public silverring(String color, float price, String madein, String materials, float length, float thickness){
        super(color, price, madein, materials);
        this.length = length;
        this.thickness = thickness;
    }
    public void getinforsliverring(){
        super.getinfo();
        System.out.println("length: "+ length + "cm");
        System.out.println("thickness: "+ thickness + "mm");
    }
}
