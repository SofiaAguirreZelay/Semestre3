let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log("Tipos primitivos");
//Objeto
let persona = {
    nombre: "carlos",
    apellido: "Gil",
    email: "cgil@gmail.com",
    edad: 30,
    nombrecompleto: function(){
      return this.nombre+" "+this.apellido;
    }
}

console.log(persona.nombre); 
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombrecompleto());
console.log("Ejecutando con un objeto");
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "2154894532684";
console.log(persona2.telefono);
console.log("Creamos un nuevo objeto");
console.log(persona[apellido]); //Accedemos como si fuera un arreglo
//for in y accedemos a objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);   
}
console.log("Cambiamos y eliminamos un error");
persona.apellido = "Betancud"; //Cambiemos dinámicamente un valor del objeto
delete persona.apellido; //Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Número1: La más sencilla: Concatenar cada valor de cada propiedad
console.log(persona.nombre+", "+persona.apellido);

//Número2: A través del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número3: La función Object.value()
console.log("Distintas formas de imprimir un objeto: forma 1");
let personaarray = Object.values(persona);
console.log(personaarray);

//Número4: Utilizaremos el método JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personastring = JSON.stringify(persona);
console.log(personastring);
