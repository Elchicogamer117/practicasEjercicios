package model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class Doctor extends User {
    //Atributo identificador
    private String speciality;
    public Doctor(String name, String email){
        super(name, email);
        //System.out.println("El nombre del doctor asignado es: " + name);
        this.speciality = speciality;
    }
    public String getSpeciality() {
        return speciality;
    }
    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    @Override
    public String toString() {
        return super.toString() + "\n Speciality: " + speciality + "\n Available: " + availableAppointments.toString();
    }

    @Override
    public void showDataUser() {
        System.out.println("Empleado de hospital: Nueva efira");
        System.out.println("Departamento: Cancerologia");
    }

    ArrayList<AvailableAppointment>availableAppointments = new ArrayList<>();
    public void addAvailableAppointment(String date,String time){
        availableAppointments.add(new AvailableAppointment(date,time));
    }
    public ArrayList<AvailableAppointment> getAvailableAppointments(){
        return availableAppointments;
    }
    public static class AvailableAppointment{
        private int id;
        private Date date;
        private  String time;
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        public AvailableAppointment(String date, String time) {
            try {
                this.date = format.parse(date);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
            this.time = time;
        }
        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }

        public Date getDate() {
            return date;
        }
        public String getDate(String DATE){
            return format.format(date);
        }
        public void setDate(Date date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }
        public void setTime(String time) {
            this.time = time;
        }

        @Override
        public String toString() {
            return "Available appointments \n Date: " + date + "\n Time: " + time;
        }
    }
}
