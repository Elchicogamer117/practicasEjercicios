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
    }


}
