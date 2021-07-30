/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
*/


function mostrar()
{
    var paisIngresado;
    var habitantesIngresado;
    var temperaturaMinimaIngresada
    var respuesta;
    var esPar;
    var contadorTemperaturasPar;
    var banderaMinimoHabitantes;
    var paisMinimoHabitantes;
    var cantidadMinimoHabitantes;
    var contadorPaisesIngresados;
    var acumuladorHabitantes;
    var contadorAltaTemperatura;
    var promedioHabitantes;
    var banderaTemperaturaMinima;
    var temperaturaMinima;
    var paisTemperaturaMinima;

    respuesta=true;
    contadorTemperaturasPar=0;
    banderaMinimoHabitantes=true;
    contadorAltaTemperatura=0;
    banderaTemperaturaMinima=true;
    acumuladorHabitantes=0;
    
    
    while(respuesta==true)
    {
        paisIngresado=prompt("Ingrese el nombre de un país");
        while(isNaN(paisIngresado)==false)
        {
            paisIngresado=prompt("Ingrese un pais valido");
        }

        habitantesIngresado=prompt("Ingrese cantidad de habitantes en millones:");
        habitantesIngresado=parseInt(habitantesIngresado);
        while(isNaN(habitantesIngresado) || habitantesIngresado<1||habitantesIngresado>7000)
        {
            habitantesIngresado=prompt("Ingrese la cantidad entre 1 y 7000 ");
            habitantesIngresado=parseInt(habitantesIngresado);
        }

        temperaturaMinimaIngresada=prompt("Ingrese la temperatura minima que se registra en el territorio(entre -50 y 50");
        temperaturaMinimaIngresada=parseInt(temperaturaMinimaIngresada);

        while(isNaN(temperaturaMinimaIngresada) || temperaturaMinimaIngresada<-50 || temperaturaMinimaIngresada>50)
        {
            temperaturaMinimaIngresada=prompt("Ingrese una temperatura valida;");
            temperaturaMinimaIngresada=parseInt(temperaturaMinimaIngresada);
        }

        //calculo si es par
        esPar=temperaturaMinimaIngresada%2
        switch(esPar)
        {
            case 0:
                contadorTemperaturasPar++;
                break;
        }

        if(banderaMinimoHabitantes==true) //guardo pais con menos habitantes
        {
            banderaMinimoHabitantes=false;
            paisMinimoHabitantes=paisIngresado;
            cantidadMinimoHabitantes=habitantesIngresado;
        }
        else
        {
            if(habitantesIngresado<cantidadMinimoHabitantes)
            {
                cantidadMinimoHabitantes=habitantesIngresado;
                paisMinimoHabitantes=paisIngresado;
            }
        }

        if(temperaturaMinimaIngresada>40)
        {
            contadorAltaTemperatura++;
        }

        if(banderaTemperaturaMinima==true)
        {
            banderaTemperaturaMinima=false;
            paisTemperaturaMinima=paisIngresado;
            temperaturaMinima=temperaturaMinimaIngresada;            
        }
        else
        {
            if(temperaturaMinimaIngresada<temperaturaMinima)
            {paisTemperaturaMinima=paisIngresado;
            temperaturaMinima=temperaturaMinimaIngresada;
            }
        }

        //acumulo habitantes y cuento paises ingresados
        acumuladorHabitantes=acumuladorHabitantes+habitantesIngresado;
        contadorPaisesIngresados++;





        respuesta=confirm("Quiere agregar otro pais?");
    }

    promedioHabitantes=acumuladorHabitantes/contadorPaisesIngresados;
    

    document.write("a) La cantidad de paises con temperatura par es: " + contadorTemperaturasPar+"<br>"+
                    "b) El pais con menos habitantes es: " + paisMinimoHabitantes + "<br>"+
                    "c) La cantidad de paises que superan los 40 grados son: " + contadorAltaTemperatura + "<br>" +
                    "d) El promedio de habitantes entre los paises ingresados es: " + promedioHabitantes + " millones" + "<br>"+
                    "e) La temperatura minima ingresada es: " + temperaturaMinima + " en " + paisTemperaturaMinima);

}
