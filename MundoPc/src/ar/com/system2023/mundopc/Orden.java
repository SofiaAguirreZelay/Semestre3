package ar.com.system2023.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[]; //Arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;
    
    //Constructor vacio
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new computadora[Orden.MAX_COMPUTADORAS];
    }
    
    //Metodo para agregar una nueva computadora al arreglo
    public void agregarComputadora(computadora computadora){
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadora++] = computadora;
        }
        else{
            System.out.printIn("Has superado el limite: "+Orden.MAX_COMPUTADORAS);
        }
    }

    //Mostrar orden
    public void mostrarOrden(){
        System.out.printIn("Orden #: "+this.IdORden);
        System.out.printIn("Computadoras de la orden #: "+this.idOrden);
        for(int i = 0; i < this.contadorComputadora; i++){
            System.out.printIn(this.computadora[i]);
        }
    }
    
}
    
