public class Main {
    public static void main(String[] args) {

        Doctor myDoctor = new Doctor();
        myDoctor.name = "Henry Glassman";
        myDoctor.showName();
        myDoctor.showid();

        Doctor myDoctorCat = new Doctor();
        myDoctorCat.showid();

        UIMenu.showMenu();
    }


}
