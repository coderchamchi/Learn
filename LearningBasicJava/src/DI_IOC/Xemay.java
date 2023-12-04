package DI_IOC;

public class Xemay
{
    private DongCo dongCo;

    public Xemay(DongCo cc)
    {
        this.dongCo = cc;
    }
    public DongCo getdongco()
    {
        return dongCo;
    }
}
