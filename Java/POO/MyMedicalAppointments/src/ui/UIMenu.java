package ui;

import model.Doctor;
import model.Patient;

import java.util.ArrayList;
import java.util.Scanner;

public class UIMenu {

    public final static String[] MONTHS = {"Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
    public static Doctor doctorLogged;
    public static Patient patientLogged;

    public static void showMenu(){
        System.out.println("Welcome to My Appointments");
        System.out.println("Selecciona la opción deseada");

        int response = 0;
        do {
            System.out.println("1 -> Doctor");
            System.out.println("2 -> Patient");
            System.out.println("0 -> Get out");

            Scanner sc = new Scanner(System.in);
            response = Integer.valueOf(sc.nextLine());

            switch (response){
                case 1:
                    response = 0;
                    System.out.println("Doctor \n");
                    authUser(1);
                    break;
                case 2:
                    response = 0;
                    System.out.println("Patient \n");
                    authUser(2);
                    break;
                case 0:
                    System.out.println("Thank you for you visit");
                    break;
                default:
                    System.out.println("Please select a correct answer");
            }
        }while (response != 0);
    }

    static void showPatientMenu(){
        int response = 0;
        do {
            System.out.println("\n");
            System.out.println("model.Patient");
            System.out.println("1. Book an appointment");
            System.out.println("2. My appointments");
            System.out.println("0. Return");

            Scanner sc = new Scanner(System.in);
            response = Integer.valueOf(sc.nextLine());

            switch (response){
                case 1:
                    System.out.println("::Book an appointment");
                    for (int i = 0; i < 3; i++) {
                        System.out.println(i +". "+ MONTHS[i]);
                    }
                    break;
                case 2:
                    System.out.println("::My appointments");
                    break;
                case 0:
                    showMenu();
                    break;
            }
        }while (response != 0);
    }
    
    private static void authUser(int userType){
        //userType = 1 -> Doctor
        //userType = 2 -> Patient

        ArrayList<Doctor> doctors = new ArrayList<>();
        doctors.add(new Doctor("Catherine Elizabeth Halsey", "halsey343@infinity.unsc"));
        doctors.add(new Doctor("Henry Glassman", "glassmanOps@infinity.unsc"));
        doctors.add(new Doctor("Thomas J. Lasky", "lasky343@infinity.unsc"));

        ArrayList<Patient> patients = new ArrayList<>();
        patients.add(new Patient("John", "spartan117@infinity.unsc"));
        patients.add(new Patient("Fernando Esparza", "echo216@infinity.unsc"));
        patients.add(new Patient(" Sarah Palmer", "palmer@infinity.unsc"));

        boolean emailCorrect = false;
        do {
            System.out.println("Insert your email: [a@infinity.unsc]");
            Scanner sc = new Scanner(System.in);
            String email = sc.nextLine();
            if (userType == 1){
                for (Doctor d: doctors) {
                    if (d.getEmail().equals(email)){
                        emailCorrect = true;
                        //Obtener el usuario logueado
                        doctorLogged = d;
                        UIDoctorMenu.showDoctorMenu();
                        //showDoctorMenu
                    }
                }
            }
            if (userType == 2){
                for (Patient p: patients) {
                    if (p.getEmail().equals(email)){
                        emailCorrect = true;
                        //Obtener el usuario logueado
                        patientLogged = p;
                        //showPatientMenu
                    }
                }
            }
        }while (!emailCorrect);
    }

}
