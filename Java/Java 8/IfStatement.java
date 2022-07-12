public class IfStatement {
    public static void main(String[] args) {
        boolean isBluetoothEnabled = true;
        int filesSended = 3;

        if (isBluetoothEnabled){
            //Send file
            filesSended++;
            System.out.println("Archivo enviado");
            System.out.println(filesSended);
        } else {
            System.out.println("Bluetooth apagado");
            System.out.println(filesSended);
        }
    }
}
