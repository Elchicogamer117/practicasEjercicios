class Car {
    Integer id;
    String license;
    Account driver;
    protected Integer passenger;

    public Car(String license, Account driver){
        this.license = license;
        this.driver = driver;
    }

    void printDataCar(){
        if(passenger != null){
            System.out.println("License: " + license + " Name driver: " + driver.name + " Passanger: " + passenger);
        } else {
            System.out.println("Necesitas asignar 4 pasajeros");
        }
    }

    public Integer getPassenger(){
        return passenger;
    }

    public void setPassenger(Integer passenger){
        if(passenger == 4){
            this.passenger = passenger;
        }
    }
}