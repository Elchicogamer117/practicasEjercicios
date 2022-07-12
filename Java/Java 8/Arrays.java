public class Arrays {
    public static void main(String[] args) {
        String[] androidVersions = new String[17];
        String days[] = new String[7];

        String [][] cities = new String[4][2];
        /*
         * +------------------------------+
         * |  Country    |  City          |
         * --------------------------------
         * | México      | CDMX           |
         * | México      | Guadalajara    |
         * | Colombia    | Bogotá         |
         * | Colombia    | Medellín       |
         * +------------------------------+
         * */
        int [][][] numbers = new int[2][2][2];
        int [][][][] numbers4 = new int[2][2][2][2];

        androidVersions[0] = "Apple Pie";
        androidVersions[1] = "Banana Bread";
        androidVersions[2] = "Cupcake";
        androidVersions[3] = "Donut";
        /*for (int i = 0; i < androidVersions.length; i++) {
            System.out.println(androidVersions[i]);
        }*/
        for (String androidVersion:androidVersions) {
            System.out.println(androidVersion);
        }
        //System.out.println(androidVersions[3]);

        cities[0][0] = "Colombia";
        cities[0][1] = "Medellín";
        cities[1][0] = "Colombia";
        cities[1][1] = "Bogotá";
        cities[2][0] = "México";
        cities[2][1] = "Guadalajara";
        cities[3][0] = "México";
        cities[3][1] = "CDMX";

        /*for (int i = 0; i < cities.length; i++) {
            for (int j = 0; j < cities[i].length; j++) {
                System.out.println(cities[i][j]);
            }
        }*/

        for (String[] pair:cities) {
            for (String name:pair) {
                System.out.println(name);
            }

        }
        //System.out.println(cities[1][0]);
        //System.out.println(cities[2][1]);

        numbers4[1][0][0][1] = 9;
        String[][][][] animals = new String[2][3][2][2];
        animals [1][0][0][1] = "Monkey";

        for (int i = 0; i <= 1; i++) {
            for (int j = 0; j <= 0; j++) {
                for (int k = 0; k <= 0; k++) {
                    for (int l = 0; l <= 1; l++) {
                        System.out.println(animals[i][j][k][l]);
                    }
                }
            }
        }

    }
}
