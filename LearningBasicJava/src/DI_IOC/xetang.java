package DI_IOC;

public class xetang
{
    private DongCo dongCo;
    public xetang(DongCo cc)
    {
        this.dongCo = cc;
    }
    public DongCo getdongco()
    {
        return dongCo;
    }
}

