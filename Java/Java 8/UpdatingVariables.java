public class UpdatingVariables {
    public static void main(String[] args) {
        int salary = 1000;
        //bono: $200
        //salary = salary + 200;
        salary += 200;
        System.out.println(salary);
        // pension: $50 descuento
        salary = salary - 50;
        System.out.println(salary);
        //2 horas extra: $30c/u
        //Comida: $45
        salary = salary + (2*30) - 45;
        System.out.println(salary);
        //Actualizando cadenas de texto
        String employeeName = "Cristian Flores";
        employeeName = employeeName + " Méndez";
        System.out.println(employeeName);
        employeeName = "Ing. " + employeeName;
        System.out.println(employeeName);
    }
}
