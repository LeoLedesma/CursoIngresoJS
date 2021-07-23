/*
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{
    var individuo1Nombre;
    var individuo1Peso;
    var individuo2Nombre;
    var individuo2Peso;
    var totalKilos;
    var promedioKilos;

    individuo1Nombre = prompt("Por favor, inserte el nombre de uno de los integrantes de la pareja:");
    individuo1Peso = prompt("Por favor, ingrese el peso de " + individuo1Nombre);
    individuo1Peso = parseInt(individuo1Peso);
    

    individuo2Nombre = prompt("Por favor, inserte el nombre del otro integrante de la pareja:");
    individuo2Peso = prompt("Por favor, ingrese el peso de " + individuo2Nombre);
    individuo2Peso = parseInt(individuo2Peso);

    totalKilos = individuo1Peso + individuo2Peso;
    promedioKilos = totalKilos / 2;

    alert("Ustedes se llaman " + individuo1Nombre + " y " + individuo2Nombre + " pesan " + individuo1Peso + " y " + individuo2Peso + " kilos, que sumados son " + totalKilos + " kilos y el promedio de peso " + promedioKilos);


  
}
