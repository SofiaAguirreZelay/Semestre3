
// Creación de Array o arreglos
// Let autos = new Array("Ferrari", "Renault", "BMW"); esta es la sintaxis vieja
const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

// Recorremos los elementos de un arreglo
console.log(autos[0]);  Ferrari
console.log(autos[2]); BMW

for(let i = 0; i < autos.length; i++){
    console.log(i+" :"+autos[i]);  0 : Ferrari, 1 : Renault, 2 : BMW
}

// Modificamos los elementos del arreglo
autos[1] = "Volvo";
console.log(autos[1]); Volvo

// Agregamos nuevos valores al arreglo
autos.push("audi"); // Agregamos el elemento al final del arreglo
console.log(autos);

// Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos); [ "Ferrari", "Volvo", "BMW", "Audi", "Porche" ]

// Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = "Renault";
console.log(autos); [ "Ferrari", "Volvo", "BMW", "Audi", "Porche" ]

// Como preguntar si es una Array o un arreglo
console.log(Array.isArray(autos)); // Devuelve un booleano


console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase Array
