package P4P;

public class RMidiVietnam extends  RMidiLondon{
    public RMidiVietnam(int id, String color, float price, String madein, String materials, float length, float thickness) {
        super(id, color, price, madein, materials, length, thickness);
    }
    @Override
    public void getinfoRMidiLondon(){
        System.out.println("RMidiVietNam!");
        System.out.println("hight quality product from vietnam!");
    }
}
