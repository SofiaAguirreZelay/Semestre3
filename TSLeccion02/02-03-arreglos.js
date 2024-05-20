
//Creación de Array o arreglos 
//Let autos = new Array("Ferrari", "Renault", "BMW"); esta es la sintaxis vieja
const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo
console.log(autos[0]); Ferrari
console.log(autos[2]); BMW

for(Let i = 0; i < autos.length; i++){
  console.log(i+" : "+autos[i]);   
}

//Modificamos los elementos del arreglo
autos[1] = "Volvo";
console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push("audi"); //agregamos el elemento al final del arreglo
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);

//Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = "Renault";
console.log(autos);

//como preguntar si el Array o Arreglo
console.log(Array.isArray(autos)); //Devuelve un booleano


console.log(autos instanceof Array); //PReguntamos si la variable es una instancia de la clase Array
