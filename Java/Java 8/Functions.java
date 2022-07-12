public class Funciones {
    public static void main(String[] args) {
        double y = 4;
        double area = circleArea(y);
        System.out.println(area);
        System.out.println(sphereArea(y));
        System.out.println("Pesos a dolar: " + converToDolar(1000, "COP"));
    }
    /**
     * Función para obtener el area de un circulo.
     * @param r radio del circulo.
     * @return Area del circulo.
     * */
    public static double circleArea(double r){
        return Math.PI * Math.pow(r,2);
    }
    public static double sphereArea(double r){
        return 4 * Math.PI * Math.pow(r,2);
    }
    /**
     * Función para convertir tu moneda a dolares.
     * @param quantity Cantidad de dinero
     * @param currency Tipo de moneda: Solo acepta MXN o COP
     * @return quantity Devuelve la cantiadad actualizada a dolares
     * */
    public static double converToDolar(double quantity, String currency){
        //MXN COP
        switch (currency){
            case "MXN":
                quantity = quantity * 0.048;
                break;
            case "COP":
                quantity *= 0.00022;
                break;
        }
        return quantity;
    }
}
