public class Doctor {
    //Atributos
    static int id = 0; //Autoincrement
    String name;
    String email;
    String speciality;

    Doctor(){
        System.out.println("Construyendo el objeto Doctor");
    }
    Doctor(String name, String speciality){
        System.out.println("El nombre del doctor asignado es: " + name);
        id++;
        this.name = name;
        this.speciality = speciality;
    }

    //Comportamientos
    public void showName(){
        System.out.println(name);
    }
    public void showid(){
        System.out.println("ID Doctor: " + id);
    }
}
