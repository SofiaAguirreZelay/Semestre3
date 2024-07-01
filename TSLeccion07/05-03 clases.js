// JavaScript Document
//let persona3 = new Persona('Solana', 'Petrosian'); esto no se debe hacer: Persona is not defined


class Persona { // Clase padre
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido;
    }
    // Sobreescribiendo el metodo de la clase padre (object)
     toString(){ //Regresa un String
        // Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende si es una referencia si es tipo padre o hija
        return this.nombreCompleto();
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

let persona1 = new Persona("Leila", "Fernandez");
//console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = "Gonzalo Dario";
console.log(persona1.nombre);
persona1.apellido = "Nieva";
console.log(persona1._apellido);

let persona2 = new Persona("Sebastian", "Cornejo");
persona2.nombre = "Maria Agustina";
//console.log(persona2);
console.log(persona2.nombre);
persona2.apellido = "Morales";
console.log(persona2.apellido);

let empleado1 = new Empleado('Maria', 'Morales', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());