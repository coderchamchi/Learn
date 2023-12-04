package P4P;

public class RMidiLondon extends silverring{
    int id;
    public RMidiLondon
            (int id, String color, float price, String madein, String materials, float length, float thickness){
        super(color, price, madein, materials, length, thickness);
        this.id = id;
    }
    public void getinfoRMidiLondon(){
        System.out.println("id: " + id);
        super.getinforsliverring();
    }
}
