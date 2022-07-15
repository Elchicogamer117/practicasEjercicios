from car import Car
from account import Account

if __name__=="__main__":
    print("Hola Mundo")
    car = Car("SRA117", Account("Fernando Esparza","echo217"))
    car.passenger = 4
    print(vars(car))
    print(vars(car.driver))

    car2 = Car("FALL343", Account("Guilty Spark","343"))
    car2.passenger = 3
    print(vars(car2))
    print(vars(car2.driver))
