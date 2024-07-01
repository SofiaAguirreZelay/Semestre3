// JavaScript Document
//Clase 6 
//let persona3 = new Persona("Solana", "Petrosian"), Error: no queda definido

class Persona{ //Clase padre

    static contadorPersonas = 0; // Atributo estático
    //email = 'Valor default email'; // Atributo no estático

    static get MAX_OBJ(){ // este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("se ha superado el maximo de objetos permitidos");
        }
        //console.log("Se incrementa el contador: " + Persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona+ " "+  this.nombre_+ ' '+this._apellido;
    }
    // Sobreescribiendo el metodo de la clase padre (Objet)
    toString(){ //Regresa un string
        //Se aplica polimorfismo que significa = multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende si es una referencia de padre o hija
        return this.nombreCompleto(); 
    }

    static saludar(){
        console.log('Saludos desde este método static');
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura 
 nombreCompleto(){
    return super.nombreCompleto()+ ', '+this._departamento;
 }
}

let persona1 = new Persona('Abigail', 'Pereyra');
console.log(persona1.nombre)
persona1.nombre = 'Marcelo Eduardo'
console.log(persona1.nombre);
//console.log(persona1);
let persona2 = new Persona('Tomas', 'Amadeo');
console.log(persona2.nombre)
persona2.nombre = 'Jessica Rocio';
console.log(persona2.nombre)
//console.log(persona2);
persona1.apellido = 'Torino'
console.log(persona1.apellido)
persona2.apellido = 'Molina'
console.log(persona2.apellido)

let empleado1 = new Empleado("Jessica", "Molina", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); No se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

// El atributo no estático se asocia con los ojetos.
console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase.
console.log(persona1.toString());  //1 Marcelo Eduardo Torino
console.log(persona2.toString());  //2 Jessica Rocio Molina 
console.log(empleado1.toString());  //3 Jessica Molina, Sistemas
console.log(Persona.contadorPersonas);
let petsona3 = new Persona('Solana', 'Petrosian')
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; //no se puede modificar ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Horacio","Orozco");
console.log(persona4.toString());
let persona5 = new Persona("Emilia","Coronel");
console.log(persona5.toString());