public class DataTypes {
    public static void main(String[] args) {
        int n = 1234568789;
        long nL = 12345687894321L;

        double nD = 117.3437895216589;
        float nF = 117.343F;

        var salary = 1000;
        //pension: 3%
        var pension = salary*0.03;
        var totalSalary = salary - pension;
        System.out.println(salary);
        System.out.println(pension);
        System.out.println(totalSalary);

        var employeeName = "Cristian Flores";
        System.out.println("Employee: " + employeeName + "\nSalary: " + totalSalary);
    }
}
