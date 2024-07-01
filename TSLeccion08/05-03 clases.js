// JavaScript Document
//let persona3 = new Persona('Solana', 'Petrosian'); esto no se debe hacer: Persona is not defined


class Persona { // Clase padre
    
    static contadorPersonas = 0; //Atributo estatico
    //email = "Valor default email"; //Atributo NO estatico
    static get MAX_OBJ(){ //Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("Se ha superado el maximo de objetos permitidos")
        };
        //console.log("Se incrementa el contador: "+Persona.contadorObjetosPersona);
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona+" "+this._nombre + ' ' + this._apellido;
    }
    // Sobreescribiendo el metodo de la clase padre (object)
     toString(){ //Regresa un String
        // Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende si es una referencia si es tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el metodo static")
    }

    static saludar2(persona){
        console.log(persona.nombre+" "+persona.apellido);
    }

}

class Empleado extends Persona{ // Clase hija  
    constructor (nombre,apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona("Ramon", "Nuñez");
//console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = "Jose Miguel";
console.log(persona1.nombre);
persona1.apellido = "Alvarez";
console.log(persona1._apellido);

let persona2 = new Persona("Carlos", "Fara");
persona2.nombre = "Leila Micaela";
//console.log(persona2);
console.log(persona2.nombre);
persona2.apellido = "Fernandez";
console.log(persona2.apellido);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); No se utiliza desde el objeto
Persona.saludar(); //Se utiliza desde la clase
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona("Carla", "Petrosian");
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; No se puede modificar ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Franco", "Paz");
console.log(persona4.toString());
console.log(Persona.contadorPersonas);

let persona5 = new Persona("Carolina", "Babasina");
console.log(persona5.toString());