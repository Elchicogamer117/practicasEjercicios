public class Casting {
    public static void main(String[] args) {
        // En un año se reubicaron 30 perritos
        // Cuantos perritos se ubiaron al mes
        double monthlyDogs = 30.0/12.0;
        System.out.println(monthlyDogs);
        // Estimación
        int estimatedMonthlyDogs = (int) monthlyDogs;
        System.out.println(estimatedMonthlyDogs);
        // Exactitud
        int a = 30;
        int b = 12;
        System.out.println((double) a/b);
        // Cast automatico
        double ca = a/b;
        // Cast forzado (explicito)
        double cf = (double) a/b;
        System.out.println(ca);
        System.out.println(cf);

        char n = '1';
        int nI = n;
        System.out.println(nI);

        short nS = (short) n;
        System.out.println(nS);

    }
}
