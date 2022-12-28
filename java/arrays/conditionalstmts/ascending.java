import java.util.Scanner; 
class ascending
{
  public static void main(String[] args)
  {
    Scanner reader = new Scanner(System.in); 
    System.out.print("Enter three numbers.");
    double x = reader.nextDouble();
    double y = reader.nextDouble(); 
    double z = reader.nextDouble();
    if (x >= y)
    {
        if (y >= z)
            System.out.print("In order " + z + " "+ y + " " + x);

            if  (z >= x)
                System.out.print("In order " + y + " "+ x + " " + z);

                if (x > z)
                     System.out.print("In order " + y + " " + z + " " + x);
    }

    if (y > x)
    {
        if (z >= y)
            System.out.print("In order " + x + " " + y + " "+ z);
            if (z >= x)
                System.out.print("In order " + y + " " + x + " " + z);
                if (x > z)
                    System.out.print("In order " + y + " " + z + " " + x);
    }
  }
}