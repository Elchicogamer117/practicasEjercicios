import java.util.Date;

import static ui.UIMenu.*;

public class Main {
    public static void main(String[] args) {

        //showMenu();
        Doctor mySpartanDoctor = new Doctor("Catherine Elizabeth Halsey","Spartans");
        mySpartanDoctor.addAvailableAppointment(new Date(), "2pm");
        mySpartanDoctor.addAvailableAppointment(new Date(), "4pm");
        mySpartanDoctor.addAvailableAppointment(new Date(), "6pm");

        for (Doctor.AvailableAppointment aA: mySpartanDoctor.getAvailableAppointments()) {
            System.out.println(aA.getDate() + " " + aA.getTime());
        }
        /*
        Patient patient = new Patient("John", "spartan117@infinity.unsc");
        Patient patient2 = new Patient("Kai", "spartan125@plata.unsc");
        System.out.println(patient.getName());
        System.out.println(patient2.getName());
        patient = patient2;
        System.out.println(patient.getName());
        System.out.println(patient2.getName());
        patient2.setName("Kate");
        System.out.println(patient.getName());
        System.out.println(patient2.getName());

        patient.setWeight(130);
        System.out.println(patient.getWeight());
        patient.setPhoneNumber("34311721");
        System.out.println(patient.getPhoneNumber());
         */

    }


}
