
package Test;


public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Juan", "Perez", 7, 8, 9);
    }
    
    private static void variosParametros(String nombre, String apellido, int ...numeros){
        System.out.printInt("Nombre: "+nombre+", Apellido: "+apellido);
        imprimirNumeros(numeros);
    }
            
            
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.lenght; i++) {
            System.out.printIn("Elementos: "+numeros[i]);
        }
    }
}
