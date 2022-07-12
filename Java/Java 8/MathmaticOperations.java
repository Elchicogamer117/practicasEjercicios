public class MathmaticOperations {
    public static void main(String[] args) {
        double x = 2.1;
        double y = 3;

        System.out.println(Math.PI);
        //Entero hacia arriba
        System.out.println(Math.ceil(x));
        //Hacia abajo
        System.out.println(Math.floor(x));
        //Numero elevado a otro numero
        System.out.println(Math.pow(x,y));
        //Mayor
        System.out.println(Math.max(x,y));
        //Raiz cuadrada
        System.out.println(Math.sqrt(y));
        //Area circulo
        System.out.println(Math.PI * Math.pow(y,2));
        //Area esfera
        System.out.println(4 * Math.PI * Math.pow(y,2));
        //Volumen esfera
        System.out.println((4 / 3) * Math.PI *  Math.pow(y,3));

        //Valores enteros
        int a = 5;
        int b = 10;

        //Valores con decimales
        double i = 2.1;
        double j = 3.5;
        double k = -15;

        //Devuelve el valor absoluto de un argumento dado
        System.out.println(Math.abs(k));

        //Devuelve la suma de sus argumentos
        System.out.println(Math.addExact(a,b));

        //Devuelve la tangente del arco de un angulo (-pi/2 y pi/2)
        System.out.println(Math.atan(j));

        //Devuelve la raiz cubica de un valor double
        System.out.println(Math.cbrt(i));

        //Devuvleve el coseno hiperbolico de un valor double
        System.out.println(Math.cosh(j));

        //Devuelve el coseno trigonometrico de un angulo
        System.out.println(Math.cos(j));

        //Devuelve el numero elevado a la potencia de un valor double
        System.out.println(Math.exp(i));

    }
}
