public class Main {
    
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        //Car car = new Car("SRA117", new Account("Fernando Esparza", "echo217"));
        //car.passenger = 4;
        //car.printDataCar();
        //System.out.println("Car license: " + car.license);

        //Car car2 = new Car("FALL343",new Account("Guilty Spark", "343"));
        //car2.passenger = 3;
        //car2.printDataCar();

        UberX uberX = new UberX("SRA117", new Account("Fernando Esparza", "echo217"),"Warthog", "M12 FAV");
        uberX.setPassenger(6);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("SRA117", new Account("Fernando Esparza", "echo217"));
        uberVan.setPassenger(6);
        uberVan.printDataCar();
    }
}