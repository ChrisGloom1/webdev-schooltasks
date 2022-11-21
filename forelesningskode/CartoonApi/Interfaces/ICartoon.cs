namespace CartoonApi.Interfaces;

public interface ICartoon
{
    int Id {get; set;}
    string Title {get; set;}
    int AgeRestriction {get; set;}
}