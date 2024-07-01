// CLASE 2: Trabajando con Arreglos en JavaScript

// Los arreglos son un tipo de objeto que permiten almacenar distintos valores.
// Declaramos un arreglo utilizando la sintaxis moderna:

const autos = ['Mercedes', 'Nissan', 'BMW']; // Esta forma se usa actualmente.
console.log(autos); // Mostramos el arreglo completo.

// Mostramos un elemento del arreglo.
console.log(autos[0]); // 'Mercedes'

// Recorremos los elementos de un arreglo utilizando el método forEach.
autos.forEach((auto, index) => {
    console.log(`${index}: ${auto}`);
});

// Modificamos elementos.
autos[1] = 'Pagani'; // Cambiamos 'Nissan' por 'Pagani'
console.log(autos[1]); // 'Pagani'

// Agregamos nuevos valores al arreglo utilizando el método concat.
const nuevosAutos = autos.concat('Maserati');
console.log(nuevosAutos); // ['Mercedes', 'Pagani', 'BMW', 'Maserati']

// Agregamos nuevos valores al arreglo utilizando el operador de propagación (spread operator).
const masAutos = [...nuevosAutos, 'McLaren'];
console.log(masAutos); // ['Mercedes', 'Pagani', 'BMW', 'Maserati', 'McLaren']

// Otra forma para agregar nuevos valores al arreglo utilizando splice.
masAutos.splice(masAutos.length, 0, 'Alfa Romeo');
console.log(masAutos); // ['Mercedes', 'Pagani', 'BMW', 'Maserati', 'McLaren', 'Alfa Romeo']

// Preguntamos si es un Arreglo, devolverá un booleano.
console.log(Array.isArray(masAutos)); // true

// Otra forma de comprobar si es arreglo, preguntamos si la variable es una instancia de la clase Array.
console.log(masAutos instanceof Array); // true

// Eliminamos el último elemento del arreglo.
const ultimoAuto = masAutos.pop();
console.log(ultimoAuto); // 'Alfa Romeo'
console.log(masAutos); // ['Mercedes', 'Pagani', 'BMW', 'Maserati', 'McLaren']

// Eliminamos el primer elemento del arreglo.
const primerAuto = masAutos.shift();
console.log(primerAuto); // 'Mercedes'
console.log(masAutos); // ['Pagani', 'BMW', 'Maserati', 'McLaren']

// Encontramos el índice de un elemento.
const indiceBMW = masAutos.indexOf('BMW');
console.log(indiceBMW); // 1

// Eliminamos un elemento por su índice.
masAutos.splice(indiceBMW, 1);
console.log(masAutos); // ['Pagani', 'Maserati', 'McLaren']
// JavaScript Document