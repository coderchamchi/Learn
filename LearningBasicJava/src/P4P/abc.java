package P4P;

public class abc {
    private int idd ;
    String color ;
    protected float price ;

    public void setId(int idd) {
        this.idd = idd;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setPrice(float price) {
        this.price = price;
    }

    public int getIdd() {
        return idd;
    }

    public String getColor() {
        return color;
    }

    public float getPrice() {
        return price;
    }

    public void print(){
        System.out.println(idd + "," + color + "," + price);
    }
}
