/**
 * 
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino

 * 
 */


function mostrar()
{
    var pregunta;
    var nombreIngresado;
    var edadIngresada;
    var sexoIngresado;
    var notaIngresada;
    var cantidadVarones;
    var acumuladorMasculino;
    var acumuladorFemenino;

    var acumuladorNotaMenores;
    var acumuladorNotaAdolescentes;
    var acumuladorNotaMayores;
    var promedioNotaMenores;
    var promedioNotaAdolescentes;
    var promedioNotaMayores;
    var promedioNotaMasculinos;
    var promedioNotaFemeninos;

    var contadorMenores;
    var contadorAdolescentes
    var contadorMayores;
    var contadorMasculino;
    
    pregunta=true;
    cantidadVarones=0;

    nombreIngresado=prompt("Ingrese nombre");
    
    edadIngresada=prompt("Ingrese edad");
    edadIngresada=parseInt(edadIngresada);

    while(isNaN(edadIngresada) || edadIngresada<0)
    {
        edadIngresada=prompt("Ingrese una edad valida");
        edadIngresada=parseInt(edadIngresada);
    }

    sexoIngresado=prompt("Ingrese sexo, m para masculino y f para femenino");
    sexoIngresado=sexoIngresado.toLowerCase();

    while(isNaN(sexoIngresado)==false || sexoIngresado!="f" || sexoIngresado!="m")
    {
        sexoIngresado=prompt("Ingrese sexo valido, m para masculino y f para femenino");
        sexoIngresado=sexoIngresado.toLowerCase();
    }

    notaIngresada=prompt("Ingrese la nota final");
    notaIngresada=parseInt(notaIngresada);

    while(isNaN(notaIngresada) || notaIngresada<0 || notaIngresada>10)
    {
        notaIngresada=prompt("Ingrese la nota final valida entre 0 y 10");
        notaIngresada=parseInt(notaIngresada);
    }


    switch(sexoIngresado)
    {
        case "m":
            contadorMasculino++
            acumuladorNotaMayores++

            if(notaIngresada>4)
            {
                cantidadVarones++
            }
            break;
    }





}
