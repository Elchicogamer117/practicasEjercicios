public class SwitchStatement {
    public static void main(String[] args) {
        String colorModeSeleted = "Dark";

        switch (colorModeSeleted){
            case "Light":
                System.out.println("Light mode");
                break;
            case "Night":
                System.out.println("Night mode");
                break;
            case "Blue dark":
                System.out.println("Blue dark mode");
                break;
            case "Dark":
                System.out.println("Dark mode");
                break;
            default:
                System.out.println("Invalido");
        }
    }
}
