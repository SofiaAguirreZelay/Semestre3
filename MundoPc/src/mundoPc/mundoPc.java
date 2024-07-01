package mundoPc;

public class mundoPc {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, teclado-hp,ratonHP);
        
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32); //Importar la clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora("computadora de diferentes marcas", monitorHP, tecladoGamer,ratonHP);
        orden2.agregarComputadora(computadorasVarias);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
    }
}
