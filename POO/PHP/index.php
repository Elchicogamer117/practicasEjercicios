<?php
require_once('car.php');
require_once('account.php');
require_once('uberX.php');

$car = new Car("SRA117", new Account("Fernando Esparza", "echo217"));
$car->printDataCar();

$car2 = new Car("FALL343", new Account("Guilty Spark", "343"));
$car2->printDataCar();

$uberX = new UberX("SRA117", new Account("Fernando Esparza", "echo217"), "Warthog", "M12 FAV");
$uberX->printDataCar();

?>