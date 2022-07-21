import static ui.UIMenu.*;

public class Main {
    public static void main(String[] args) {

        //showMenu();
        Doctor mySpartanDoctor = new Doctor("Catherine Elizabeth Halsey","Spartans");
        mySpartanDoctor.showName();
        System.out.println(mySpartanDoctor.speciality);

        Patient patient = new Patient("John", "spartan117@infinity.unsc");
        patient.setWeight(130);
        System.out.println(patient.getWeight());
        patient.setPhoneNumber("34311721");
        System.out.println(patient.getPhoneNumber());
        /*
        System.out.println(patient.name);
        System.out.println(patient.email);

        patient.weight = 130; //Kg
        patient.height = 2.18; //m
        System.out.println(patient.weight);
        System.out.println(patient.height);
        */
    }


}
