import model.*;

import java.util.Date;

public class Main {
    public static void main(String[] args) {

        //showMenu();
        Doctor mySpartanDoctor = new Doctor("Catherine Elizabeth Halsey","halsey343@infinity.unsc");
        mySpartanDoctor.addAvailableAppointment(new Date(), "2pm");
        mySpartanDoctor.addAvailableAppointment(new Date(), "4pm");
        mySpartanDoctor.addAvailableAppointment(new Date(), "6pm");

        User userD = new Doctor("Henry Glassman","glass@infinity.unsc");
        userD.showDataUser();
        User userP = new Patient("Jonh","spartan117@infinity.unsc");
        userP.showDataUser();

        User userA = new User("Cortana", "cortana@infinity.unsc") {
            @Override
            public void showDataUser() {
                System.out.println("Doctora");
                System.out.println("Hospital: Gran caridad");
                System.out.println("Departamento: Parasitología");
            }
        };
        userA.showDataUser();

        ISchedulable iSchedulable = new ISchedulable() {
            @Override
            public void schedule(Date date, String time) {

            }
        };
        ISchedulable iSchedulableA = new AppointmentDoctor();
        iSchedulableA.schedule(new Date(),"12:52");


        /*for (model.Doctor.AvailableAppointment aA: mySpartanDoctor.getAvailableAppointments()) {
            System.out.println(aA.getDate() + " " + aA.getTime());
        }
        Patient patient = new Patient("Jonh", "spartan117@infinity.unsc");

        System.out.println(mySpartanDoctor);
        System.out.println("\n");
        System.out.println(patient);*/
    }


}
