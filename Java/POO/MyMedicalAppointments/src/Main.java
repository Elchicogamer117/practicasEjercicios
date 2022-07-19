public class Main {
    public static void main(String[] args) {
        //Doctor myDoctor = new Doctor();
        Doctor myDoctor = new Doctor("Catherine Halsey");
        myDoctor.showName();
        myDoctor.name = "Henry Glassman";
        myDoctor.showName();
    }
}
